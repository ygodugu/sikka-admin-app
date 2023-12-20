self.addEventListener('push', function(event) {
  const data = event.data.json();

  const options = {
    body: data.body,
    icon: './favicon.png',
  };

  event.waitUntil(
    self.registration.showNotification('Cikka', options)
  );
});
