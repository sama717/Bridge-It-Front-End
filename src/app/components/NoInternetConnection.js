import React from 'react';
import '../components/css/internet.css'
import '../components/css/responsive.css'
import Image from 'next/image';

const NoInternetConnection = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className='internet-section'>
      <div class="internet-block">
        <div className='internet-left'>
          <Image src='/bridge-it-logo.png' className='mb-4' alt='Logo'/>
          <h1 className='mb-3'>There is no Internet connection</h1>
          <p>Please check your network and try again.</p>
          <div className='mt-5'>
            <button onClick={handleRefresh}>REFRESH THE PAGE</button>
          </div>
        </div>
        <div className='internet-right'>
          <Image src='/dino-img.png' alt='Dino'/>
        </div>
      </div>
    </div>
  );
};

export default NoInternetConnection;
