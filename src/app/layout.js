"use client"; 
import '../app/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/page'; 

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

