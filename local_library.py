"""Indexador da biblioteca local do NEXA (HD externo).

Apenas biblioteca padrão do Python. Gera um catálogo no formato consumido
pelo front-end do NEXA, com filmes, séries, músicas e URLs de streaming.
"""

from __future__ import annotations

import base64
import hashlib
import json
import os
import re
import threading
import time
import unicodedata
from html import escape as xml_escape
from pathlib import Path

VIDEO_EXTS = {
    ".mp4", ".m4v", ".webm", ".ogv", ".ogg", ".mov", ".mkv", ".avi",
    ".wmv", ".flv", ".ts", ".m2ts", ".mpg", ".mpeg",
}
BROWSER_VIDEO_EXTS = {".mp4", ".m4v", ".webm", ".ogv", ".ogg"}
AUDIO_EXTS = {".mp3", ".m4a", ".aac", ".ogg", ".oga", ".opus", ".flac", ".wav", ".wma"}
BROWSER_AUDIO_EXTS = {".mp3", ".m4a", ".aac", ".ogg", ".oga", ".opus", ".flac", ".wav"}
IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"}
SUB_EXTS = {".srt", ".vtt"}

SKIP_DIRS = {
    "system volume information", "$recycle.bin", "#recycle", "lost+found",
    "node_modules", ".git", ".thumbnails", "recordings", ".trash",
    ".trash-1000", "temp", "tmp", "mediacenter", "jogos ps1", ".data",
}
GENERIC_DIRS = {
    "filmes", "filme", "movies", "movie", "series", "séries", "serie",
    "série", "shows", "show", "tv", "televisão", "televisao", "videos",
    "vídeos", "video", "midia", "mídia", "media", "musicas", "músicas",
    "music", "musica", "música",
}
RELEASE_TAGS = re.compile(
    r"\b(?:2160p|1440p|1080p|720p|480p|360p|240p|4k|uhd|bluray|blu-ray|"
    r"web[- .]?dl|webrip|hdtv|dvdrip|brrip|remux|x264|x265|h264|h265|hevc|"
    r"av1|aac|ac3|eac3|dts|ddp?5[ .]?1|dual[ .]?audio|dublado|legendado|"
    r"remastered|extended|directors[ .]?cut|dc|hdr|10bit|8bit|proper|repack)\b",
    re.IGNORECASE,
)
TAKEOUT_SUFFIX = re.compile(r"-\d{8}t\d{6}z-\d+-\d+$", re.IGNORECASE)
YEAR_RE = re.compile(r"(?<!\d)(19\d{2}|20\d{2})(?!\d)")
SEASON_RE = re.compile(r"(?:temporada|season|temporadas?|t|s)\s*0*(\d{1,2})", re.IGNORECASE)
EXPLICIT_EPISODE_RE = re.compile(r"(?:s|t)\s*0*(\d{1,2})[\s._-]*e(?:p)?\s*0*(\d{1,3})", re.IGNORECASE)
CROSS_EPISODE_RE = re.compile(r"(?<!\d)(\d{1,2})x(\d{1,3})(?!\d)", re.IGNORECASE)

SUB_LANGS = [
    ("pob", "Português (BR)"), ("pt-br", "Português (BR)"), ("ptbr", "Português (BR)"), ("pt", "Português"),
    ("por", "Português"), ("portugues", "Português"), ("português", "Português"),
    ("eng", "Inglês"), ("en", "Inglês"), ("english", "Inglês"), ("ingles", "Inglês"),
    ("spa", "Espanhol"), ("es", "Espanhol"), ("espanhol", "Espanhol"),
    ("fre", "Francês"), ("fr", "Francês"), ("frances", "Francês"),
    ("ger", "Alemão"), ("de", "Alemão"), ("alemao", "Alemão"),
    ("ita", "Italiano"), ("it", "Italiano"), ("jpn", "Japonês"),
    ("ja", "Japonês"), ("jp", "Japonês"),
]

_scan_lock = threading.Lock()
_scan_state = {"scanning": False, "startedAt": 0, "error": None}


def _norm(text: str) -> str:
    text = unicodedata.normalize("NFKD", str(text or ""))
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    return re.sub(r"[^a-z0-9]+", "", text.lower())


def _hash(value: str, size: int = 14) -> str:
    return hashlib.sha1(str(value).encode("utf-8", "surrogateescape")).hexdigest()[:size]


def _b64(rel: str) -> str:
    raw = base64.urlsafe_b64encode(str(rel).encode("utf-8", "surrogateescape")).decode("ascii")
    return raw.rstrip("=")


def _media_url(root_key: str, rel: str, transcode: bool = False) -> str:
    base = "/api/local/transcode" if transcode else "/api/local/media"
    return f"{base}?root={root_key}&path={_b64(rel)}"


def _subtitle_url(root_key: str, rel: str) -> str:
    return f"/api/local/subtitle?root={root_key}&path={_b64(rel)}"


def _art_url(root_key: str, rel: str) -> str:
    return f"/api/local/art?root={root_key}&path={_b64(rel)}"


def placeholder_url(title: str, kind: str = "poster") -> str:
    from urllib.parse import quote
    return f"/api/local/art?title={quote(str(title or 'NEXA'))}&kind={kind}"


def _clean_text(text: str) -> str:
    text = str(text or "")
    text = TAKEOUT_SUFFIX.sub("", text)
    text = re.sub(r"\.(mp4|m4v|webm|ogv|ogg|mov|mkv|avi|wmv|flv|ts|m2ts|mpg|mpeg)$", " ", text, flags=re.IGNORECASE)
    text = RELEASE_TAGS.sub(" ", text)
    text = re.sub(r"[._]+", " ", text)
    text = re.sub(r"\(\s*\d+\s*\)", " ", text)
    text = re.sub(r"\s+", " ", text).strip(" -–—._")
    return text


def _display(text: str) -> str:
    text = _clean_text(text)
    if not text:
        return ""
    letters = [ch for ch in text if ch.isalpha()]
    if letters and all(ch.isupper() for ch in letters):
        small = {"a", "o", "e", "de", "da", "do", "das", "dos", "em", "no", "na", "nos", "nas", "e", "the", "of", "and"}
        words = []
        for word in text.title().split():
            words.append(word.lower() if word.lower() in small and words else word)
        text = " ".join(words)
    elif letters and all(ch.islower() for ch in letters):
        small = {"a", "o", "e", "de", "da", "do", "das", "dos", "em", "no", "na", "nos", "nas", "e", "the", "of", "and"}
        words = []
        for word in text.title().split():
            words.append(word.lower() if word.lower() in small and words else word)
        text = " ".join(words)
    return text.strip()


def _split_year(text: str) -> tuple[str, int | None]:
    match = YEAR_RE.search(text)
    year = int(match.group(1)) if match else None
    if match:
        text = f"{text[:match.start()]} {text[match.end():]}"
    title = _display(text) or _display(text.replace(".", " "))
    return title, year


def _parse_season(name: str) -> int | None:
    match = SEASON_RE.search(_clean_text(name))
    if not match:
        return None
    value = int(match.group(1))
    return value if 0 < value < 100 else None


def _subtitle_info(name: str) -> tuple[str, str]:
    clean = _clean_text(re.sub(r"\.(srt|vtt)$", "", name, flags=re.IGNORECASE))
    low = clean.lower()
    for token, label in SUB_LANGS:
        if re.search(rf"(?:^|[ ._-]){re.escape(token)}(?:$|[ ._-])", low):
            return token.replace("-", ""), label
    return "pt", "Legenda"


def _subtitle_core(name: str) -> str:
    clean = _clean_text(re.sub(r"\.(srt|vtt)$", "", name, flags=re.IGNORECASE))
    low = clean.lower()
    for token, _label in SUB_LANGS:
        low = re.sub(rf"(?:^|[ ._-]){re.escape(token)}(?=$|[ ._-])", " ", low)
    return _norm(low)


def _find_subtitles(video_rel: str, root_key: str, directory_files: dict[str, list[str]]) -> list[dict]:
    rel_dir = os.path.dirname(video_rel)
    siblings = directory_files.get(rel_dir, [])
    stem = os.path.splitext(os.path.basename(video_rel))[0]
    core = _norm(_clean_text(stem))
    year_match = YEAR_RE.search(stem)
    year = year_match.group(1) if year_match else ""
    found = []
    for name in siblings:
        sub_stem = os.path.splitext(name)[0]
        sub_core = _subtitle_core(name)
        if not sub_core:
            continue
        ok = sub_core.startswith(core) or core.startswith(sub_core)
        if not ok:
            ok = bool(core and (core in sub_core or sub_core in core))
        if not ok and year:
            ok = year in name and _norm(_clean_text(stem).replace(year, ""))[:10] in sub_core
        if not ok:
            continue
        rel = os.path.join(rel_dir, name) if rel_dir else name
        lang, label = _subtitle_info(name)
        forced = "forced" in name.lower()
        sdh = bool(re.search(r"\b(sdh|cc)\b", name, re.IGNORECASE))
        suffix = " (Forçada)" if forced else " (SDH)" if sdh else ""
        found.append({
            "id": f"local-sub-{_hash(rel)}",
            "label": f"{label}{suffix}",
            "lang": lang,
            "source": "local-server",
            "name": name,
            "url": _subtitle_url(root_key, rel.replace(os.sep, "/")),
        })
    return found


def _pick_image(directory: str, stem: str = "") -> str | None:
    try:
        entries = [entry for entry in os.scandir(directory) if entry.is_file()]
    except OSError:
        return None
    by_name = {entry.name.lower(): entry.path for entry in entries if os.path.splitext(entry.name)[1].lower() in IMAGE_EXTS}
    if stem:
        normalized_stem = _norm(_clean_text(stem))
        for name, path in by_name.items():
            if _norm(os.path.splitext(name)[0]) == normalized_stem:
                return path
    for wanted in ("poster", "folder", "cover", "front", "album", "albumart", "artwork", "fanart", "backdrop", "thumb", "movie", "show"):
        for name, path in by_name.items():
            if os.path.splitext(name)[0].lower() == wanted:
                return path
    return next(iter(by_name.values()), None)


def _walk_files(root: str):
    for current, dirs, files in os.walk(root):
        dirs[:] = [name for name in dirs if name.lower() not in SKIP_DIRS and not name.startswith(".")]
        yield current, files


def _safe_inside(base: str, rel: str) -> str | None:
    try:
        base_path = Path(base).resolve()
        target = (base_path / rel).resolve()
        target.relative_to(base_path)
        return str(target)
    except (ValueError, OSError):
        return None


def _read_id3(path: str) -> dict:
    tags = {}
    try:
        with open(path, "rb") as handle:
            data = handle.read(96 * 1024)
        if data[:3] == b"ID3" and len(data) > 10:
            version = data[3]
            body = data[10:]
            offset = 0
            wanted = {"TIT2": "title", "TPE1": "artist", "TALB": "album", "TDRC": "year", "TYER": "year", "TRCK": "track"}
            while offset + 10 <= len(body):
                frame_id = body[offset:offset + 4]
                if not re.match(rb"[A-Z0-9]{4}", frame_id):
                    break
                if version == 4:
                    size = ((body[offset + 4] & 0x7F) << 21) | ((body[offset + 5] & 0x7F) << 14) | ((body[offset + 6] & 0x7F) << 7) | (body[offset + 7] & 0x7F)
                else:
                    size = int.from_bytes(body[offset + 4:offset + 8], "big")
                if size <= 0 or offset + 10 + size > len(body):
                    break
                key = frame_id.decode("ascii", "ignore")
                if key in wanted:
                    payload = body[offset + 10:offset + 10 + size]
                    encoding = payload[0] if payload else 0
                    raw = payload[1:] if payload else b""
                    if encoding == 1:
                        text = raw.decode("utf-16", "ignore")
                    elif encoding == 2:
                        text = raw.decode("utf-16-be", "ignore")
                    elif encoding == 3:
                        text = raw.decode("utf-8", "ignore")
                    else:
                        text = raw.decode("latin-1", "ignore")
                    tags[wanted[key]] = text.replace("\x00", " ").strip()
                offset += 10 + size
        elif len(data) >= 128 and data[-128:-125] == b"TAG":
            tail = data[-128:]
            tags["title"] = tail[3:33].decode("latin-1", "ignore").strip("\x00 ")
            tags["artist"] = tail[33:63].decode("latin-1", "ignore").strip("\x00 ")
            tags["album"] = tail[63:93].decode("latin-1", "ignore").strip("\x00 ")
            tags["year"] = tail[93:97].decode("latin-1", "ignore").strip("\x00 ")
        elif data[:4] == b"fLaC":
            offset = 4
            while offset + 4 <= len(data):
                header = data[offset]
                block_type = header & 0x7F
                length = int.from_bytes(data[offset + 1:offset + 4], "big")
                payload = data[offset + 4:offset + 4 + length]
                offset += 4 + length
                if block_type == 4 and len(payload) >= 8:
                    vendor_len = int.from_bytes(payload[:4], "little")
                    pos = 4 + vendor_len
                    count = int.from_bytes(payload[pos:pos + 4], "little") if pos + 4 <= len(payload) else 0
                    pos += 4
                    for _ in range(count):
                        if pos + 4 > len(payload):
                            break
                        comment_len = int.from_bytes(payload[pos:pos + 4], "little")
                        comment = payload[pos + 4:pos + 4 + comment_len].decode("utf-8", "ignore")
                        pos += 4 + comment_len
                        if "=" in comment:
                            key, value = comment.split("=", 1)
                            key = key.strip().upper()
                            if key in ("TITLE", "ARTIST", "ALBUM", "DATE", "YEAR", "TRACKNUMBER"):
                                target = "year" if key in ("DATE", "YEAR") else "track" if key == "TRACKNUMBER" else key.lower()
                                tags[target] = value.strip()
                if header & 0x80:
                    break
    except OSError:
        pass
    return tags


def _track_number(text: str) -> int | None:
    match = re.match(r"\s*0*(\d{1,3})\s*[-._)]", str(text or ""))
    return int(match.group(1)) if match else None


def _album_meta(folder: str) -> tuple[str, str, int | None]:
    raw = os.path.basename(folder.rstrip(os.sep))
    cleaned = _display(raw)
    year_match = YEAR_RE.search(cleaned)
    year = int(year_match.group(1)) if year_match else None
    artist = ""
    album = cleaned
    match = re.match(r"^(.+?)\s+-\s+(.+)$", cleaned)
    if match and not re.match(r"^\d+$", match.group(1).strip()):
        artist = match.group(1).strip()
        album = match.group(2).strip()
    album = YEAR_RE.sub("", album).strip(" -–—")
    return album or "Álbum local", artist, year


def _placeholder_svg(title: str, kind: str) -> bytes:
    width, height = (1280, 720) if kind == "backdrop" else (600, 600) if kind == "cover" else (400, 600)
    palette = ["#7f1d1d", "#1e3a8a", "#065f46", "#7c2d12", "#4c1d95", "#831843", "#134e4a"]
    color = palette[int(_hash(title or "NEXA", 8), 16) % len(palette)]
    words = (title or "NEXA").upper().split()
    lines, current = [], ""
    max_chars = 16 if kind == "poster" else 26
    for word in words:
        candidate = f"{current} {word}".strip()
        if len(candidate) > max_chars and current:
            lines.append(current)
            current = word
        else:
            current = candidate
    if current:
        lines.append(current)
    lines = lines[:4] or ["NEXA"]
    font_size = 54 if kind == "poster" else 64
    start_y = height / 2 - (len(lines) - 1) * font_size * 0.6
    text = "".join(
        f'<text x="{width/2}" y="{start_y + index * font_size * 1.15}" fill="#f5f5f5" '
        f'font-family="Inter,Arial,sans-serif" font-size="{font_size}" font-weight="800" '
        f'text-anchor="middle">{xml_escape(line)}</text>'
        for index, line in enumerate(lines)
    )
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}">'
        f'<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">'
        f'<stop offset="0" stop-color="{color}"/><stop offset="1" stop-color="#080808"/>'
        f'</linearGradient></defs><rect width="{width}" height="{height}" fill="url(#g)"/>'
        f'<text x="{width/2}" y="{height*0.16}" fill="#ffffff55" font-family="Inter,Arial,sans-serif" '
        f'font-size="{font_size*0.5}" font-weight="900" letter-spacing="8" text-anchor="middle">NEXA</text>'
        f'{text}</svg>'
    )
    return svg.encode("utf-8")


def srt_to_vtt(text: str) -> str:
    normalized = str(text or "").replace("\ufeff", "").replace("\r\n", "\n").replace("\r", "\n").strip()
    if not normalized:
        return ""
    if normalized.upper().startswith("WEBVTT"):
        return normalized + "\n"
    cue = re.sub(r"(\d{2}:\d{2}:\d{2}),(\d{1,3})", lambda m: f"{m.group(1)}.{m.group(2).ljust(3, '0')}", normalized)
    cue = re.sub(r"(\d{2}:\d{2}),(\d{1,3})", lambda m: f"00:{m.group(1)}.{m.group(2).ljust(3, '0')}", cue)
    return "WEBVTT\n\n" + cue + "\n"


def _media_type(path: str) -> str:
    ext = os.path.splitext(path)[1].lower()
    return {
        ".mp4": "video/mp4", ".m4v": "video/mp4", ".webm": "video/webm",
        ".ogv": "video/ogg", ".ogg": "video/ogg", ".mov": "video/quicktime",
        ".mkv": "video/x-matroska", ".avi": "video/x-msvideo", ".wmv": "video/x-ms-wmv",
        ".ts": "video/mp2t", ".m2ts": "video/mp2t", ".mpg": "video/mpeg", ".mpeg": "video/mpeg",
        ".mp3": "audio/mpeg", ".m4a": "audio/mp4", ".aac": "audio/aac", ".oga": "audio/ogg",
        ".opus": "audio/ogg", ".flac": "audio/flac", ".wav": "audio/wav", ".wma": "audio/x-ms-wma",
        ".srt": "text/plain; charset=utf-8", ".vtt": "text/vtt; charset=utf-8",
        ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png",
        ".webp": "image/webp", ".avif": "image/avif", ".gif": "image/gif",
    }.get(ext, "application/octet-stream")


def _episode_info(filename: str, series_title: str) -> tuple[int | None, int | None, str]:
    stem = os.path.splitext(os.path.basename(filename))[0]
    explicit = EXPLICIT_EPISODE_RE.search(stem) or CROSS_EPISODE_RE.search(stem)
    season = int(explicit.group(1)) if explicit else None
    episode = int(explicit.group(2)) if explicit else None
    text = stem
    text = re.sub(r"\b\d{3,4}p\b", " ", text, flags=re.IGNORECASE)
    text = re.sub(r"\b(?:mp4|avi|mkv|webm|mov|m4v|mpg|mpeg|ts)\b", " ", text, flags=re.IGNORECASE)
    text = YEAR_RE.sub(" ", text)
    if episode is None:
        numbers = [int(value) for value in re.findall(r"(?<!\d)(\d{1,3})(?!\d)", text) if value.isdigit()]
        numbers = [value for value in numbers if 0 < value < 1000]
        if numbers:
            episode = numbers[-1]
    title = stem
    title = re.sub(r"\b\d{3,4}p\b", " ", title, flags=re.IGNORECASE)
    title = re.sub(r"\b(?:mp4|avi|mkv|webm|mov|m4v|mpg|mpeg|ts)\b", " ", title, flags=re.IGNORECASE)
    title = re.sub(r"\b(?:dual[ .]?audio|dublado|legendado)\b", " ", title, flags=re.IGNORECASE)
    title = YEAR_RE.sub(" ", title)
    aliases = [series_title] if series_title else []
    aliases += [word for word in re.split(r"\W+", series_title or "") if len(word) >= 4 and word.lower() not in ("especial", "comando", "estelar")]
    for alias in sorted(set(aliases), key=len, reverse=True):
        if alias:
            title = re.sub(rf"\b{re.escape(alias)}\b", " ", title, flags=re.IGNORECASE)
    title = re.sub(r"#\d+", " ", title)
    title = re.sub(r"\bassistir\s+online.*$", " ", title, flags=re.IGNORECASE)
    if episode is not None:
        title = re.sub(rf"(?<!\d)0*{episode}(?!\d)", " ", title, count=1)
    title = re.sub(r"^[\s\-–—._#|)]+", "", title)
    title = re.sub(r"[\s\-–—._#|(]+$", "", title)
    title = re.sub(r"\s+", " ", title)
    title = _display(title)
    if not title or _norm(title) in ("episodio", "episodiofinal", "assistironlineemportugues"):
        title = f"Episódio {episode}" if episode is not None else "Episódio"
    return season, episode, title


def _movie_title(filename: str) -> tuple[str, int | None]:
    stem = os.path.splitext(os.path.basename(filename))[0]
    stem = re.sub(r"^\s*\d{1,3}\s*[-.)]\s*", "", stem)
    return _split_year(stem)


def _video_item(rel: str, root_key: str, title: str, year: int | None, movie: bool, poster_path: str, subtitles: list[dict]) -> dict:
    ext = os.path.splitext(rel)[1].lower()
    playable = ext in BROWSER_VIDEO_EXTS
    size = 0
    common = {
        "id": f"local-{'filme' if movie else 'serie'}-{_hash(root_key + ':' + rel)}",
        "local": True,
        "rootKey": root_key,
        "fileRel": rel.replace(os.sep, "/"),
        "video": _media_url(root_key, rel.replace(os.sep, "/")),
        "transcodeUrl": _media_url(root_key, rel.replace(os.sep, "/"), transcode=True),
        "playable": playable,
        "subtitles": subtitles,
    }
    return common


def _scan_movies(root_key: str, root: str) -> tuple[list[dict], dict]:
    items = []
    art = {}
    for current, files in _walk_files(root):
        file_set = {os.path.splitext(name)[0]: name for name in files}
        for name in files:
            ext = os.path.splitext(name)[1].lower()
            if ext not in VIDEO_EXTS:
                continue
            full = os.path.join(current, name)
            try:
                if os.path.getsize(full) < 200 * 1024:
                    continue
            except OSError:
                continue
            rel = os.path.relpath(full, root)
            title, year = _movie_title(name)
            poster_file = _pick_image(current, os.path.splitext(name)[0])
            poster = placeholder_url(title, "poster")
            backdrop = placeholder_url(title, "backdrop")
            if poster_file:
                rel_art = os.path.relpath(poster_file, root)
                poster = _art_url(root_key, rel_art.replace(os.sep, "/"))
                backdrop = poster
            subs = _find_subtitles(rel, root_key, {os.path.dirname(rel): [entry for entry in files if os.path.splitext(entry)[1].lower() in SUB_EXTS]})
            item = {
                "id": f"local-filme-{_hash(root_key + ':' + rel)}",
                "local": True,
                "rootKey": root_key,
                "fileRel": rel.replace(os.sep, "/"),
                "title": title or os.path.splitext(name)[0],
                "fileYear": year,
                "type": "filme",
                "year": year or time.localtime(os.path.getmtime(full)).tm_year,
                "duration": "Duração não informada",
                "maturity": "12+",
                "match": 96,
                "rating": "—",
                "genres": ["Biblioteca local"],
                "description": f"“{title or name}” está na sua biblioteca do HD local.",
                "cast": [],
                "director": "Biblioteca pessoal",
                "poster": poster,
                "backdrop": backdrop,
                "video": _media_url(root_key, rel.replace(os.sep, "/")),
                "transcodeUrl": _media_url(root_key, rel.replace(os.sep, "/"), transcode=True),
                "playable": ext in BROWSER_VIDEO_EXTS,
                "subtitles": subs,
                "new": False,
            }
            items.append(item)
    counts = {}
    for item in items:
        counts[item["title"]] = counts.get(item["title"], 0) + 1
    for item in items:
        if counts.get(item["title"], 0) > 1 and item.get("year"):
            item["title"] = f"{item['title']} ({item['year']})"
    return items, art


def _scan_series(root_key: str, root: str) -> tuple[list[dict], dict]:
    items = []
    try:
        top_entries = sorted((entry for entry in os.scandir(root) if entry.is_dir() and entry.name.lower() not in SKIP_DIRS), key=lambda entry: entry.name.lower())
    except OSError:
        top_entries = []
    groups = []
    loose_videos = [
        entry.path for entry in os.scandir(root)
        if entry.is_file() and os.path.splitext(entry.name)[1].lower() in VIDEO_EXTS
    ] if os.path.isdir(root) else []
    if loose_videos:
        groups.append((root, os.path.basename(root)))
    for entry in top_entries:
        groups.append((entry.path, entry.name))
    for series_dir, raw_title in groups:
        videos = []
        sub_files: list[str] = []
        images = []
        for current, files in _walk_files(series_dir):
            for name in files:
                ext = os.path.splitext(name)[1].lower()
                full = os.path.join(current, name)
                if ext in VIDEO_EXTS:
                    try:
                        if os.path.getsize(full) >= 200 * 1024:
                            videos.append(full)
                    except OSError:
                        pass
                elif ext in SUB_EXTS:
                    sub_files.append(full)
                elif ext in IMAGE_EXTS:
                    images.append(full)
        if not videos:
            continue
        title, year = _split_year(raw_title)
        title = title or _display(raw_title) or "Série local"
        poster = placeholder_url(title, "poster")
        backdrop = placeholder_url(title, "backdrop")
        if images:
            preferred = next((path for path in images if os.path.splitext(os.path.basename(path))[0].lower() in ("poster", "folder", "cover", "fanart", "backdrop")), images[0])
            rel_art = os.path.relpath(preferred, root)
            poster = _art_url(root_key, rel_art.replace(os.sep, "/"))
            backdrop = poster
        seasons: dict[int, list[dict]] = {}
        for full in videos:
            rel = os.path.relpath(full, root)
            rel_from_series = os.path.relpath(full, series_dir)
            parts = rel_from_series.split(os.sep)
            season = 1
            for part in parts[:-1]:
                parsed = _parse_season(part)
                if parsed is not None:
                    season = parsed
                    break
            explicit_season, episode, episode_title = _episode_info(full, title)
            if explicit_season is not None:
                season = explicit_season
            if episode is None:
                episode = len(seasons.get(season, [])) + 1
            dir_rel = os.path.dirname(rel)
            folder_subs = [os.path.basename(path) for path in sub_files if os.path.dirname(os.path.relpath(path, root)) == dir_rel]
            subs = _find_subtitles(rel, root_key, {dir_rel: folder_subs})
            ext = os.path.splitext(full)[1].lower()
            seasons.setdefault(season, []).append({
                "number": episode,
                "title": episode_title,
                "video": _media_url(root_key, rel.replace(os.sep, "/")),
                "transcodeUrl": _media_url(root_key, rel.replace(os.sep, "/"), transcode=True),
                "duration": "",
                "thumbnail": poster,
                "playable": ext in BROWSER_VIDEO_EXTS,
                "subtitles": subs,
                "fileRel": rel.replace(os.sep, "/"),
            })
        season_list = []
        for season_number in sorted(seasons):
            episode_files = sorted(seasons[season_number], key=lambda entry: (entry["number"], entry["title"]))
            season_list.append({
                "name": f"Temporada {season_number}",
                "episodes": [entry["title"] for entry in episode_files],
                "episodeFiles": episode_files,
            })
        all_episodes = [entry for season in season_list for entry in season["episodeFiles"]]
        first = all_episodes[0]
        if not year:
            try:
                year = time.localtime(os.path.getmtime(os.path.join(root, first["fileRel"]))).tm_year
            except OSError:
                year = time.localtime().tm_year
        item = {
            "id": f"local-serie-{_hash(root_key + ':' + os.path.relpath(series_dir, root))}",
            "local": True,
            "rootKey": root_key,
            "title": title,
            "type": "serie",
            "year": year or time.localtime().tm_year,
            "duration": f"{len(season_list)} temporada{'s' if len(season_list) != 1 else ''}",
            "maturity": "12+",
            "match": 96,
            "rating": "—",
            "genres": ["Biblioteca local"],
            "description": f"Série com {len(all_episodes)} episódio{'s' if len(all_episodes) != 1 else ''} na sua biblioteca do HD local.",
            "cast": [],
            "director": "Biblioteca pessoal",
            "poster": poster,
            "backdrop": backdrop,
            "video": first["video"],
            "transcodeUrl": first["transcodeUrl"],
            "seasons": season_list,
            "playable": any(entry["playable"] for entry in all_episodes),
            "new": False,
        }
        items.append(item)
    return items, {}


def detect_root(explicit: str | None = None) -> str:
    if explicit:
        return os.path.abspath(os.path.expanduser(explicit))
    env = os.environ.get("NEXA_MEDIA_ROOT") or os.environ.get("MC_MEDIA_ROOT")
    if env:
        return os.path.abspath(os.path.expanduser(env))
    candidates = []
    removable = "/mnt/chromeos/removable"
    try:
        for entry in os.scandir(removable):
            if entry.is_dir() and os.path.isdir(os.path.join(entry.path, "filmes")) or os.path.isdir(os.path.join(entry.path, "series")):
                candidates.append(entry.path)
    except OSError:
        pass
    for base in ("/media", "/mnt", "/run/media"):
        try:
            for entry in os.scandir(base):
                if entry.is_dir():
                    if os.path.isdir(os.path.join(entry.path, "filmes")) or os.path.isdir(os.path.join(entry.path, "series")):
                        candidates.append(entry.path)
                    try:
                        for child in os.scandir(entry.path):
                            if child.is_dir() and (os.path.isdir(os.path.join(child.path, "filmes")) or os.path.isdir(os.path.join(child.path, "series"))):
                                candidates.append(child.path)
                    except OSError:
                        pass
        except OSError:
            pass
    if candidates:
        return candidates[0]
    return os.path.abspath(os.path.expanduser("~/media"))


def _music_roots(root: str) -> list[tuple[str, str]]:
    roots = []
    base = os.path.basename(root).lower()
    if base in ("musicas", "músicas", "music", "musica", "música"):
        return [("u0", root)]
    try:
        entries = [entry for entry in os.scandir(root) if entry.is_dir() and entry.name.lower() not in SKIP_DIRS and not entry.name.startswith(".")]
    except OSError:
        return []
    for entry in sorted(entries, key=lambda item: item.name.lower()):
        if entry.name.lower() in ("filmes", "filme", "movies", "series", "séries"):
            continue
        has_audio = False
        try:
            for _current, files in _walk_files(entry.path):
                if any(os.path.splitext(name)[1].lower() in AUDIO_EXTS for name in files):
                    has_audio = True
                    break
        except OSError:
            pass
        if has_audio:
            roots.append((f"u{len(roots)}", entry.path))
    return roots


def _scan_music(root_key: str, root: str) -> list[dict]:
    albums = []
    for current, files in _walk_files(root):
        audio = [name for name in files if os.path.splitext(name)[1].lower() in AUDIO_EXTS]
        if not audio:
            continue
        tracks = []
        for name in audio:
            full = os.path.join(current, name)
            try:
                if os.path.getsize(full) < 20 * 1024:
                    continue
            except OSError:
                continue
            tags = _read_id3(full)
            title = tags.get("title") or _display(os.path.splitext(name)[0])
            title = re.sub(r"^\s*0*\d{1,3}\s*[-._)]\s*", "", title) or title
            rel = os.path.relpath(full, root)
            number = _track_number(name)
            if number is None and tags.get("track"):
                match = re.match(r"0*(\d{1,3})", tags["track"])
                number = int(match.group(1)) if match else None
            tracks.append({
                "id": f"local-track-{_hash(root_key + ':' + rel)}",
                "title": _clean_text(title) or os.path.splitext(name)[0],
                "artist": tags.get("artist", ""),
                "number": number or 0,
                "url": _media_url(root_key, rel.replace(os.sep, "/")),
                "fileRel": rel.replace(os.sep, "/"),
                "playable": os.path.splitext(name)[1].lower() in BROWSER_AUDIO_EXTS,
            })
        if not tracks:
            continue
        album_title, artist, year = _album_meta(current)
        first_artist = next((track["artist"] for track in tracks if track.get("artist")), "")
        for track in tracks:
            if not track["artist"]:
                track["artist"] = first_artist or artist or "Vários artistas"
            track["album"] = album_title
        tracks.sort(key=lambda entry: (entry["number"] or 9999, entry["title"].lower()))
        cover_file = _pick_image(current)
        cover = placeholder_url(album_title, "cover")
        if cover_file:
            rel_cover = os.path.relpath(cover_file, root)
            cover = _art_url(root_key, rel_cover.replace(os.sep, "/"))
        albums.append({
            "id": f"local-album-{_hash(root_key + ':' + os.path.relpath(current, root))}",
            "title": album_title,
            "artist": artist or first_artist or "Vários artistas",
            "year": year,
            "cover": cover,
            "tracks": tracks,
            "rootKey": root_key,
        })
    return albums


def scan(root: str | None = None) -> dict:
    with _scan_lock:
        _scan_state["scanning"] = True
        _scan_state["startedAt"] = time.time()
        _scan_state["error"] = None
        try:
            root = detect_root(root)
            result = _scan(root)
            result["scanning"] = False
            return result
        except Exception as error:  # noqa: BLE001 - reportar ao cliente
            _scan_state["error"] = str(error)
            raise
        finally:
            _scan_state["scanning"] = False


def _scan(root: str) -> dict:
    roots = {"movies": {}, "series": {}, "music": {}}
    items = []
    errors = []
    movie_dir = os.path.join(root, "filmes")
    series_dir = os.path.join(root, "series")
    base = os.path.basename(root).lower()
    if os.path.isdir(movie_dir):
        roots["movies"]["m0"] = movie_dir
    elif base in ("filmes", "filme", "movies"):
        roots["movies"]["m0"] = root
    if os.path.isdir(series_dir):
        roots["series"]["s0"] = series_dir
    elif base in ("series", "séries", "serie", "série", "shows"):
        roots["series"]["s0"] = root
    if not roots["movies"] and not roots["series"]:
        has_video = False
        try:
            for _current, files in _walk_files(root):
                if any(os.path.splitext(name)[1].lower() in VIDEO_EXTS for name in files):
                    has_video = True
                    break
        except OSError:
            pass
        if has_video:
            roots["movies"]["m0"] = root
    for root_key, path in roots["movies"].items():
        try:
            found, _art = _scan_movies(root_key, path)
            items.extend(found)
        except Exception as error:  # noqa: BLE001
            errors.append(f"filmes: {error}")
    for root_key, path in roots["series"].items():
        try:
            found, _art = _scan_series(root_key, path)
            items.extend(found)
        except Exception as error:  # noqa: BLE001
            errors.append(f"séries: {error}")
    albums = []
    for index, (_key, path) in enumerate(_music_roots(root)):
        root_key = f"u{index}"
        roots["music"][root_key] = path
        try:
            albums.extend(_scan_music(root_key, path))
        except Exception as error:  # noqa: BLE001
            errors.append(f"música ({os.path.basename(path)}): {error}")
    movies = sum(1 for item in items if item.get("type") == "filme")
    series = sum(1 for item in items if item.get("type") == "serie")
    episodes = sum(len(season.get("episodeFiles", [])) for item in items for season in item.get("seasons", []))
    tracks = sum(len(album.get("tracks", [])) for album in albums)
    return {
        "version": 2,
        "at": int(time.time() * 1000),
        "root": root,
        "roots": roots,
        "items": items,
        "music": {"albums": albums},
        "stats": {
            "movies": movies,
            "series": series,
            "episodes": episodes,
            "albums": len(albums),
            "tracks": tracks,
        },
        "errors": errors,
    }


def read_cached(path: str) -> dict | None:
    try:
        with open(path, "r", encoding="utf-8") as handle:
            return json.load(handle)
    except (OSError, ValueError):
        return None


def write_cached(path: str, library: dict) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    tmp = f"{path}.tmp"
    with open(tmp, "w", encoding="utf-8") as handle:
        json.dump(library, handle, ensure_ascii=False, separators=(",", ":"))
    os.replace(tmp, path)


def resolve_media(library: dict, root_key: str, rel_b64: str) -> str | None:
    try:
        rel = base64.urlsafe_b64decode((rel_b64 + "=" * (-len(rel_b64) % 4)).encode("ascii")).decode("utf-8", "surrogateescape")
    except (ValueError, TypeError):
        return None
    for group in ("movies", "series", "music"):
        base = (library.get("roots") or {}).get(group, {}).get(root_key)
        if base:
            return _safe_inside(base, rel)
    return None
