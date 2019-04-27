importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('sbenstewart').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       'fonts/icomoon/style.css',
       'css/bootstrap.min.css',
       'css/magnific-popup.css',
       'css/jquery-ui.css',
       'css/owl.carousel.min.css',
       'css/owl.theme.default.min.css',
       'css/bootstrap-datepicker.css',
       'fonts/flaticon/font/flaticon.css',
       'css/aos.css',
       'css/style.css'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});
