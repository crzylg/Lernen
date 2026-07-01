/* Service Worker - macht die App offline nutzbar und installierbar (iPhone: "Zum Home-Bildschirm"). */
var CACHE = "lernplan-v1";
var ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./data/curriculum.js",
  "./manifest.webmanifest",
  "./icons/icon.svg"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () {
    return self.skipWaiting();
  }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// App-Dateien: erst Cache (schnell/offline). Externe Links (YouTube etc.) laufen normal ueber das Netz.
self.addEventListener("fetch", function (e) {
  var url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return; // externe Quellen nicht cachen
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      return hit || fetch(e.request).then(function (resp) {
        var copy = resp.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        return resp;
      }).catch(function () { return caches.match("./index.html"); });
    })
  );
});

// "Quellen aktualisieren": App-Cache neu laden.
self.addEventListener("message", function (e) {
  if (e.data && e.data.type === "refresh") {
    caches.open(CACHE).then(function (c) {
      ASSETS.forEach(function (a) { c.add(a).catch(function () {}); });
    });
  }
});
