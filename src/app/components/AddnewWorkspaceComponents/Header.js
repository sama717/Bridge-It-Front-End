/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <button className="back-button">&lt;</button>
      <h4 className="title">Add New Work Space</h4>
      <div className="icon">
        <img className='logoimgaeaddnew' src='addnewLogo.png' style={{width:"60px"}}/>
      </div>
    </header>
  );
};

export default Header;
