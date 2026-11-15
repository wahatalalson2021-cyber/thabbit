/* Offline support: always try the network first (so updates arrive at once), fall back to the saved copy when offline. */
const CACHE = 'thabbit-v3';
const MCACHE = 'thabbit-mushaf-v1';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== MCACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  /* Mushaf fonts (King Fahd Complex): keep a copy on the device once used, so pages open offline. */
  if (url.origin === 'https://cdn.jsdelivr.net' && (url.pathname.startsWith('/npm/quran-qcf4@') || url.pathname.startsWith('/npm/@tlawat/mushaf-fonts-qpc-v4-tajweed@'))){
    e.respondWith(caches.open(MCACHE).then(c => c.match(e.request.url).then(hit => hit || fetch(e.request).then(res => { if (res.ok) c.put(e.request.url, res.clone()); return res; }))));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request, {cache: 'no-store'}).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
