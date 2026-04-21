// Dummy service worker to silence 404 errors from previous projects
self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        self.registration.unregister()
            .then(() => self.clients.matchAll())
            .then((clients) => {
                clients.forEach(client => client.navigate(client.url));
            })
    );
});
