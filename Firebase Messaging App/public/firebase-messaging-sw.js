importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBTl530cu5l1llwHwcZx_4OskfJhydWESw",
  authDomain: "push-notification-51dbb.firebaseapp.com",
  projectId: "push-notification-51dbb",
  storageBucket: "push-notification-51dbb.firebasestorage.app",
  messagingSenderId: "456492318409",
  appId: "1:456492318409:web:c9859842b4e8237cc45718",
  measurementId: "G-7WRHBCZRGJ"
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
