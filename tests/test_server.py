import os
import stat
import tempfile
import threading
import unittest
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from unittest import mock
from urllib.request import Request

import local_library as lib
import local_server as server


class SecurityHelpersTest(unittest.TestCase):
    def test_origin_allowlist(self):
        allowed = ["http://localhost", "https://pages.example"]
        self.assertTrue(server.origin_allowed("http://localhost:8090", allowed))
        self.assertTrue(server.origin_allowed("https://pages.example", allowed))
        self.assertFalse(server.origin_allowed("https://evil.example", allowed))
        self.assertFalse(server.origin_allowed("null", allowed))
        self.assertFalse(server.origin_allowed("", allowed))
        self.assertFalse(server.origin_allowed("ftp://localhost", allowed))

    def test_host_allowlist(self):
        self.assertTrue(server.host_allowed("localhost:8090", "127.0.0.1"))
        self.assertTrue(server.host_allowed("127.0.0.1:8090", "127.0.0.1"))
        self.assertFalse(server.host_allowed("evil.example", "127.0.0.1"))
        self.assertTrue(server.host_allowed("evil.example", "0.0.0.0"))

    def test_remote_host(self):
        self.assertTrue(server.remote_host_allowed(
            "https://dl.opensubtitles.org/pt/x.srt", ("opensubtitles.org",)
        ))
        self.assertFalse(server.remote_host_allowed(
            "https://opensubtitles.org.evil.test/x", ("opensubtitles.org",)
        ))

    def test_static_path_traversal(self):
        self.assertIsNone(server.safe_static_path("/../local_server.py"))
        self.assertIsNone(server.safe_static_path("/.data/local.json"))
        self.assertEqual(server.safe_static_path("/").name, "index.html")

    def test_config_permissions(self):
        with tempfile.TemporaryDirectory() as tmp:
            data_dir = Path(tmp)
            config_file = data_dir / "local.json"
            with mock.patch.object(server, "DATA_DIR", data_dir), \
                    mock.patch.object(server, "CONFIG_FILE", config_file):
                server.save_config({"root": "/tmp/media"})
            self.assertEqual(stat.S_IMODE(config_file.stat().st_mode), 0o600)


class LimitedReadTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        class Handler(BaseHTTPRequestHandler):
            def do_GET(self):
                body = b"x" * (64 * 1024) if self.path == "/big" else b"ok"
                self.send_response(200)
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)

            def log_message(self, *args):
                return

        cls.httpd = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
        cls.thread = threading.Thread(target=cls.httpd.serve_forever, daemon=True)
        cls.thread.start()
        cls.base = "http://127.0.0.1:%d" % cls.httpd.server_address[1]

    @classmethod
    def tearDownClass(cls):
        cls.httpd.shutdown()
        cls.httpd.server_close()

    def test_small_read(self):
        body = server.read_limited(
            Request(self.base + "/ok"), limit=1024, allowed_hosts=("127.0.0.1",)
        )
        self.assertEqual(body, b"ok")

    def test_size_cap(self):
        with self.assertRaises(RuntimeError):
            server.read_limited(
                Request(self.base + "/big"), limit=1024, allowed_hosts=("127.0.0.1",)
            )

    def test_bad_host(self):
        with self.assertRaises(RuntimeError):
            server.read_limited(
                Request(self.base + "/ok"), allowed_hosts=("opensubtitles.org",)
            )


class LibraryTest(unittest.TestCase):
    def test_subtitle_conversion(self):
        srt = "1\n00:00:01,000 --> 00:00:02,000\nOlá\n"
        vtt = lib.subtitle_to_vtt(srt, ".srt")
        self.assertTrue(vtt.startswith("WEBVTT"))
        self.assertIn("Olá", vtt)

    def test_detect_root_explicit(self):
        with mock.patch.dict(os.environ, {"NEXA_MEDIA_ROOT": "/env/media"}):
            self.assertEqual(lib.detect_root("/explicit/media"), os.path.abspath("/explicit/media"))
            self.assertEqual(lib.detect_root(), os.path.abspath("/env/media"))


class OmdbCacheTest(unittest.TestCase):
    def test_cache_reused(self):
        cache = {}
        calls = []

        def fake_request(params):
            calls.append(params)
            return {"Title": "Teste", "Year": "2020"}

        with mock.patch.object(server, "omdb_request", fake_request):
            first = server.omdb_pick("Teste", 2020, cache)
            second = server.omdb_pick("Teste", 2020, cache)
        self.assertEqual(first, second)
        self.assertEqual(len(calls), 1)


if __name__ == "__main__":
    unittest.main()
