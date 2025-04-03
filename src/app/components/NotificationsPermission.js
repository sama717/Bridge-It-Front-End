import { useEffect } from "react";
import { messaging } from "../lib/firebase-config";
import { getToken, onMessage } from "firebase/messaging";

const NotificationPermission = () => {
  useEffect(() => {
    // Request notification permission
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          const token = await getToken(messaging, { vapidKey: "YOUR_VAPID_KEY" });
          console.log("FCM Token:", token);
        } else {
          console.log("Notification permission denied.");
        }
      } catch (error) {
        console.error("Error requesting permission:", error);
      }
    };

    // Listen for incoming messages (foreground)
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      // Handle the incoming message (e.g., show a notification)
      alert(payload.notification.body); // Example action
    });

    requestPermission();
  }, []);

  return <div>Notification Permission Status</div>;
};

export default NotificationPermission;
