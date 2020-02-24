var cacheName = "status-pwa";
var filesToCache = ["/index.html", "/style.css", "/js/script.js"];

// Install
self.addEventListener("install", function(e) {
    e.waitUntil(
        caches
        .open(cacheName)
        .then(function(cache) {
            return cache.addAll(filesToCache);
        })
        .catch(err => {
            console.log(err);
        })
    );
});

// Fetch
self.addEventListener("fetch", function(e) {
    e.respondWith(
        caches
        .match(e.request)
        .then(function(response) {
            return response || fetch(e.request);
        })
        .catch(err => {
            console.log(err);
        })
    );
});