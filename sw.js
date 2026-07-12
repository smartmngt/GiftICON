const CACHE = 'gifticon-v8';
const ASSETS = [
  '/GiftICON/',
  '/GiftICON/index.html',
  '/GiftICON/manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
