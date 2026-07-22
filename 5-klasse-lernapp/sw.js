// Einfacher Service Worker: macht die App offline nutzbar (iPhone/iPad "Zum Home-Bildschirm").
// Netzwerk zuerst (damit der 🔄-Button immer frische Inhalte holen kann),
// bei fehlendem Netz wird die zuletzt gespeicherte Version genutzt.
var CACHE = "lk5-cache-v3";
var ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./data/mathe.js",
  "./data/deutsch.js",
  "./data/englisch.js",
  "./data/erdkunde.js",
  "./data/biologie.js",
  "./data/lesen.js",
  "./data/spiele.js",
  "./vendor/gsap.min.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-180.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }));
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(event.request, copy); });
        return res;
      })
      .catch(function () {
        return caches.match(event.request, { ignoreSearch: true });
      })
  );
});
