// components/InternetWrapper.jsx
"use client";

import React from 'react';
import useInternetStatus from '../../app/hooks/useInternetStatus'; 
import NoInternetConnection from '../components/NoInternetConnection'; 

const InternetWrapper = ({ children }) => {
  const isOnline = useInternetStatus();

  if (!isOnline) {
    return <NoInternetConnection />;
  }

  return <>{children}</>;
};

export default InternetWrapper;
