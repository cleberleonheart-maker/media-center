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
SUB_EXTS = {".srt", ".vtt", ".ass", ".ssa"}
MP4_EXTS = {".mp4", ".m4v", ".m4a", ".m4b", ".aac", ".alac"}
MIME_EXT = {"image/jpeg": ".jpg", "image/jpg": ".jpg", "image/png": ".png", "image/webp": ".webp"}
ART_CACHE_DIR = Path(__file__).resolve().parent / ".data" / "art-cache"
POSTER_NAMES = (
    "poster", "folder", "cover", "front", "album", "albumart",
    "artwork", "thumb", "movie", "show",
)
BACKDROP_NAMES = ("fanart", "backdrop", "background", "banner", "landscape")
ART_DIRS = ("art", "Art", "posters", "Posters", "covers", "Covers")
SUB_DIRS = {"subs", "sub", "subtitles", "subtitle", "legendas", "legenda"}

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
    text = re.sub(r"\[[^\]]*\]", " ", text)
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
    raw = str(text or "")
    limit = time.localtime().tm_year + 1
    matches = [match for match in YEAR_RE.finditer(raw) if 1900 <= int(match.group(1)) <= limit]
    year = None
    title_part = raw
    if matches:
        chosen = matches[-1]
        year = int(chosen.group(1))
        title_part = raw[:chosen.start()]
        tail = raw[chosen.end():]
        if not title_part.strip() and tail.strip():
            title_part = tail
    title = _display(title_part) or _display(raw)
    title = re.sub(r"[\(\[\{]\s*$", "", title).strip()
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


def _find_subtitles(video_rel: str, root_key: str, subtitle_rels: list[str]) -> list[dict]:
    rel_dir = os.path.dirname(video_rel)
    stem = os.path.splitext(os.path.basename(video_rel))[0]
    core = _norm(_clean_text(stem))
    year_match = YEAR_RE.search(stem)
    year = year_match.group(1) if year_match else ""
    found = []
    for sub_rel in subtitle_rels:
        name = os.path.basename(sub_rel)
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
        rel = os.path.join(rel_dir, sub_rel) if rel_dir else sub_rel
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


def _collect_subtitles(current: str, files: list[str], rel_dir: str) -> tuple[str, list[str]]:
    owner = rel_dir
    if os.path.basename(current).lower() in SUB_DIRS:
        owner = os.path.dirname(rel_dir)
        owner = "" if owner == "." else owner
    entries = []
    for name in files:
        if os.path.splitext(name)[1].lower() not in SUB_EXTS:
            continue
        entries.append(os.path.join(rel_dir, name) if rel_dir else name)
    return owner, entries


def _list_images(directory: str) -> list[str]:
    try:
        with os.scandir(directory) as entries:
            names = [
                entry.name for entry in entries
                if entry.is_file() and os.path.splitext(entry.name)[1].lower() in IMAGE_EXTS
            ]
    except OSError:
        return []
    return sorted(names)


def _pick_artwork(directory: str, stem: str = "") -> tuple[str | None, str | None]:
    poster = None
    backdrop = None
    normalized_stem = _norm(_clean_text(stem)) if stem else ""
    try:
        with os.scandir(directory) as entries:
            listing = [(entry.name, entry.is_file(), entry.is_dir()) for entry in entries]
    except OSError:
        listing = []
    folders = [(directory, sorted(name for name, is_file, _is_dir in listing
                                 if is_file and os.path.splitext(name)[1].lower() in IMAGE_EXTS))]
    for wanted in ART_DIRS:
        for name, _is_file, is_dir in listing:
            if name == wanted and is_dir:
                folders.append((os.path.join(directory, name), _list_images(os.path.join(directory, name))))
                break
    for current, images in folders:
        if not images:
            continue
        if not poster:
            for wanted in POSTER_NAMES:
                for name in images:
                    if os.path.splitext(name)[0].lower() == wanted:
                        poster = os.path.join(current, name)
                        break
                if poster:
                    break
            if not poster and normalized_stem:
                for name in images:
                    if _norm(os.path.splitext(name)[0]) == normalized_stem:
                        poster = os.path.join(current, name)
                        break
        if not backdrop:
            for wanted in BACKDROP_NAMES:
                for name in images:
                    if os.path.splitext(name)[0].lower() == wanted:
                        backdrop = os.path.join(current, name)
                        break
                if backdrop:
                    break
        if poster and backdrop:
            break
    if not poster and not backdrop:
        images = _list_images(directory)
        if images:
            poster = os.path.join(directory, images[0])
    if not poster:
        poster = backdrop
    return poster, backdrop


def _pick_image(directory: str, stem: str = "") -> str | None:
    poster, _backdrop = _pick_artwork(directory, stem)
    return poster


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


_TAG_CACHE: dict[str, dict] = {}
_TAG_CACHE_FILE = Path(__file__).resolve().parent / ".data" / "tag-cache.json"
_DIR_SIG_CACHE: dict[str, dict] = {}
_DIR_SIG_FILE = Path(__file__).resolve().parent / ".data" / "dir-signatures.json"


def _file_signature(path: str) -> str:
    try:
        stat = os.stat(path)
        return f"{stat.st_size}:{int(stat.st_mtime)}"
    except OSError:
        return ""


def load_dir_signatures() -> None:
    try:
        with open(_DIR_SIG_FILE, "r", encoding="utf-8") as handle:
            data = json.load(handle)
    except (OSError, ValueError):
        return
    if isinstance(data, dict):
        _DIR_SIG_CACHE.update({key: value for key, value in data.items() if isinstance(value, dict)})


def save_dir_signatures() -> None:
    try:
        _DIR_SIG_FILE.parent.mkdir(parents=True, exist_ok=True)
        tmp = _DIR_SIG_FILE.with_suffix(".tmp")
        with open(tmp, "w", encoding="utf-8") as handle:
            json.dump(_DIR_SIG_CACHE, handle, ensure_ascii=False)
        os.replace(tmp, _DIR_SIG_FILE)
    except OSError:
        pass


def _directory_signatures(directory: str, names: list[str], full: bool = False) -> dict[str, str]:
    """Assinaturas (tamanho:mtime) dos arquivos de uma pasta.

    O HD externo via 9p custa ~150 ms por stat; quando a pasta não mudou
    (mesmo mtime e mesmos nomes) reaproveitamos as assinaturas salvas.
    """
    try:
        dir_stat = os.stat(directory)
    except OSError:
        return {}
    key = str(directory)
    ordered = sorted(names)
    cached = _DIR_SIG_CACHE.get(key) or {}
    if not full and cached.get("mtime") == int(dir_stat.st_mtime) and cached.get("names") == ordered:
        return cached.get("sigs") or {}
    signatures = {}
    for name in names:
        signature = _file_signature(os.path.join(directory, name))
        if signature:
            signatures[name] = signature
    _DIR_SIG_CACHE[key] = {
        "mtime": int(dir_stat.st_mtime),
        "names": ordered,
        "sigs": signatures,
    }
    return signatures


def load_tag_cache() -> None:
    try:
        with open(_TAG_CACHE_FILE, "r", encoding="utf-8") as handle:
            data = json.load(handle)
    except (OSError, ValueError):
        return
    if isinstance(data, dict):
        _TAG_CACHE.update({key: value for key, value in data.items() if isinstance(value, dict)})


def save_tag_cache() -> None:
    try:
        _TAG_CACHE_FILE.parent.mkdir(parents=True, exist_ok=True)
        tmp = _TAG_CACHE_FILE.with_suffix(".tmp")
        with open(tmp, "w", encoding="utf-8") as handle:
            json.dump(_TAG_CACHE, handle, ensure_ascii=False)
        os.replace(tmp, _TAG_CACHE_FILE)
    except OSError:
        pass


def _read_tags_cached(path: str, signature: str = "") -> dict:
    signature = signature or _file_signature(path)
    if not signature:
        return {}
    cached = _TAG_CACHE.get(path)
    if cached and cached.get("sig") == signature:
        return cached.get("tags") or {}
    tags = _read_audio_tags(path)
    entry = _TAG_CACHE.get(path) or {}
    entry["sig"] = signature
    entry["tags"] = tags
    _TAG_CACHE[path] = entry
    return tags


def _decode_id3_text(raw: bytes, encoding: int) -> str:
    if encoding == 1:
        text = raw.decode("utf-16", "ignore")
    elif encoding == 2:
        text = raw.decode("utf-16-be", "ignore")
    elif encoding == 3:
        text = raw.decode("utf-8", "ignore")
    else:
        text = raw.decode("latin-1", "ignore")
    return text.replace("\x00", " ").strip()


def _id3_frames(body: bytes, version: int) -> list[tuple[str, bytes, bool]]:
    frames = []
    offset = 0
    header_size = 6 if version == 2 else 10
    while offset + header_size <= len(body):
        if version == 2:
            frame_id = body[offset:offset + 3].decode("ascii", "ignore")
            if not re.fullmatch(r"[A-Z0-9]{3}", frame_id):
                break
            size = int.from_bytes(body[offset + 3:offset + 6], "big")
        else:
            frame_id = body[offset:offset + 4].decode("ascii", "ignore")
            if not re.fullmatch(r"[A-Z0-9]{4}", frame_id):
                break
            if version == 4:
                size = (((body[offset + 4] & 0x7F) << 21) | ((body[offset + 5] & 0x7F) << 14)
                        | ((body[offset + 6] & 0x7F) << 7) | (body[offset + 7] & 0x7F))
            else:
                size = int.from_bytes(body[offset + 4:offset + 8], "big")
        data_start = offset + header_size
        if size <= 0:
            break
        if data_start + size > len(body):
            frames.append((frame_id, body[data_start:], False))
            break
        frames.append((frame_id, body[data_start:data_start + size], True))
        offset = data_start + size
    return frames


def _id3_picture(frame_id: str, payload: bytes) -> tuple[bytes, str, int] | None:
    if not payload:
        return None
    encoding = payload[0]
    pos = 1
    if frame_id == "APIC":
        end = payload.find(b"\x00", pos)
        if end < 0:
            return None
        mime = payload[pos:end].decode("latin-1", "ignore").strip() or "image/jpeg"
        pos = end + 1
    else:
        mime = "image/png" if payload[pos:pos + 3].upper() == b"PNG" else "image/jpeg"
        pos += 3
    if pos >= len(payload):
        return None
    picture_type = payload[pos]
    pos += 1
    if encoding in (1, 2):
        while pos + 1 < len(payload) and not (payload[pos] == 0 and payload[pos + 1] == 0):
            pos += 2
        pos += 2
    else:
        end = payload.find(b"\x00", pos)
        pos = len(payload) if end < 0 else end + 1
    image = payload[pos:]
    if not image:
        return None
    return image, mime, picture_type


def _parse_id3(data: bytes) -> tuple[dict, tuple[bytes, str] | None, bool]:
    tags = {}
    art = None
    fallback = None
    truncated = False
    if len(data) < 10 or data[:3] != b"ID3":
        return tags, art, truncated
    version = data[3]
    flags = data[5]
    size = (((data[6] & 0x7F) << 21) | ((data[7] & 0x7F) << 14)
            | ((data[8] & 0x7F) << 7) | (data[9] & 0x7F))
    body = data[10:10 + size]
    if flags & 0x80:
        body = re.sub(b"\xff\x00", b"\xff", body)
    wanted = {
        "TIT2": "title", "TT2": "title",
        "TPE1": "artist", "TP1": "artist",
        "TPE2": "albumArtist", "TP2": "albumArtist",
        "TALB": "album", "TAL": "album",
        "TRCK": "track", "TRK": "track",
        "TDRC": "year", "TYER": "year", "TYE": "year",
        "TCON": "genre", "TCO": "genre",
    }
    for frame_id, payload, complete in _id3_frames(body, version):
        key = wanted.get(frame_id)
        if key and payload and complete:
            tags[key] = _decode_id3_text(payload[1:], payload[0])
        elif frame_id in ("APIC", "PIC") and art is None:
            if not complete:
                truncated = True
                continue
            picture = _id3_picture(frame_id, payload)
            if not picture:
                continue
            image, mime, picture_type = picture
            if picture_type == 3:
                art = (image, mime)
            elif fallback is None:
                fallback = (image, mime)
    return tags, art or fallback, truncated


def _parse_vorbis_comment(payload: bytes) -> dict:
    tags = {}
    if len(payload) < 8:
        return tags
    vendor_len = int.from_bytes(payload[:4], "little")
    pos = 4 + vendor_len
    if pos + 4 > len(payload):
        return tags
    count = int.from_bytes(payload[pos:pos + 4], "little")
    pos += 4
    wanted = {
        "TITLE": "title", "ARTIST": "artist", "ALBUM": "album",
        "ALBUMARTIST": "albumArtist", "TRACKNUMBER": "track",
        "DISCNUMBER": "disk", "DATE": "year", "YEAR": "year", "GENRE": "genre",
    }
    for _ in range(count):
        if pos + 4 > len(payload):
            break
        length = int.from_bytes(payload[pos:pos + 4], "little")
        pos += 4
        comment = payload[pos:pos + length].decode("utf-8", "ignore")
        pos += length
        if "=" not in comment:
            continue
        key, value = comment.split("=", 1)
        target = wanted.get(key.strip().upper())
        if target:
            tags[target] = value.strip()
    return tags


def _parse_flac_picture(payload: bytes) -> tuple[bytes, str] | None:
    if len(payload) < 32:
        return None
    pos = 0
    pos += 4
    mime_len = int.from_bytes(payload[pos:pos + 4], "big")
    pos += 4
    mime = payload[pos:pos + mime_len].decode("latin-1", "ignore") or "image/jpeg"
    pos += mime_len
    desc_len = int.from_bytes(payload[pos:pos + 4], "big")
    pos += 4 + desc_len + 16
    data_len = int.from_bytes(payload[pos:pos + 4], "big")
    pos += 4
    image = payload[pos:pos + data_len]
    if not image:
        return None
    return image, mime


def _parse_flac(data: bytes) -> tuple[dict, tuple[bytes, str] | None, bool]:
    tags = {}
    art = None
    truncated = False
    if data[:4] != b"fLaC":
        return tags, art, truncated
    offset = 4
    while offset + 4 <= len(data):
        header = data[offset]
        block_type = header & 0x7F
        length = int.from_bytes(data[offset + 1:offset + 4], "big")
        payload = data[offset + 4:offset + 4 + length]
        offset += 4 + length
        if block_type == 4:
            tags.update(_parse_vorbis_comment(payload))
        elif block_type == 6 and art is None:
            if offset > len(data):
                truncated = True
                break
            art = _parse_flac_picture(payload)
        if header & 0x80:
            break
    return tags, art, truncated


def _mp4_atoms(buf: bytes, start: int, end: int):
    offset = start
    while offset + 8 <= end:
        size = int.from_bytes(buf[offset:offset + 4], "big")
        atom_type = buf[offset + 4:offset + 8].decode("latin-1", "ignore")
        header = 8
        if size == 1:
            if offset + 16 > end:
                break
            size = int.from_bytes(buf[offset + 8:offset + 16], "big")
            header = 16
        elif size == 0:
            size = end - offset
        if size < header or offset + size > end:
            break
        yield atom_type, offset + header, offset + size
        offset += size


def _mp4_moov(path: str) -> bytes | None:
    try:
        total = os.path.getsize(path)
    except OSError:
        return None
    try:
        with open(path, "rb") as handle:
            offset = 0
            while offset + 8 <= total:
                handle.seek(offset)
                header = handle.read(16)
                if len(header) < 8:
                    break
                size = int.from_bytes(header[0:4], "big")
                atom_type = header[4:8].decode("latin-1", "ignore")
                header_len = 8
                if size == 1:
                    if len(header) < 16:
                        break
                    size = int.from_bytes(header[8:16], "big")
                    header_len = 16
                elif size == 0:
                    size = total - offset
                if size < header_len:
                    break
                if atom_type == "moov":
                    handle.seek(offset + header_len)
                    return handle.read(size - header_len)
                offset += size
    except OSError:
        return None
    return None


def _parse_mp4(moov: bytes) -> tuple[dict, tuple[bytes, str] | None]:
    tags = {}
    art = None
    ilst = None
    for atom_type, start, end in _mp4_atoms(moov, 0, len(moov)):
        if atom_type != "udta":
            continue
        for meta_type, meta_start, meta_end in _mp4_atoms(moov, start, end):
            if meta_type != "meta":
                continue
            for ilst_type, ilst_start, ilst_end in _mp4_atoms(moov, meta_start + 4, meta_end):
                if ilst_type == "ilst":
                    ilst = moov[ilst_start:ilst_end]
                    break
    if ilst is None:
        return tags, art
    wanted = {
        "\u00a9nam": "title", "\u00a9ART": "artist", "\u00a9alb": "album",
        "aART": "albumArtist", "\u00a9gen": "genre", "\u00a9day": "year",
        "trkn": "track", "disk": "disk",
    }
    for atom_type, start, end in _mp4_atoms(ilst, 0, len(ilst)):
        payload = None
        kind = 0
        for data_type, data_start, data_end in _mp4_atoms(ilst, start, end):
            if data_type == "data":
                kind = int.from_bytes(ilst[data_start:data_start + 4], "big") & 0xFFFFFF
                payload = ilst[data_start + 8:data_end]
                break
        if payload is None:
            continue
        if atom_type == "covr":
            if art is None:
                art = (payload, "image/png" if kind == 14 else "image/jpeg")
            continue
        key = wanted.get(atom_type)
        if not key:
            continue
        if key in ("track", "disk"):
            if len(payload) >= 4:
                tags[key] = str(int.from_bytes(payload[2:4], "big"))
            continue
        text = payload.decode("utf-16-le", "ignore") if kind == 2 else payload.decode("utf-8", "ignore")
        text = text.replace("\x00", " ").strip()
        if key == "year":
            text = text[:4]
        if text:
            tags[key] = text
    return tags, art


def _read_id3_file(path: str, want_art: bool = False) -> tuple[dict, tuple[bytes, str] | None]:
    try:
        with open(path, "rb") as handle:
            header = handle.read(10)
            if len(header) < 10 or header[:3] != b"ID3":
                return {}, None
            size = (((header[6] & 0x7F) << 21) | ((header[7] & 0x7F) << 14)
                    | ((header[8] & 0x7F) << 7) | (header[9] & 0x7F))
            total = min(size + 10, 8 * 1024 * 1024)
            handle.seek(0)
            data = handle.read(min(total, 64 * 1024))
            tags, art, truncated = _parse_id3(data)
            if want_art and truncated:
                handle.seek(0)
                data = handle.read(total)
                tags, art, _truncated = _parse_id3(data)
            return tags, art
    except OSError:
        return {}, None


def _read_flac_file(path: str, want_art: bool = False) -> tuple[dict, tuple[bytes, str] | None]:
    try:
        with open(path, "rb") as handle:
            data = handle.read(64 * 1024)
            tags, art, truncated = _parse_flac(data)
            if want_art and truncated:
                handle.seek(0)
                data = handle.read(8 * 1024 * 1024)
                tags, art, _truncated = _parse_flac(data)
            return tags, art
    except OSError:
        return {}, None


def _read_id3v1(path: str) -> dict:
    try:
        size = os.path.getsize(path)
        if size < 128:
            return {}
        with open(path, "rb") as handle:
            handle.seek(size - 128)
            tail = handle.read(128)
    except OSError:
        return {}
    if tail[:3] != b"TAG":
        return {}
    return {
        "title": tail[3:33].decode("latin-1", "ignore").strip("\x00 "),
        "artist": tail[33:63].decode("latin-1", "ignore").strip("\x00 "),
        "album": tail[63:93].decode("latin-1", "ignore").strip("\x00 "),
        "year": tail[93:97].decode("latin-1", "ignore").strip("\x00 "),
    }


def _read_audio_tags(path: str) -> dict:
    ext = os.path.splitext(path)[1].lower()
    try:
        if ext == ".flac":
            tags, _art = _read_flac_file(path)
            return tags
        if ext in MP4_EXTS:
            moov = _mp4_moov(path)
            if moov is None:
                return {}
            tags, _art = _parse_mp4(moov)
            return tags
        tags, _art = _read_id3_file(path)
        if not tags.get("title") and not tags.get("artist"):
            tags.update(_read_id3v1(path))
        return tags
    except OSError:
        return {}


def _extract_embedded_art(path: str) -> tuple[bytes, str] | None:
    ext = os.path.splitext(path)[1].lower()
    try:
        if ext == ".flac":
            _tags, art = _read_flac_file(path, want_art=True)
            return art
        if ext in MP4_EXTS:
            moov = _mp4_moov(path)
            if moov is None:
                return None
            _tags, art = _parse_mp4(moov)
            return art
        _tags, art = _read_id3_file(path, want_art=True)
        return art
    except OSError:
        return None


def _art_cache_file(path: str, signature: str) -> str | None:
    entry = _TAG_CACHE.get(path) or {}
    if entry.get("sig") == signature:
        if entry.get("art"):
            name = entry["art"]
            if (ART_CACHE_DIR / name).is_file():
                return name
        elif entry.get("noArt"):
            return None
    art = _extract_embedded_art(path)
    entry = _TAG_CACHE.get(path) or {}
    entry["sig"] = signature
    if not art:
        entry.pop("art", None)
        entry["noArt"] = True
        _TAG_CACHE[path] = entry
        return None
    data, mime = art
    ext = MIME_EXT.get(str(mime).lower().strip(), ".jpg")
    name = _hash(path + ":" + signature, 20) + ext
    try:
        ART_CACHE_DIR.mkdir(parents=True, exist_ok=True)
        tmp = ART_CACHE_DIR / (name + ".tmp")
        tmp.write_bytes(data)
        os.replace(tmp, ART_CACHE_DIR / name)
    except OSError:
        return None
    entry.pop("noArt", None)
    entry["art"] = name
    _TAG_CACHE[path] = entry
    return name


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


def _ass_timestamp(value: str) -> str:
    match = re.fullmatch(r"(\d+):(\d{2}):(\d{2})[.:](\d{1,2})", str(value or "").strip())
    if not match:
        return ""
    return f"{int(match.group(1)):02d}:{match.group(2)}:{match.group(3)}.{match.group(4).ljust(3, '0')[:3]}"


def ass_to_vtt(text: str) -> str:
    lines = str(text or "").replace("\ufeff", "").replace("\r\n", "\n").replace("\r", "\n").split("\n")
    in_events = False
    columns = None
    cues = []
    for raw in lines:
        line = raw.strip()
        if re.fullmatch(r"\[events\]", line, re.IGNORECASE):
            in_events = True
            continue
        if line.startswith("["):
            in_events = False
            continue
        if not in_events:
            continue
        if re.match(r"^format\s*:", line, re.IGNORECASE):
            columns = [part.strip().lower() for part in line[line.index(":") + 1:].split(",")]
            continue
        if not re.match(r"^dialogue\s*:", line, re.IGNORECASE):
            continue
        payload = line[line.index(":") + 1:]
        fields = columns or ["layer", "start", "end", "style", "name", "marginl", "marginr", "marginv", "effect", "text"]
        start_index = max(0, fields.index("start")) if "start" in fields else 1
        end_index = max(1, fields.index("end")) if "end" in fields else 2
        text_index = fields.index("text") if "text" in fields else 9
        parts = []
        rest = payload
        for _ in range(max(0, len(fields) - 1)):
            comma = rest.find(",")
            if comma < 0:
                break
            parts.append(rest[:comma])
            rest = rest[comma + 1:]
        parts.append(rest)
        if len(parts) <= max(start_index, end_index):
            continue
        start = _ass_timestamp(parts[start_index])
        end = _ass_timestamp(parts[end_index])
        body = ",".join(parts[text_index:])
        body = re.sub(r"\{[^}]*\}", "", body)
        body = body.replace("\\N", "\n").replace("\\n", "\n").replace("\\h", " ")
        body = re.sub(r"<[^>]+>", "", body).strip()
        if not start or not end or not body:
            continue
        cues.append(f"{start} --> {end}\n{body}")
    return "WEBVTT\n\n" + "\n\n".join(cues) + "\n"


def subtitle_to_vtt(text: str, extension: str) -> str:
    ext = str(extension or "").lower().lstrip(".")
    if ext in ("ass", "ssa"):
        return ass_to_vtt(text)
    if ext == "vtt":
        return str(text or "")
    return srt_to_vtt(text)


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


def _scan_movies(root_key: str, root: str, full: bool = False) -> tuple[list[dict], dict]:
    items = []
    art = {}
    videos = []
    subtitles: dict[str, list[str]] = {}
    for current, files in _walk_files(root):
        rel_dir = os.path.relpath(current, root)
        rel_dir = "" if rel_dir == "." else rel_dir
        owner, entries = _collect_subtitles(current, files, rel_dir)
        if entries:
            subtitles.setdefault(owner, []).extend(entries)
        video_names = [name for name in files if os.path.splitext(name)[1].lower() in VIDEO_EXTS]
        if not video_names:
            continue
        signatures = _directory_signatures(current, video_names, full=full)
        for name in video_names:
            signature = signatures.get(name) or ""
            size = int(signature.split(":")[0]) if signature else 0
            if size < 200 * 1024:
                continue
            videos.append(os.path.join(current, name))
    for full in videos:
        name = os.path.basename(full)
        ext = os.path.splitext(name)[1].lower()
        rel = os.path.relpath(full, root)
        current = os.path.dirname(full)
        title, year = _movie_title(name)
        poster_file, backdrop_file = _pick_artwork(current, os.path.splitext(name)[0])
        poster = placeholder_url(title, "poster")
        backdrop = placeholder_url(title, "backdrop")
        if poster_file:
            rel_art = os.path.relpath(poster_file, root)
            poster = _art_url(root_key, rel_art.replace(os.sep, "/"))
            backdrop = poster
        if backdrop_file:
            rel_backdrop = os.path.relpath(backdrop_file, root)
            backdrop = _art_url(root_key, rel_backdrop.replace(os.sep, "/"))
        rel_dir = os.path.dirname(rel)
        subs = _find_subtitles(rel, root_key, subtitles.get(rel_dir, []))
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


def _scan_series(root_key: str, root: str, full: bool = False) -> tuple[list[dict], dict]:
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
        images = []
        subtitles: dict[str, list[str]] = {}
        for current, files in _walk_files(series_dir):
            rel_dir = os.path.relpath(current, root)
            rel_dir = "" if rel_dir == "." else rel_dir
            owner, entries = _collect_subtitles(current, files, rel_dir)
            if entries:
                subtitles.setdefault(owner, []).extend(entries)
            video_names = [name for name in files if os.path.splitext(name)[1].lower() in VIDEO_EXTS]
            if video_names:
                signatures = _directory_signatures(current, video_names, full=full)
                for name in video_names:
                    signature = signatures.get(name) or ""
                    size = int(signature.split(":")[0]) if signature else 0
                    if size >= 200 * 1024:
                        videos.append(os.path.join(current, name))
            for name in files:
                if os.path.splitext(name)[1].lower() in IMAGE_EXTS:
                    images.append(os.path.join(current, name))
        if not videos:
            continue
        title, year = _split_year(raw_title)
        title = title or _display(raw_title) or "Série local"
        poster = placeholder_url(title, "poster")
        backdrop = placeholder_url(title, "backdrop")

        def _named(names: tuple[str, ...]) -> str | None:
            for path in images:
                if os.path.splitext(os.path.basename(path))[0].lower() in names:
                    return path
            return None

        poster_file = _named(POSTER_NAMES)
        backdrop_file = _named(BACKDROP_NAMES)
        if not poster_file and images:
            poster_file = images[0]
        if poster_file:
            rel_art = os.path.relpath(poster_file, root)
            poster = _art_url(root_key, rel_art.replace(os.sep, "/"))
            backdrop = poster
        if backdrop_file:
            rel_backdrop = os.path.relpath(backdrop_file, root)
            backdrop = _art_url(root_key, rel_backdrop.replace(os.sep, "/"))
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
            subs = _find_subtitles(rel, root_key, subtitles.get(dir_rel, []))
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


def _scan_music(root_key: str, root: str, full: bool = False) -> list[dict]:
    albums = []
    for current, files in _walk_files(root):
        audio = [name for name in files if os.path.splitext(name)[1].lower() in AUDIO_EXTS]
        if not audio:
            continue
        signatures = _directory_signatures(current, audio, full=full)
        tracks = []
        sources = []
        for name in audio:
            full_path = os.path.join(current, name)
            signature = signatures.get(name) or ""
            size = int(signature.split(":")[0]) if signature else 0
            if not signature or size < 20 * 1024:
                continue
            tags = _read_tags_cached(full_path, signature)
            title = tags.get("title") or _display(os.path.splitext(name)[0])
            title = re.sub(r"^\s*0*\d{1,3}\s*[-._)]\s*", "", title) or title
            rel = os.path.relpath(full_path, root)
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
            sources.append((full_path, signature))
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
        else:
            for full, signature in sources[:3]:
                cached = _art_cache_file(full, signature)
                if cached:
                    cover = f"/api/local/art-cache?name={cached}"
                    break
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


def scan(root: str | None = None, full: bool = False) -> dict:
    with _scan_lock:
        _scan_state["scanning"] = True
        _scan_state["startedAt"] = time.time()
        _scan_state["error"] = None
        try:
            root = detect_root(root)
            load_tag_cache()
            load_dir_signatures()
            result = _scan(root, full=full)
            save_tag_cache()
            save_dir_signatures()
            result["scanning"] = False
            return result
        except Exception as error:  # noqa: BLE001 - reportar ao cliente
            _scan_state["error"] = str(error)
            raise
        finally:
            _scan_state["scanning"] = False


def _scan(root: str, full: bool = False) -> dict:
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
            found, _art = _scan_movies(root_key, path, full=full)
            items.extend(found)
        except Exception as error:  # noqa: BLE001
            errors.append(f"filmes: {error}")
    for root_key, path in roots["series"].items():
        try:
            found, _art = _scan_series(root_key, path, full=full)
            items.extend(found)
        except Exception as error:  # noqa: BLE001
            errors.append(f"séries: {error}")
    albums = []
    for index, (_key, path) in enumerate(_music_roots(root)):
        root_key = f"u{index}"
        roots["music"][root_key] = path
        try:
            albums.extend(_scan_music(root_key, path, full=full))
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
