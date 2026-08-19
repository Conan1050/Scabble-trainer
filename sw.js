self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('crossword-v1').then(cache => {
      return cache.addAll(['./', './index.html', './dictionary.txt', './manifest.json']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});