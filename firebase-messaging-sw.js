
importScripts("https://www.gstatic.com/firebasejs/13.3.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/13.3.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDhigYBT68Dv4pdboLzVxnLVMK6VUFFWY",
  authDomain: "number-guss.firebaseapp.com",
  projectId: "number-guss",
  storageBucket: "number-guss.firebasestorage.app",
  messagingSenderId: "471501648483",
  appId: "1:471501648483:web:3cbe55c24fd4e0c92b3e56",
  measurementId: "G-4FYB07JSC5"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Number Guess";
  const options = {
    body: payload.notification?.body || "You have a new notification!",
    data: { url: "./home.html" }
  };

  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = new URL("./home.html", self.location.href).href;

  event.waitUntil(
    clients.openWindow(target)
  );
});
                                     
