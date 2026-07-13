// v9 - cache disabled
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
