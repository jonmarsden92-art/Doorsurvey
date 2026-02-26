const CACHE_NAME = 'door-survey-v1';
const urlsToCache = [
    '/Doorsurvey/',
    '/Doorsurvey/index.html',
    '/Doorsurvey/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});