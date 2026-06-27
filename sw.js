// Service worker for راديو البلد studio PWA.
// Network-first for the app code (HTML/JS/JSON) so updates always propagate;
// cache-first for static media (images/fonts) for speed + offline.
const CACHE = 'albalad-studio-v5';

const SHELL = [
  './',
  './index.html',
  './support.js',
  './image-slot.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch.png'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then((c) => Promise.all(
      SHELL.map((u) => c.add(u).catch(() => null))
    ))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

function networkFirst(req) {
  return fetch(req).then((res) => {
    if (res && res.status === 200) {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copy).catch(() => {}));
    }
    return res;
  }).catch(() => caches.match(req).then((hit) => hit || caches.match('./index.html')));
}

function cacheFirst(req) {
  return caches.match(req).then((hit) => {
    if (hit) return hit;
    return fetch(req).then((res) => {
      if (res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy).catch(() => {}));
      }
      return res;
    });
  });
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // App code & navigations → always try the network first so edits show up.
  if (req.mode === 'navigate' || /\.(html|js|json|webmanifest)(\?|$)/i.test(new URL(req.url).pathname)) {
    e.respondWith(networkFirst(req));
    return;
  }
  // Static media (images, fonts) → cache-first.
  e.respondWith(cacheFirst(req));
});
