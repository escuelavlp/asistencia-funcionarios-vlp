const CACHE_NAME = 'asistencia-vlp-v4';
const ASSETS = [
  './',
  './index.html',
  './tablet.html',
  './manifest.json',
  './manifest-tablet.json',
  './js/jsQR.js',
  './js/qrcode.min.js',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Estrategia Network-First: Siempre busca la versión más reciente en GitHub
self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('supabase.co')) {
    return;
  }
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        if (res.status === 200 && e.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
