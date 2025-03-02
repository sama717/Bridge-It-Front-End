"use client";
import "../app/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./globals.css";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store/page";
import useInternetStatus from "../app/hooks/useInternetStatus";
import NoInternetConnection from "../app/components/NoInternetConnection";
import { Open_Sans } from "next/font/google";
// const font = Open_Sans({
//   weight: ["300", "400", "500", "600", "700", "800"],
//   subsets: ["latin"],
// });
export default function RootLayout({ children }) {
  const isOnline = useInternetStatus();

  return (
    <html lang="en">
      <body>
        {/*className={font.className}*/}
        <Provider store={store}>
          {isOnline ? children : <NoInternetConnection />}
        </Provider>
      </body>
    </html>
  );
}
