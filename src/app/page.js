"use client";
// @refresh reset
import Home from "../app/signup/page";
import LandingPage from "./landingpage/page";
import NotificationPermission from "../app/components/NotificationsPermission";
export default function HomePage() {
  return (
    <div>
      {/* <Home/> */}
      <LandingPage />
      <NotificationPermission />
    </div>
  );
}
