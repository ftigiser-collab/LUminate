/* LUminate Lite — Service Worker (offline) für https://ftigiser-collab.github.io/LUminate/lite/.
   Eigener Cache-Präfix "lulite-" (nicht "luminate-": den räumt der Service Worker von LUminate auf).
   Update: VERSION hochzählen und APP_VERSION in index.html anpassen. */
const VERSION = 'lulite-v1.3.0';
const PREFIX = 'lulite-';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSION)
      .then((c) => c.addAll(CORE.map((u) => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k.startsWith(PREFIX) && k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // App-Seite: zuerst Netz (immer aktueller Stand), offline aus dem Cache
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req, { cache: 'no-cache' })
        .then((res) => {
          if (res && res.ok) caches.open(VERSION).then((c) => c.put('./index.html', res.clone()));
          return res;
        })
        .catch(() => caches.match('./index.html').then((hit) => hit || new Response('<h1>LUminate Lite ist offline noch nicht verfügbar</h1><p>Bitte einmal mit Internet öffnen.</p>', { headers: { 'Content-Type': 'text/html; charset=utf-8' } })))
    );
    return;
  }

  // Rest: zuerst Cache
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
      if (res && res.ok) caches.open(VERSION).then((c) => c.put(req, res.clone()));
      return res;
    }).catch(() => Response.error()))
  );
});
