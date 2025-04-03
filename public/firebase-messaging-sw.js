importScripts("https://www.gstatic.com/firebasejs/9.17.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyD7ErzzAJ3h5KobTyzA4odXpvme2sc9Cfs",
  authDomain: "bridgeit-offcial.firebaseapp.com",
  databaseURL:
    "https://bridgeit-offcial-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bridgeit-offcial",
  storageBucket: "bridgeit-offcial.firebasestorage.app",
  messagingSenderId: "987633220641",
  appId: "1:987633220641:web:9fa20ed114114912b57760",
  measurementId: "G-MHTGV3ECD1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  });
});
