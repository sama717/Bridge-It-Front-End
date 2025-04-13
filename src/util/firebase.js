// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyD7ErzzAJ3h5KobTyzA4odXpvme2sc9Cfs",
//   authDomain: "bridgeit-offcial.firebaseapp.com",
//   databaseURL:
//     "https://bridgeit-offcial-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "bridgeit-offcial",
//   storageBucket: "bridgeit-offcial.firebasestorage.app",
//   messagingSenderId: "987633220641",
//   appId: "1:987633220641:web:9fa20ed114114912b57760",
//   measurementId: "G-MHTGV3ECD1",
// };

// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// // Register the service worker
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/firebase-messaging-sw.js")
//     .then((registration) => {
//       console.log("Service Worker registered:", registration);
//     })
//     .catch((error) => {
//       console.error("Service Worker registration failed:", error);
//     });
// }

// // Request device token
// export async function requestDeviceToken() {
//   try {
//     const permission = await Notification.requestPermission();
//     if (permission === "granted") {
//       const token = await getToken(messaging, {
//         vapidKey: "BDaGjSXqire95Sz8kVnKrW35IbtnZGKBMiic5qXktehF6iF0gg-31hd7OWedzXXddkQ-MjEFt1o23xExQv3AQ-s",
//       });
//       console.log("Device Token:", token);
//       return token;
//     } else {
//       console.error("Notification permission denied");
//     }
//   } catch (error) {
//     console.error("Error getting device token:", error);
//   }
// }

// export { messaging };
// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { 
//   getAuth, 
//   GoogleAuthProvider, 
//   GithubAuthProvider, 
//   FacebookAuthProvider, 
//   signInWithPopup 
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyD7ErzzAJ3h5KobTyzA4odXpvme2sc9Cfs",
//   authDomain: "bridgeit-offcial.firebaseapp.com",
//   databaseURL: "https://bridgeit-offcial-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "bridgeit-offcial",
//   // storageBucket: "bridgeit-offcial.firebasestorage.app",
//   storageBucket: "bridgeit-offcial.appspot.com",

//   messagingSenderId: "987633220641",
//   appId: "1:987633220641:web:9fa20ed114114912b57760",
//   measurementId: "G-MHTGV3ECD1",
// };

// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);
// const auth = getAuth(app);

// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

// // Register the service worker for Firebase Cloud Messaging
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/firebase-messaging-sw.js")
//     .then((registration) => {
//       console.log("Service Worker registered:", registration);
//     })
//     .catch((error) => {
//       console.error("Service Worker registration failed:", error);
//     });
// }

// // Request device token for push notifications
// export async function requestDeviceToken() {
//   try {
//     const permission = await Notification.requestPermission();
//     if (permission === "granted") {
//       const token = await getToken(messaging, {
//         vapidKey: "BDaGjSXqire95Sz8kVnKrW35IbtnZGKBMiic5qXktehF6iF0gg-31hd7OWedzXXddkQ-MjEFt1o23xExQv3AQ-s",
//       });
//       console.log("Device Token:", token);
//       return token;
//     } else {
//       console.error("Notification permission denied");
//     }
//   } catch (error) {
//     console.error("Error getting device token:", error);
//   }
// }

// // Function to handle OAuth login for Google, GitHub, and Facebook
// export const handleOAuthLogin = async (provider) => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;
    
//     console.log("OAuth Login Successful:", user);

//     const token = await user.getIdToken(); // Get Firebase ID Token

//     const backendResponse = await fetch('https://bridge-it-backend-main-tfxagd.laravel.cloud/api/social-login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ 
//         email: user.email, 
//         name: user.displayName, 
//         provider: provider.providerId, 
//         token 
//       }),
//     });

//     const data = await backendResponse.json();

//     if (!backendResponse.ok) {
//       throw new Error(data.message || "Social login failed.");
//     }

//     console.log("Login successful. Token:", data.token);
//     localStorage.setItem('token', data.token);
//     localStorage.setItem('email', data.user.email);
//   } catch (error) {
//     console.error("OAuth Login Error:", error.message);
//   }
// };

// export { auth, googleProvider, githubProvider, facebookProvider, messaging };

// firebase.js

import { initializeApp, getApps } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD7ErzzAJ3h5KobTyzA4odXpvme2sc9Cfs",
  authDomain: "bridgeit-offcial.firebaseapp.com",
  databaseURL: "https://bridgeit-offcial-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bridgeit-offcial",
  // storageBucket: "bridgeit-offcial.appspot.com",
  storageBucket: "bridgeit-offcial.firebasestorage.app",
  messagingSenderId: "987633220641",
  appId: "1:987633220641:web:9fa20ed114114912b57760",
  measurementId: "G-MHTGV3ECD1",
};

// ✅ Initialize App only on client-side
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// ✅ Providers
const auth = typeof window !== "undefined" ? getAuth(app) : null;
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// ✅ Request device token only on client
export async function requestDeviceToken() {
  if (typeof window === "undefined") return;

  try {
    const messaging = getMessaging(app);

    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BDaGjSXqire95Sz8kVnKrW35IbtnZGKBMiic5qXktehF6iF0gg-31hd7OWedzXXddkQ-MjEFt1o23xExQv3AQ-s",
      });
      console.log("Device Token:", token);
      return token;
    } else {
      console.warn("Notification permission denied");
    }
  } catch (error) {
    console.error("Error getting device token:", error);
  }
}

// ✅ Safe OAuth Login Handler
export const handleOAuthLogin = async (provider) => {
  if (typeof window === "undefined") return;

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log("OAuth Login Successful:", user);
    const token = await user.getIdToken();

    const response = await fetch("https://bridge-it-backend-main-tfxagd.laravel.cloud/api/social-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        name: user.displayName,
        provider: provider.providerId,
        token,
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Social login failed");

    console.log("Backend Login Successful:", data);
    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.user.email);
  } catch (error) {
    console.error("OAuth Login Error:", error.message);
  }
};

// ✅ Register Firebase Service Worker (client-only)
export const registerServiceWorker = async () => {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

  try {
    const registration = await navigator.serviceWorker.register("/firebase-messaging-sw.js");
    console.log("Service Worker registered:", registration);
  } catch (error) {
    console.error("Service Worker registration failed:", error);
  }
};

export {
  auth,
  googleProvider,
  githubProvider,
  facebookProvider,
};
