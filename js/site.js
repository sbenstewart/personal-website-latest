const publicKey = 'BNhxhvXamm6Agl8V03vfHyp86ggCvgSBDWLuDtGMwez_EMrH0IG5A1xZpI4zFBmT-L9uCXW0rGAtLMJEpTGMTjM';

navigator.serviceWorker && navigator.serviceWorker.register('./js/sw.js').then(function(registration) {
  console.log('Excellent, registered with scope: ', registration.scope);
});

navigator.serviceWorker && navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
  serviceWorkerRegistration.pushManager.getSubscription()
    .then(function(subscription) {
      // subscription will be null or a PushSubscription
      if (subscription) {
        console.info('Got existing', subscription);
        window.subscription = subscription;
        return;  // got one, yay
      }

      const applicationServerKey = urlB64ToUint8Array(publicKey);
      serviceWorkerRegistration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey,
      })
        .then(function(subscription) {
          console.info('Newly subscribed to push!', subscription);
          window.subscription = subscription;
        });
    });
});
