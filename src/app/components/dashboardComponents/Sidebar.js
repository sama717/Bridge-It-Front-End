/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Sidebar = () =>{
    
const pathname = usePathname();

const isActive = (path) => pathname === path ? 'active-link' : '';

useEffect(() => {
  const sideNav = document.querySelector('.side-nav');
  const collapseButton = document.createElement('button');
  collapseButton.className = 'collapse-button';
  collapseButton.innerHTML = '<i class="fas fa-angle-left"></i>';

  // Append the collapse button to the sidebar
  sideNav.appendChild(collapseButton);

  // Toggle sidebar on button click
  const toggleSidebar = () => {
    sideNav.classList.toggle('collapsed');
    collapseButton.innerHTML = sideNav.classList.contains('collapsed')
      ? '<i class="fas fa-angle-right"></i>'
      : '<i class="fas fa-angle-left"></i>';
  };

  collapseButton.addEventListener('click', toggleSidebar);

  // Auto-collapse on window resize
  const handleResize = () => {
    if (window.innerWidth <= 750) {
      sideNav.classList.add('collapsed');
      collapseButton.innerHTML = '<i class="fas fa-angle-right"></i>';
    } else {
      sideNav.classList.remove('collapsed');
      collapseButton.innerHTML = '<i class="fas fa-angle-left"></i>';
    }
  };

  handleResize(); // Initial check
  window.addEventListener('resize', handleResize);

  // Clean up event listeners on unmount
  return () => {
    collapseButton.removeEventListener('click', toggleSidebar);
    window.removeEventListener('resize', handleResize);
  };
}, []);


return(
<aside className="side-nav">
        <div>
          <div className='logo'>
            <img src='/dashboard-logo.png' alt="Dashboard Logo" />
          </div>
          <div className='aside-links'>
          <ul>
            <li><Link href="/dashboard/home" className={isActive('/dashboard/home')}><i className="fas fa-home"></i><span> Home</span></Link></li>
            <li><Link href='/dashboard/workspace' className={isActive('/dashboard/workspace')}><i class="fa-solid fa-list"></i><span> Work Spaces</span></Link></li>
            <li><Link href='/templates' className={isActive('/templates')}><i class="fa-solid fa-swatchbook"></i><span> Templates</span></Link></li>
            <li><Link href='/dashboard/chat' className={isActive('/dashboard/chat')}><i className="fas fa-comments"></i><span> Chat</span></Link></li>
            <li><Link href='/dashboard/Files' className={isActive('/dashboard/Files')}><i className="fas fa-file-alt"></i><span> Files</span></Link></li>
            <li><Link href='/dashboard/calender' className={isActive('/calendar')}><i className="fas fa-calendar"></i><span> Calendar</span></Link></li>
            <li><Link href='/dashboard/analytics' className={isActive('/analytics')}><i className="fas fa-chart-line"></i><span> Analytics</span></Link></li>
          </ul>
        </div>
        <div className='aside-block'>
          <Link href='/dashboard/community' className={isActive('/community')}><i className="fas fa-users"></i><span> Community</span></Link>
        </div>
        <div className='aside-block'>
          <Link href='/dashboard/support' className={isActive('/dashboard/support')}><i className="fas fa-headset"></i> <span>Support</span></Link>
        </div>
        <div className='aside-block'>
          <Link href='/dashboard/settings' className={isActive('/dashboard/settings')}><i className="fas fa-cog"></i> <span>Settings</span></Link>
        </div>
        </div>
        {/* <div className={`aside-logout ${isActive('/logout')}`}  onClick={() => {
        localStorage.removeItem('token');
       window.location.href = '/'; 
      }}>
  <i className="fas fa-sign-out-alt" ></i>
  <span>Logout</span>
</div> */}
<div className='aside-logout'>
          <Link href='/' className={isActive('/logout')}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </Link>
        </div>

      </aside>


);

}

export default Sidebar;