#!/usr/bin/env python3
"""Servidor local do NEXA para o HD externo.

Uso:
    python3 local_server.py
    python3 local_server.py --root "/mnt/chromeos/removable/UNTITLED" --port 8090
    python3 local_server.py --scan

Serve o PWA em http://localhost:8090 e expõe a biblioteca do HD em /api/local.
"""

from __future__ import annotations

import argparse
import base64
import gzip
import json
import mimetypes
import os
import re
import shutil
import subprocess
import threading
import time
import html
import urllib.error
import urllib.request
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, quote, unquote, urlparse

import local_library as lib

ROOT_DIR = Path(__file__).resolve().parent
DATA_DIR = ROOT_DIR / ".data"
CONFIG_FILE = DATA_DIR / "local.json"
CACHE_FILE = DATA_DIR / "local-library.json"
OMDB_CACHE_FILE = DATA_DIR / "omdb-cache.json"
OMDB_CHOICES_FILE = DATA_DIR / "omdb-choices.json"
STATIC_DENY = {".data", ".git", ".github", "__pycache__"}
TRANSCODE_SLOTS = threading.Semaphore(2)
_catalog_lock = threading.Lock()
_scan_start_lock = threading.Lock()
_scan_pending = False
_catalog = lib.read_cached(str(CACHE_FILE))
_config = {"root": lib.detect_root()}
SUBTITLE_API = "https://api.opensubtitles.com/api/v1"
_subtitle_token = {"token": "", "at": 0.0}


def log(message: str) -> None:
    print(f"[nexa] {message}", flush=True)


def load_config() -> dict:
    config = {"root": lib.detect_root()}
    try:
        with open(CONFIG_FILE, "r", encoding="utf-8") as handle:
            data = json.load(handle)
        if isinstance(data, dict):
            if data.get("root"):
                config["root"] = lib.detect_root(str(data["root"]))
            for key in ("subtitleApiKey", "subtitleUser", "subtitlePassword", "omdbApiKey"):
                if data.get(key):
                    config[key] = str(data[key])
    except (OSError, ValueError):
        pass
    return config


def save_config(config: dict) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    tmp = CONFIG_FILE.with_suffix(".tmp")
    with open(tmp, "w", encoding="utf-8") as handle:
        json.dump(config, handle, ensure_ascii=False, indent=2)
    os.replace(tmp, CONFIG_FILE)


def public_library(library: dict | None, scanning: bool = False) -> dict:
    if not library:
        return {
            "version": 2,
            "at": 0,
            "root": _config["root"],
            "scanning": scanning,
            "items": [],
            "music": {"albums": []},
            "stats": {"movies": 0, "series": 0, "episodes": 0, "albums": 0, "tracks": 0},
            "errors": [],
        }
    return {
        "version": library.get("version", 2),
        "at": library.get("at", 0),
        "root": library.get("root", _config["root"]),
        "scanning": scanning,
        "items": library.get("items", []),
        "music": library.get("music", {"albums": []}),
        "stats": library.get("stats", {}),
        "errors": library.get("errors", []),
    }


def start_background_scan(root: str | None = None) -> bool:
    global _scan_pending
    with _scan_start_lock:
        if _scan_pending or lib._scan_state.get("scanning"):
            return False
        _scan_pending = True
    target = lib.detect_root(root or _config.get("root"))
    threading.Thread(target=_run_background_scan, args=(target,), daemon=True).start()
    return True


def _run_background_scan(root: str) -> None:
    global _scan_pending
    try:
        scan_library(root)
    except Exception as error:  # noqa: BLE001
        log(f"falha ao escanear: {error}")
    finally:
        _scan_pending = False


def scan_library(root: str | None = None) -> dict:
    global _catalog
    target = lib.detect_root(root or _config.get("root"))
    log(f"escaneando {target} ...")
    started = time.time()
    library = lib.scan(target)
    try:
        enriched = enrich_movies_with_omdb(library)
        if enriched:
            log(f"metadados OMDb atualizados em {enriched} filmes")
    except Exception as error:  # noqa: BLE001
        log(f"OMDb: falha ao atualizar metadados: {error}")
    lib.write_cached(str(CACHE_FILE), library)
    with _catalog_lock:
        _catalog = library
    stats = library.get("stats", {})
    log(
        "biblioteca pronta: {movies} filmes, {series} séries, {episodes} episódios, "
        "{albums} álbuns, {tracks} faixas em {seconds:.1f}s".format(
            movies=stats.get("movies", 0), series=stats.get("series", 0),
            episodes=stats.get("episodes", 0), albums=stats.get("albums", 0),
            tracks=stats.get("tracks", 0), seconds=time.time() - started,
        )
    )
    return library


def current_library() -> dict | None:
    with _catalog_lock:
        return _catalog


def opensubtitles_headers() -> dict:
    key = str(_config.get("subtitleApiKey") or "").strip()
    return {"Api-Key": key, "User-Agent": f"NexaLocal v1.0 ({key})", "Accept": "application/json"}


def opensubtitles_get(path: str, params: dict | None = None) -> object:
    if not str(_config.get("subtitleApiKey") or "").strip():
        raise RuntimeError("informe a chave da API do OpenSubtitles nas Preferências")
    url = f"https://rest.opensubtitles.org{path}"
    if params:
        url = f"{url}?{quote_params(params)}"
    request = urllib.request.Request(url, headers=opensubtitles_headers())
    try:
        with urllib.request.urlopen(request, timeout=25) as response:
            body = response.read().decode("utf-8", "replace")
        return json.loads(body) if body else []
    except urllib.error.HTTPError as error:
        detail = error.read().decode("utf-8", "replace")[:200]
        raise RuntimeError(f"OpenSubtitles respondeu {error.code}: {detail or error.reason}") from error
    except (urllib.error.URLError, TimeoutError) as error:
        raise RuntimeError(f"OpenSubtitles indisponível: {error}") from error


def quote_params(params: dict) -> str:
    from urllib.parse import urlencode
    return urlencode({key: value for key, value in params.items() if value not in (None, "")})


def movie_hash(path: str) -> str:
    import hashlib
    import struct
    size = os.path.getsize(path)
    with open(path, "rb") as handle:
        head = handle.read(65536)
    return hashlib.md5(head + struct.pack("<Q", size)).hexdigest()


def subtitle_language_codes(requested: str) -> str:
    mapping = {"pt": "pob", "pt-br": "pob", "br": "pob", "por": "por", "en": "eng", "eng": "eng"}
    codes = []
    for token in str(requested or "pob,por,eng").split(","):
        code = mapping.get(token.strip().lower())
        if code and code not in codes:
            codes.append(code)
    return ",".join(codes) or "pob,por,eng"


def normalize_subtitle(entry: dict, exact: bool = False) -> dict:
    return {
        "id": str(entry.get("IDSubtitleFile") or entry.get("id") or ""),
        "name": entry.get("MovieReleaseName") or entry.get("release") or entry.get("MovieName") or entry.get("SubFileName") or "",
        "fileName": entry.get("SubFileName") or entry.get("file_name") or "",
        "lang": entry.get("ISO639") or entry.get("SubLanguageID") or "pob",
        "langName": entry.get("LanguageName") or "",
        "year": entry.get("MovieYear") or "",
        "downloads": int(entry.get("SubDownloadsCnt") or entry.get("download_count") or 0),
        "rating": entry.get("SubRating") or entry.get("rating") or 0,
        "hearingImpaired": str(entry.get("SubHearingImpaired") or "") == "1",
        "provider": entry.get("UserNickName") or "",
        "imdb": entry.get("IDMovieImdb") or "",
        "encoding": entry.get("SubEncoding") or "",
        "link": entry.get("SubDownloadLink") or "",
        "exact": bool(exact),
    }


def decode_subtitle_bytes(raw: bytes) -> str:
    try:
        return gzip.decompress(raw).decode("utf-8", "replace")
    except (OSError, EOFError):
        return raw.decode("utf-8", "replace")


def omdb_cache_read() -> dict:
    try:
        with open(OMDB_CACHE_FILE, "r", encoding="utf-8") as handle:
            data = json.load(handle)
        return data if isinstance(data, dict) else {}
    except (OSError, ValueError):
        return {}


def omdb_cache_write(cache: dict) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    tmp = OMDB_CACHE_FILE.with_suffix(".tmp")
    with open(tmp, "w", encoding="utf-8") as handle:
        json.dump(cache, handle, ensure_ascii=False, indent=2)
    os.replace(tmp, OMDB_CACHE_FILE)


def omdb_request(params: dict) -> dict:
    key = str(_config.get("omdbApiKey") or "").strip()
    if not key:
        raise RuntimeError("informe a chave da API do OMDb nas Preferências")
    query = urlencode_params({"apikey": key, **params})
    url = f"http://www.omdbapi.com/?{query}"
    request = urllib.request.Request(url, headers={"User-Agent": "NexaLocal/1.0"})
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            data = json.loads(response.read().decode("utf-8", "replace"))
    except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError) as error:
        raise RuntimeError(f"OMDb indisponível: {error}") from error
    if str(data.get("Response")) != "True":
        return {}
    return data


def urlencode_params(params: dict) -> str:
    from urllib.parse import urlencode
    return urlencode({key: value for key, value in params.items() if value not in (None, "")})


def normalize_title(text: str) -> str:
    cleaned = lib._clean_text(str(text or ""))
    cleaned = lib.YEAR_RE.sub(" ", cleaned)
    return re.sub(r"[^a-z0-9]+", "", cleaned.lower())


def title_tokens(text: str) -> list[str]:
    cleaned = re.sub(r"\(\d{4}\)", " ", str(text or ""))
    cleaned = lib._clean_text(cleaned)
    words = re.findall(r"[a-z0-9]+", cleaned.lower())
    stop = {"o", "a", "os", "as", "de", "da", "do", "das", "dos", "e", "em", "no", "na", "um", "uma", "the", "of", "and"}
    return [word for word in words if len(word) > 2 and word not in stop]


def omdb_pick(title: str, year: int | None = None) -> dict:
    cache = omdb_cache_read()
    key = normalize_title(title) + (f"|{year}" if year else "")
    if key in cache:
        return cache[key] or {}
    data = omdb_request({"t": title, **({"y": str(year)} if year else {})})
    direct_year = str((data or {}).get("Year") or "")
    if data and year and not direct_year.startswith(str(year)):
        data = {}
    if not data and year:
        data = omdb_request({"t": title})
    if not data:
        try:
            found = omdb_request({"s": title})
        except RuntimeError:
            found = {}
        wanted = normalize_title(title)
        wanted_tokens = set(title_tokens(title))
        best = None
        best_score = 0
        for candidate in found.get("Search") or []:
            candidate_title = candidate.get("Title") or ""
            normalized = normalize_title(candidate_title)
            if not normalized:
                continue
            candidate_tokens = set(title_tokens(candidate_title))
            shared = len(wanted_tokens & candidate_tokens)
            score = shared * 2
            if normalized == wanted:
                score += 6
            elif normalized.startswith(wanted) or wanted.startswith(normalized):
                score += 3
            if year and str(candidate.get("Year") or "").startswith(str(year)):
                score += 4
            if score > best_score:
                best_score = score
                best = candidate
        if best and best_score >= 3:
            data = omdb_request({"i": best.get("imdbID") or ""}) or {}
    cache = omdb_cache_read()
    cache[key] = data
    omdb_cache_write(cache)
    return data


def omdb_choices_read() -> dict:
    try:
        with open(OMDB_CHOICES_FILE, "r", encoding="utf-8") as handle:
            data = json.load(handle)
        return data if isinstance(data, dict) else {}
    except (OSError, ValueError):
        return {}


def omdb_choices_write(choices: dict) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    tmp = OMDB_CHOICES_FILE.with_suffix(".tmp")
    with open(tmp, "w", encoding="utf-8") as handle:
        json.dump(choices, handle, ensure_ascii=False, indent=2)
    os.replace(tmp, OMDB_CHOICES_FILE)


def apply_omdb_data(item: dict, data: dict) -> None:
    year = str(data.get("Year") or "")
    if year.isdigit():
        item["year"] = int(year)
    poster = str(data.get("Poster") or "")
    if poster and not poster.startswith("/api/local/art?path="):
        item["poster"] = poster
        item["backdrop"] = poster
    plot = html.unescape(str(data.get("Plot") or ""))
    if plot:
        item["description"] = plot
    rating = str(data.get("imdbRating") or "")
    if rating and rating != "N/A":
        item["rating"] = rating
    genres = [part.strip() for part in str(data.get("Genre") or "").split(",") if part.strip()]
    if genres:
        item["genres"] = genres
    if data.get("Director"):
        item["director"] = html.unescape(str(data["Director"]))
    cast = [html.unescape(part.strip()) for part in str(data.get("Actors") or "").split(",") if part.strip()]
    if cast:
        item["cast"] = cast
    if data.get("Runtime"):
        item["duration"] = data["Runtime"]
    if data.get("Rated"):
        item["maturity"] = maturity_from_rating(data.get("Rated"))
    if data.get("imdbID"):
        item["imdbId"] = data["imdbID"]
    if data.get("Released"):
        item["released"] = data["Released"]


def maturity_from_rating(rated: str) -> str:
    value = str(rated or "").upper()
    if value in ("G", "TV-G", "TV-Y", "TV-Y7", "PG"):
        return "L"
    if value in ("PG-13", "TV-13", "TV-PG"):
        return "12+"
    if value in ("R", "TV-MA", "M", "NC-17"):
        return "16+"
    return "12+"


def enrich_movies_with_omdb(library: dict) -> int:
    if not str(_config.get("omdbApiKey") or "").strip():
        return 0
    updated = 0
    for item in library.get("items") or []:
        if not item.get("local") or item.get("type") != "filme":
            continue
        title = item.get("title") or ""
        file_year = item.get("fileYear")
        query_title = re.sub(r"\(\d{4}\)", "", title).strip()
        choice = omdb_choices_read().get(f"{item.get('rootKey')}:{item.get('fileRel')}")
        try:
            if choice and choice.get("imdbId"):
                data = omdb_request({"i": choice["imdbId"]})
            else:
                data = omdb_pick(query_title, file_year)
        except RuntimeError as error:
            log(f"OMDb: {error}")
            break
        if not data:
            continue
        apply_omdb_data(item, data)
        updated += 1
    counts = {}
    for item in library.get("items") or []:
        if item.get("local") and item.get("type") == "filme":
            counts[item["title"]] = counts.get(item["title"], 0) + 1
    for item in library.get("items") or []:
        if item.get("local") and item.get("type") == "filme" and counts.get(item["title"], 0) > 1 and item.get("year"):
            item["title"] = f"{item['title']} ({item['year']})"
    return updated


def resolve_local_rel(library: dict | None, root_key: str, rel: str) -> tuple[str, str] | None:
    if not library or not root_key or not rel:
        return None
    for group in ("movies", "series", "music"):
        base = (library.get("roots") or {}).get(group, {}).get(root_key)
        if base:
            target = lib._safe_inside(base, rel)
            if target:
                return target, base
    return None


def save_sidecar(media_path: str, content: str, lang: str = "pt") -> tuple[str, str]:
    directory = os.path.dirname(media_path)
    stem = os.path.splitext(os.path.basename(media_path))[0]
    safe_lang = re.sub(r"[^a-zA-Z-]", "", str(lang or "pt")) or "pt"
    is_vtt = content.lstrip().upper().startswith("WEBVTT")
    extension = ".vtt" if is_vtt else ".srt"
    target = os.path.join(directory, f"{stem}.{safe_lang}{extension}")
    counter = 2
    while os.path.exists(target):
        target = os.path.join(directory, f"{stem}.{safe_lang}-{counter}{extension}")
        counter += 1
    with open(target, "w", encoding="utf-8") as handle:
        handle.write(content)
    return target, os.path.basename(target)


def read_body(handler: BaseHTTPRequestHandler, limit: int = 64 * 1024) -> dict:
    try:
        length = int(handler.headers.get("Content-Length", "0"))
    except ValueError:
        length = 0
    if length <= 0 or length > limit:
        return {}
    try:
        return json.loads(handler.rfile.read(length).decode("utf-8"))
    except (ValueError, UnicodeDecodeError):
        return {}


def ffmpeg_available() -> bool:
    return bool(shutil.which("ffmpeg"))


def content_type(path: str) -> str:
    ext = os.path.splitext(path)[1].lower()
    known = {
        ".mp4": "video/mp4", ".m4v": "video/mp4", ".webm": "video/webm",
        ".ogv": "video/ogg", ".ogg": "video/ogg", ".mov": "video/quicktime",
        ".mkv": "video/x-matroska", ".avi": "video/x-msvideo", ".wmv": "video/x-ms-wmv",
        ".ts": "video/mp2t", ".m2ts": "video/mp2t", ".mpg": "video/mpeg", ".mpeg": "video/mpeg",
        ".mp3": "audio/mpeg", ".m4a": "audio/mp4", ".aac": "audio/aac", ".oga": "audio/ogg",
        ".opus": "audio/ogg", ".flac": "audio/flac", ".wav": "audio/wav", ".wma": "audio/x-ms-wma",
        ".srt": "text/plain; charset=utf-8", ".vtt": "text/vtt; charset=utf-8",
        ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png",
        ".webp": "image/webp", ".avif": "image/avif", ".gif": "image/gif",
        ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
        ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
        ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon",
        ".md": "text/markdown; charset=utf-8", ".txt": "text/plain; charset=utf-8",
    }
    return known.get(ext) or mimetypes.guess_type(path)[0] or "application/octet-stream"


def safe_static_path(pathname: str) -> Path | None:
    raw = unquote(pathname)
    if raw in ("", "/"):
        raw = "/index.html"
    candidate = (ROOT_DIR / raw.lstrip("/")).resolve()
    try:
        candidate.relative_to(ROOT_DIR)
    except ValueError:
        return None
    parts = candidate.relative_to(ROOT_DIR).parts
    if not parts or any(part in STATIC_DENY or part.startswith(".") for part in parts):
        return None
    if candidate.is_dir():
        candidate = candidate / "index.html"
    return candidate


class Handler(BaseHTTPRequestHandler):
    server_version = "NexaLocal/1.0"
    protocol_version = "HTTP/1.1"

    def log_message(self, fmt: str, *args) -> None:
        if os.environ.get("NEXA_LOG") == "1":
            super().log_message(fmt, *args)

    def cors(self) -> None:
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Range, Content-Type, Authorization")
        self.send_header("Access-Control-Expose-Headers", "Content-Range, Accept-Ranges, Content-Length")
        self.send_header("Access-Control-Allow-Private-Network", "true")
        self.send_header("Access-Control-Max-Age", "600")

    def send_json(self, status: int, payload: dict) -> None:
        body = json.dumps(payload, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
        self.send_response(status)
        self.cors()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def send_text(self, status: int, text: str, content_type: str = "text/plain; charset=utf-8") -> None:
        body = text.encode("utf-8")
        self.send_response(status)
        self.cors()
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def send_bytes(self, status: int, body: bytes, content_type: str, cache: str = "no-store") -> None:
        self.send_response(status)
        self.cors()
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", cache)
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def resolve_query_path(self, query: dict) -> str | None:
        root_key = (query.get("root") or [""])[0]
        rel = (query.get("path") or [""])[0]
        library = current_library() or _catalog
        if not library or not root_key or not rel:
            return None
        return lib.resolve_media(library, root_key, rel)

    def do_OPTIONS(self) -> None:
        self.send_response(HTTPStatus.NO_CONTENT)
        self.cors()
        self.send_header("Content-Length", "0")
        self.end_headers()

    def do_HEAD(self) -> None:
        self.do_GET()

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        pathname = parsed.path
        query = parse_qs(parsed.query)
        try:
            if pathname == "/api/local/library":
                self.api_library()
                return
            if pathname == "/api/local/config":
                self.send_json(HTTPStatus.OK, {
                    "root": _config["root"],
                    "hasLibrary": bool(current_library()),
                    "ffmpeg": ffmpeg_available(),
                    "hasSubtitleKey": bool(_config.get("subtitleApiKey")),
                    "hasOmdbKey": bool(_config.get("omdbApiKey")),
                })
                return
            if pathname == "/api/local/health":
                self.send_json(HTTPStatus.OK, {
                    "ok": True,
                    "root": _config["root"],
                    "ffmpeg": ffmpeg_available(),
                    "hasLibrary": bool(current_library()),
                })
                return
            if pathname == "/api/local/media":
                self.api_media(query)
                return
            if pathname == "/api/local/transcode":
                self.api_transcode(query)
                return
            if pathname == "/api/local/subtitle":
                self.api_subtitle(query)
                return
            if pathname == "/api/local/subtitle/search":
                self.api_subtitle_search(query)
                return
            if pathname == "/api/local/omdb":
                self.api_omdb(query)
                return
            if pathname == "/api/local/omdb/candidates":
                self.api_omdb_candidates(query)
                return
            if pathname == "/api/local/art":
                self.api_art(query)
                return
            if pathname.startswith("/api/"):
                self.send_json(HTTPStatus.NOT_FOUND, {"error": "rota não encontrada"})
                return
            self.serve_static(pathname)
        except (BrokenPipeError, ConnectionResetError):
            pass
        except Exception as error:  # noqa: BLE001
            log(f"erro em {pathname}: {error}")
            try:
                self.send_json(HTTPStatus.INTERNAL_SERVER_ERROR, {"error": str(error)})
            except (BrokenPipeError, ConnectionResetError):
                pass

    def do_POST(self) -> None:
        global _config
        parsed = urlparse(self.path)
        if parsed.path == "/api/local/scan":
            body = read_body(self)
            root = str(body.get("root") or _config["root"])
            target = lib.detect_root(root)
            if not os.path.isdir(target):
                self.send_json(HTTPStatus.BAD_REQUEST, {"error": f"pasta não encontrada: {target}"})
                return
            _config = {"root": target}
            save_config(_config)
            started = start_background_scan(target)
            self.send_json(HTTPStatus.ACCEPTED, {"scanning": True, "started": started, "root": target})
            return
        if parsed.path == "/api/local/subtitle/download":
            self.api_subtitle_download(read_body(self))
            return
        if parsed.path == "/api/local/subtitle/upload":
            self.api_subtitle_upload(read_body(self))
            return
        if parsed.path == "/api/local/subtitle/settings":
            self.api_subtitle_settings(read_body(self))
            return
        if parsed.path == "/api/local/omdb/settings":
            self.api_omdb_settings(read_body(self))
            return
        if parsed.path == "/api/local/omdb/enrich":
            self.api_omdb_enrich(read_body(self))
            return
        if parsed.path == "/api/local/omdb/choose":
            self.api_omdb_choose(read_body(self))
            return
        if parsed.path == "/api/local/config":
            body = read_body(self)
            root = str(body.get("root") or "").strip()
            if not root:
                self.send_json(HTTPStatus.BAD_REQUEST, {"error": "informe a pasta do HD"})
                return
            target = lib.detect_root(root)
            if not os.path.isdir(target):
                self.send_json(HTTPStatus.BAD_REQUEST, {"error": f"pasta não encontrada: {target}"})
                return
            _config = {**_config, "root": target}
            save_config(_config)
            started = start_background_scan(target)
            self.send_json(HTTPStatus.ACCEPTED, {"scanning": True, "started": started, "root": target})
            return
        self.send_json(HTTPStatus.NOT_FOUND, {"error": "rota não encontrada"})

    def api_library(self) -> None:
        library = current_library()
        scanning = bool(lib._scan_state["scanning"])
        if library is None:
            if not scanning:
                start_background_scan(_config["root"])
                scanning = True
            self.send_json(HTTPStatus.OK, public_library(None, scanning=scanning))
            return
        self.send_json(HTTPStatus.OK, public_library(library, scanning=scanning))

    def api_media(self, query: dict) -> None:
        path = self.resolve_query_path(query)
        if not path:
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "arquivo não encontrado"})
            return
        if not os.path.isfile(path):
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "arquivo não encontrado"})
            return
        self.stream_file(path)

    def api_subtitle(self, query: dict) -> None:
        path = self.resolve_query_path(query)
        if not path or not os.path.isfile(path):
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "legenda não encontrada"})
            return
        try:
            with open(path, "r", encoding="utf-8-sig", errors="replace") as handle:
                text = handle.read()
        except OSError:
            try:
                with open(path, "r", encoding="latin-1", errors="replace") as handle:
                    text = handle.read()
            except OSError as error:
                self.send_json(HTTPStatus.INTERNAL_SERVER_ERROR, {"error": str(error)})
                return
        if path.lower().endswith(".srt"):
            self.send_text(HTTPStatus.OK, lib.srt_to_vtt(text), "text/vtt; charset=utf-8")
        else:
            self.send_text(HTTPStatus.OK, text, "text/vtt; charset=utf-8")

    def api_subtitle_search(self, query: dict) -> None:
        title = str((query.get("title") or [""])[0]).strip()
        if not title:
            self.send_json(HTTPStatus.BAD_REQUEST, {"error": "informe o título do filme"})
            return
        languages = subtitle_language_codes(str((query.get("lang") or ["pob,por,eng"])[0]))
        params = {"query": title, "sublanguageid": languages}
        year = str((query.get("year") or [""])[0]).strip()
        if year.isdigit():
            params["year"] = year
        results = []
        try:
            root_key = str((query.get("root") or [""])[0]).strip()
            rel = str((query.get("path") or [""])[0]).strip()
            resolved = resolve_local_rel(current_library(), root_key, rel)
            if resolved:
                try:
                    exact_entries = opensubtitles_get(f"/search/moviehash/{movie_hash(resolved[0])}")
                except RuntimeError:
                    exact_entries = []
                for entry in exact_entries or []:
                    if str(entry.get("SubLanguageID") or "") not in languages.split(","):
                        continue
                    results.append(normalize_subtitle(entry, exact=True))
            entries = []
            for code in languages.split(","):
                try:
                    found = opensubtitles_get("/search/query", {**params, "sublanguageid": code})
                except RuntimeError:
                    found = []
                entries.extend(found or [])
        except RuntimeError as error:
            self.send_json(HTTPStatus.BAD_GATEWAY, {"error": str(error)})
            return
        for entry in entries or []:
            normalized = normalize_subtitle(entry)
            if normalized["id"] and not any(item["id"] == normalized["id"] for item in results):
                results.append(normalized)
        def rank(item: dict) -> tuple:
            priority = {"pob": 0, "por": 1, "pt": 1, "eng": 2}.get(str(item.get("lang") or "").lower(), 3)
            year_match = 0 if year and str(item.get("year") or "") == year else 1
            return (not item["exact"], priority, year_match, -item["downloads"])

        results.sort(key=rank)
        self.send_json(HTTPStatus.OK, {"results": results[:80], "query": title})

    def api_subtitle_download(self, body: dict) -> None:
        link = str(body.get("link") or "").strip()
        root_key = str(body.get("root") or "").strip()
        rel = str(body.get("path") or "").strip()
        lang = str(body.get("lang") or "pob")
        if not link.startswith("https://dl.opensubtitles.org/"):
            self.send_json(HTTPStatus.BAD_REQUEST, {"error": "link de legenda inválido"})
            return
        if not root_key or not rel:
            self.send_json(HTTPStatus.BAD_REQUEST, {"error": "informe o filme"})
            return
        library = current_library()
        resolved = resolve_local_rel(library, root_key, rel)
        if not resolved or not os.path.isfile(resolved[0]):
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "filme não encontrado no HD"})
            return
        media_path, base = resolved
        try:
            request = urllib.request.Request(link, headers=opensubtitles_headers())
            with urllib.request.urlopen(request, timeout=40) as response:
                raw = response.read()
        except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError) as error:
            self.send_json(HTTPStatus.BAD_GATEWAY, {"error": f"não foi possível baixar a legenda: {error}"})
            return
        content = decode_subtitle_bytes(raw)
        if not content.strip():
            self.send_json(HTTPStatus.BAD_GATEWAY, {"error": "OpenSubtitles devolveu um arquivo vazio"})
            return
        try:
            target, name = save_sidecar(media_path, content, "pob" if lang in ("pob", "pt", "pt-br") else lang)
        except OSError as error:
            self.send_json(HTTPStatus.INTERNAL_SERVER_ERROR, {"error": f"não foi possível salvar no HD: {error}"})
            return
        rel_sub = os.path.relpath(target, base).replace(os.sep, "/")
        self.send_json(HTTPStatus.OK, {
            "saved": True,
            "name": name,
            "path": rel_sub,
            "url": lib._subtitle_url(root_key, rel_sub),
        })

    def api_subtitle_upload(self, body: dict) -> None:
        root_key = str(body.get("root") or "").strip()
        rel = str(body.get("path") or "").strip()
        content = str(body.get("content") or "")
        lang = str(body.get("lang") or "pt")
        if not root_key or not rel or not content.strip():
            self.send_json(HTTPStatus.BAD_REQUEST, {"error": "informe o filme e o conteúdo da legenda"})
            return
        library = current_library()
        resolved = resolve_local_rel(library, root_key, rel)
        if not resolved or not os.path.isfile(resolved[0]):
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "filme não encontrado no HD"})
            return
        media_path, base = resolved
        try:
            target, name = save_sidecar(media_path, content, lang)
        except OSError as error:
            self.send_json(HTTPStatus.INTERNAL_SERVER_ERROR, {"error": f"não foi possível salvar no HD: {error}"})
            return
        rel_sub = os.path.relpath(target, base).replace(os.sep, "/")
        self.send_json(HTTPStatus.OK, {
            "saved": True,
            "name": name,
            "path": rel_sub,
            "url": lib._subtitle_url(root_key, rel_sub),
        })

    def api_subtitle_settings(self, body: dict) -> None:
        global _config
        for key in ("subtitleApiKey", "subtitleUser", "subtitlePassword"):
            if key in body:
                value = str(body.get(key) or "").strip()
                if value:
                    _config[key] = value
                else:
                    _config.pop(key, None)
        save_config(_config)
        _subtitle_token["token"] = ""
        self.send_json(HTTPStatus.OK, {
            "hasKey": bool(_config.get("subtitleApiKey")),
            "hasUser": bool(_config.get("subtitleUser")),
        })

    def api_omdb(self, query: dict) -> None:
        title = str((query.get("title") or [""])[0]).strip()
        imdb = str((query.get("imdb") or [""])[0]).strip()
        if not title and not imdb:
            self.send_json(HTTPStatus.BAD_REQUEST, {"error": "informe o título do filme"})
            return
        try:
            if imdb:
                data = omdb_request({"i": imdb})
            else:
                year = str((query.get("year") or [""])[0]).strip()
                data = omdb_request({"t": title, **({"y": year} if year.isdigit() else {})})
        except RuntimeError as error:
            self.send_json(HTTPStatus.BAD_GATEWAY, {"error": str(error)})
            return
        if not data:
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "filme não encontrado no OMDb"})
            return
        self.send_json(HTTPStatus.OK, {"movie": {
            "title": data.get("Title") or "",
            "year": str(data.get("Year") or ""),
            "rated": data.get("Rated") or "",
            "runtime": data.get("Runtime") or "",
            "genre": data.get("Genre") or "",
            "plot": data.get("Plot") or "",
            "poster": data.get("Poster") or "",
            "imdbRating": data.get("imdbRating") or "",
            "imdbId": data.get("imdbID") or "",
            "actors": data.get("Actors") or "",
            "director": data.get("Director") or "",
            "released": data.get("Released") or "",
        }})

    def api_omdb_candidates(self, query: dict) -> None:
        title = str((query.get("title") or [""])[0]).strip()
        if not title:
            self.send_json(HTTPStatus.BAD_REQUEST, {"error": "informe o título do filme"})
            return
        variants = [title]
        for part in re.split(r"\s[-–—]\s", title):
            part = part.strip()
            if part and part not in variants:
                variants.append(part)
        words = title.split()
        if len(words) > 3:
            short = " ".join(words[:3])
            if short not in variants:
                variants.append(short)
        entries = []
        seen = set()
        for variant in variants:
            try:
                found = omdb_request({"s": variant})
            except RuntimeError as error:
                self.send_json(HTTPStatus.BAD_GATEWAY, {"error": str(error)})
                return
            for entry in (found.get("Search") or []):
                key = entry.get("imdbID") or entry.get("Title")
                if key and key not in seen:
                    seen.add(key)
                    entries.append(entry)
            if len(entries) >= 12:
                break
        candidates = []
        for entry in entries[:12]:
            candidates.append({
                "imdbId": entry.get("imdbID") or "",
                "title": entry.get("Title") or "",
                "year": entry.get("Year") or "",
                "poster": entry.get("Poster") or "",
                "type": entry.get("Type") or "",
            })
        self.send_json(HTTPStatus.OK, {"candidates": candidates})

    def api_omdb_choose(self, body: dict) -> None:
        root_key = str(body.get("root") or "").strip()
        rel = str(body.get("path") or "").strip()
        imdb_id = str(body.get("imdbId") or "").strip()
        if not root_key or not rel or not imdb_id:
            self.send_json(HTTPStatus.BAD_REQUEST, {"error": "informe o filme e o imdbId"})
            return
        library = current_library()
        resolved = resolve_local_rel(library, root_key, rel)
        if not resolved:
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "filme não encontrado no HD"})
            return
        try:
            data = omdb_request({"i": imdb_id})
        except RuntimeError as error:
            self.send_json(HTTPStatus.BAD_GATEWAY, {"error": str(error)})
            return
        if not data:
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "filme não encontrado no OMDb"})
            return
        choices = omdb_choices_read()
        choices[f"{root_key}:{rel}"] = {"imdbId": imdb_id, "title": data.get("Title") or "", "year": data.get("Year") or ""}
        omdb_choices_write(choices)
        for item in library.get("items") or []:
            if item.get("local") and item.get("fileRel") == rel and item.get("rootKey") == root_key:
                apply_omdb_data(item, data)
        lib.write_cached(str(CACHE_FILE), library)
        self.send_json(HTTPStatus.OK, {"saved": True})

    def api_omdb_settings(self, body: dict) -> None:
        global _config
        if "omdbApiKey" in body:
            value = str(body.get("omdbApiKey") or "").strip()
            if value:
                _config["omdbApiKey"] = value
            else:
                _config.pop("omdbApiKey", None)
        save_config(_config)
        self.send_json(HTTPStatus.OK, {"hasOmdbKey": bool(_config.get("omdbApiKey"))})

    def api_omdb_enrich(self, body: dict) -> None:
        library = current_library()
        if not library:
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "biblioteca local ainda não foi escaneada"})
            return
        if not str(_config.get("omdbApiKey") or "").strip():
            self.send_json(HTTPStatus.BAD_REQUEST, {"error": "informe a chave da API do OMDb"})
            return
        try:
            updated = enrich_movies_with_omdb(library)
        except RuntimeError as error:
            self.send_json(HTTPStatus.BAD_GATEWAY, {"error": str(error)})
            return
        lib.write_cached(str(CACHE_FILE), library)
        self.send_json(HTTPStatus.OK, {"updated": updated})

    def api_art(self, query: dict) -> None:
        if query.get("path"):
            path = self.resolve_query_path(query)
            if not path or not os.path.isfile(path):
                self.send_json(HTTPStatus.NOT_FOUND, {"error": "arte não encontrada"})
                return
            self.serve_file(path, cache="public, max-age=3600")
            return
        title = (query.get("title") or ["NEXA"])[0]
        kind = (query.get("kind") or ["poster"])[0]
        svg = lib._placeholder_svg(title, kind if kind in ("poster", "backdrop", "cover") else "poster")
        self.send_bytes(HTTPStatus.OK, svg, "image/svg+xml; charset=utf-8", cache="public, max-age=86400")

    def api_transcode(self, query: dict) -> None:
        path = self.resolve_query_path(query)
        if not path or not os.path.isfile(path):
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "arquivo não encontrado"})
            return
        if not ffmpeg_available():
            self.send_json(HTTPStatus.SERVICE_UNAVAILABLE, {"error": "ffmpeg não instalado"})
            return
        if not TRANSCODE_SLOTS.acquire(blocking=False):
            self.send_json(HTTPStatus.SERVICE_UNAVAILABLE, {"error": "muitas transcodificações ativas"})
            return
        try:
            start = 0.0
            try:
                start = max(0.0, float((query.get("start") or ["0"])[0]))
            except ValueError:
                pass
            args = ["ffmpeg", "-hide_banner", "-loglevel", "error", "-nostdin"]
            if start > 0:
                args += ["-ss", f"{start:.3f}"]
            args += [
                "-i", path,
                "-map", "0:v:0?", "-map", "0:a:0?",
                "-c:v", "libx264", "-preset", "veryfast", "-tune", "zerolatency",
                "-crf", "23", "-pix_fmt", "yuv420p", "-g", "48", "-sc_threshold", "0",
                "-c:a", "aac", "-b:a", "160k", "-ac", "2",
                "-movflags", "frag_keyframe+empty_moov+default_base_moof",
                "-f", "mp4", "pipe:1",
            ]
            proc = subprocess.Popen(args, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, stdin=subprocess.DEVNULL)
            self.send_response(HTTPStatus.OK)
            self.cors()
            self.send_header("Content-Type", "video/mp4")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Connection", "close")
            self.end_headers()
            try:
                while True:
                    chunk = proc.stdout.read(64 * 1024)
                    if not chunk:
                        break
                    self.wfile.write(chunk)
                    self.wfile.flush()
            except (BrokenPipeError, ConnectionResetError):
                pass
            finally:
                try:
                    proc.kill()
                except OSError:
                    pass
                proc.wait(timeout=2)
        finally:
            TRANSCODE_SLOTS.release()

    def stream_file(self, path: str) -> None:
        try:
            size = os.path.getsize(path)
        except OSError:
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "arquivo não encontrado"})
            return
        start, end = 0, size - 1
        status = HTTPStatus.OK
        range_header = self.headers.get("Range")
        if range_header:
            match = re.match(r"bytes=(\d*)-(\d*)", range_header.strip())
            if match:
                if match.group(1):
                    start = int(match.group(1))
                if match.group(2):
                    end = min(int(match.group(2)), size - 1)
                if start > end or start >= size:
                    self.send_response(HTTPStatus.REQUESTED_RANGE_NOT_SATISFIABLE)
                    self.cors()
                    self.send_header("Content-Range", f"bytes */{size}")
                    self.send_header("Content-Length", "0")
                    self.end_headers()
                    return
                status = HTTPStatus.PARTIAL_CONTENT
        length = end - start + 1
        self.send_response(status)
        self.cors()
        self.send_header("Content-Type", lib._media_type(path))
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Content-Length", str(length))
        if status == HTTPStatus.PARTIAL_CONTENT:
            self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Cache-Control", "no-store")
        filename = quote(os.path.basename(path))
        self.send_header("Content-Disposition", f"inline; filename*=UTF-8''{filename}")
        self.end_headers()
        if self.command == "HEAD":
            return
        with open(path, "rb") as handle:
            handle.seek(start)
            remaining = length
            while remaining > 0:
                chunk = handle.read(min(256 * 1024, remaining))
                if not chunk:
                    break
                self.wfile.write(chunk)
                remaining -= len(chunk)

    def serve_file(self, path: str, cache: str = "no-store") -> None:
        try:
            size = os.path.getsize(path)
            handle = open(path, "rb")
        except OSError:
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "arquivo não encontrado"})
            return
        with handle:
            self.send_response(HTTPStatus.OK)
            self.cors()
            self.send_header("Content-Type", content_type(path))
            self.send_header("Content-Length", str(size))
            self.send_header("Cache-Control", cache)
            self.end_headers()
            if self.command != "HEAD":
                shutil.copyfileobj(handle, self.wfile)

    def serve_static(self, pathname: str) -> None:
        path = safe_static_path(pathname)
        if not path or not path.is_file():
            self.send_text(HTTPStatus.NOT_FOUND, "Arquivo não encontrado")
            return
        self.serve_file(str(path), cache="no-cache")


def main() -> None:
    global _config
    parser = argparse.ArgumentParser(description="Servidor local do NEXA para HD externo")
    parser.add_argument("--root", help="pasta do HD (contém filmes, series e músicas)")
    parser.add_argument("--port", type=int, default=int(os.environ.get("NEXA_PORT", "8090")))
    parser.add_argument("--host", default=os.environ.get("NEXA_HOST", "127.0.0.1"))
    parser.add_argument("--scan", action="store_true", help="escaneia a biblioteca ao iniciar")
    args = parser.parse_args()

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    _config = load_config()
    if args.root:
        _config = {"root": lib.detect_root(args.root)}
        save_config(_config)
        args.scan = True
    if not CONFIG_FILE.exists():
        save_config(_config)

    _catalog = lib.read_cached(str(CACHE_FILE))
    if _catalog and _catalog.get("root") != _config["root"]:
        _catalog = None

    if args.scan or _catalog is None:
        start_background_scan(_config["root"])

    server = ThreadingHTTPServer((args.host, args.port), Handler)
    log(f"NEXA local em http://{args.host}:{args.port}")
    log(f"HD: {_config['root']}")
    log(f"ffmpeg: {'disponível' if ffmpeg_available() else 'indisponível'}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        log("encerrando")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
