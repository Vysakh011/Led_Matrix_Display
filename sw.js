// sw.js - Service Worker
const CACHE_NAME = 'mqtt-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/register.html',
  '/mqtt_control.html',
  'https://unpkg.com/mqtt/dist/mqtt.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
