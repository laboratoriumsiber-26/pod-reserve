const CACHE_NAME = 'podreserve-v1.0.15';
const ASSETS = [
  './index.html',
  './icon.svg',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap',
  'https://unpkg.com/lucide@latest'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  // Only cache GET requests
  if (e.request.method !== 'GET') return;
  
  e.respondWith(
    caches.match(e.request).then((res) => {
      // If we have a cached version, return it. Otherwise fetch from network.
      return res || fetch(e.request).then((fetchRes) => {
        // Optionally cache new dynamic assets here if needed
        return fetchRes;
      });
    }).catch(() => {
      // Fallback for offline if something isn't in cache
      // We could return a custom offline page here if we had one
    })
  );
});

// Clean up old caches when a new service worker takes over
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
});
