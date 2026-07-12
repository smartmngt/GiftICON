const CACHE = 'gifticon-v7';
const ASSETS = [
  '/GiftICON/',
  '/GiftICON/index.html',
  '/GiftICON/manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
