var cacheName = 'Dula cache';
var urlsToCache = [
    '/',
    '/stylesheets/style.css',
    '/images/heart.jpg',
    '/images/LOGO-W.png',
    '/images/logo.png',
    '/images/PIC01.png',
]

if('serviceWorker' in navigator){
    self.addEventListener('load', ()=>{
        navigator.serviceWorker.register('sw.js')
        .then((reg)=>{
            console.log(`Service worker registered on ${reg.scope}`)
        }).catch((err)=>{
            console.error(err);
        })
    })
}

self.addEventListener('install', (e)=>{
    e.waitUntil(
        // open new cache
        caches.open(cacheName)
        .then((cache)=>{
            // add urls to cache
            return cache.addAll(urlsToCache);
        })
    )
})