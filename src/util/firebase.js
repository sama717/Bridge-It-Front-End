// lib/firebase-config.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

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

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging };
