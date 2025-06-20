/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';
import '../components/css/internet.css'
import '../components/css/responsive.css'

const NoInternetConnection = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className='internet-section'>
      <div class="internet-block">
        <div className='internet-left'>
          <img src='/bridge-it-logo.png' className='mb-4'/>
          <h1 className='mb-3'>There is no Internet connection</h1>
          <p>Please check your network and try again.</p>
          <div className='mt-5'>
            <button onClick={handleRefresh}>REFRESH THE PAGE</button>
          </div>
        </div>
        <div className='internet-right'>
          <img src='/dino-img.png'/>
        </div>
      </div>
    </div>
  );
};

export default NoInternetConnection;
