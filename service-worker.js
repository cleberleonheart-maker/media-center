importScripts('./nexa-version.js');

const CACHE_NAME = 'nexa-shell-' + NEXA_VERSION;
const ASSET_CACHE = 'nexa-assets-' + NEXA_VERSION;
const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './nexa-version.js',
  './vendor/core-js-bundle.min.js',
  './vendor/promise-polyfill.min.js',
  './vendor/fetch.umd.js',
  './vendor/url-polyfill.min.js',
  './vendor/element-closest.js',
  './vendor/dialog-polyfill.css',
  './vendor/dialog-polyfill.js',
  './vendor/compat.js',
  './manifest.json',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];
const CACHEABLE_HOSTS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'image.tmdb.org',
  'lh3.googleusercontent.com'
];

function cacheAsset(cacheName, request, response) {
  if (response.status !== 200 && response.type !== 'opaque') return Promise.resolve();
  return caches.open(cacheName)
    .then((cache) => cache.put(request, response.clone()));
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((key) => (key.startsWith('nexa-shell-') || key.startsWith('nexa-assets-')) && key !== CACHE_NAME && key !== ASSET_CACHE)
        .map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.pathname.startsWith('/api/local/') || request.headers.has('range')) {
    event.respondWith(fetch(request));
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          event.waitUntil(cacheAsset(CACHE_NAME, './index.html', response));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  if (url.origin !== self.location.origin) {
    if (CACHEABLE_HOSTS.some((host) => url.hostname === host || url.hostname.endsWith('.' + host))) {
      event.respondWith(
        caches.match(request).then((cached) => {
          const fresh = fetch(request).then((response) => {
            event.waitUntil(cacheAsset(ASSET_CACHE, request, response));
            return response;
          }).catch(() => cached);
          return cached || fresh;
        })
      );
    }
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const fresh = fetch(request).then((response) => {
        event.waitUntil(cacheAsset(CACHE_NAME, request, response));
        return response;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});
