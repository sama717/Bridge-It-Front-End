// /src/app/components/dashboardComponents/Layout.js
'use client';

import Sidebar from './Sidebar';
import Nav from './Nav';
import '../../dashboard/css/dashboard.css';
import withAuth from '../withAuth'; 

const Layout = ({ children }) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <Nav />
        <div class="container p-4">
            {children}
        </div>
      </main>
    </div>
  );
};
export default withAuth(Layout); 