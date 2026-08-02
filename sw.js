const CACHE_NAME = 'podreserve-v1.0.31';
const ASSETS = [
  './index.html',
  './icon.svg',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap',
  'https://unpkg.com/lucide@latest'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  
  // Network-First Strategy for HTML files
  if (e.request.mode === 'navigate' || e.request.url.includes('index.html') || e.request.url === self.registration.scope) {
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resClone));
          return response;
        })
        .catch(() => {
          return caches.match(e.request);
        })
    );
    return;
  }
  
  // Cache-First Strategy for static assets (fonts, icons)
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    }).then(() => self.clients.claim())
  );
});
