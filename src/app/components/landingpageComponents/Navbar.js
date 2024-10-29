'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from 'react';
import '../css/nav.css';
import '../css/responsive.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path ? 'active-link' : '';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <nav className='navbar navbar-expand-lg p-2 container-fluid'>
      <div className='container-fluid'>
        <Link href='#' className='navbar-brand'>
          {/* First Logo */}
          <img className='logo-1 m-3' src="/bridge-it-logo.png" alt="Logo"/>
          {/* Second Logo*/}
          <img className='logo-2 m-3 my-4' src="/bridge-it-logo-2.png" alt="Small Logo"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="gradient-icon">
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav me-auto mb-4 mb-lg-0 ms-2'>
            <li className={`nav-item ${isActive('/')}`}>
              <Link className='nav-link' href="/">Home</Link>
            </li>
            <li className={`nav-item ${isActive('/features')}`}>
              <Link className='nav-link' href="/features">Features</Link>
            </li>
            <li className={`nav-item ${isActive('/plans-pricing')}`}>
              <Link className='nav-link' href="/plans-pricing">Plans & Pricing</Link>
            </li>
            <li className={`nav-item ${isActive('/about')}`}>
              <Link className='nav-link' href="/about">About Us</Link>
            </li>
            <li className={`nav-item ${isActive('/companies-schools')}`}>
              <Link className='nav-link comp-school' href="/companies-schools">Companies/Schools</Link>
            </li>
          </ul>
          <div className='access-buttons'>
            <Link className='en-link' href='/'>
              <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#4b5563">
                <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/>
              </svg>
              <span className='en-span'>EN</span>
            </Link>
            <Link href="/login"><button className='btn btn-light text-primary login-btn fw-bold'>Log In</button></Link>
            <button className='btn btn-primary start-btn fw-bold'>Start for free</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
