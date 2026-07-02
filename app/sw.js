/* Service Worker - macht die App offline nutzbar und installierbar (iPhone: "Zum Home-Bildschirm").
   Strategie: Netz zuerst (damit Updates sofort ankommen), Cache als Offline-Fallback. */
var CACHE = "lernplan-v3";
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

// App-Dateien: Netz zuerst (frisch), bei Offline aus dem Cache.
// Externe Links (YouTube, Quellen) laufen normal ueber das Netz.
self.addEventListener("fetch", function (e) {
  var url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request).then(function (resp) {
      var copy = resp.clone();
      caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      return resp;
    }).catch(function () {
      return caches.match(e.request).then(function (hit) {
        return hit || caches.match("./index.html");
      });
    })
  );
});

// "Quellen aktualisieren": App-Cache komplett erneuern.
self.addEventListener("message", function (e) {
  if (e.data && e.data.type === "refresh") {
    caches.open(CACHE).then(function (c) {
      ASSETS.forEach(function (a) { c.add(a).catch(function () {}); });
    });
  }
});
