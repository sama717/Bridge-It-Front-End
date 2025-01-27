"use client"; 
import '../app/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/page'; 
import useInternetStatus from '../app/hooks/useInternetStatus';
import NoInternetConnection from '../app/components/NoInternetConnection';

export default function RootLayout({ children }) {
  const isOnline = useInternetStatus();

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {isOnline ? children : <NoInternetConnection />}
        </Provider>
      </body>
    </html>
  );
}
