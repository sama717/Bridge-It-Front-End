"use client"; // Ensure this is the first line
// import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/page'; // Adjust this path according to your structure

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
