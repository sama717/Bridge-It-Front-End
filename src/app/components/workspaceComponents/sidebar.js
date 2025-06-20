/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faLayerGroup,
  faFileAlt,
  faComments,
  faCalendarAlt,
  faChartBar,
  faUsers,
  faLifeRing,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import './css/Sidebar.css'

const Sidebar = () => (
  <div className="sidebar">
    <Nav className="flex-column p-3">

    <Nav.Link style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="nav-link">
        <img src='workspacelogo.png' style={{width:"60px",height:"40px"}}/>
      </Nav.Link>
      <hr className='text-light'/>
      <Nav.Link href="/" className="nav-link">
        <FontAwesomeIcon icon={faHome} className="nav-icon" />
        Home
      </Nav.Link>
      <Nav.Link href="/workspaces" className="nav-link active">
        <FontAwesomeIcon icon={faLayerGroup} className="nav-icon" />
        Work Spaces
      </Nav.Link>
      <Nav.Link href="/templates" className="nav-link">
        <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
        Templates
      </Nav.Link>
      <Nav.Link href="/chat" className="nav-link">
        <FontAwesomeIcon icon={faComments} className="nav-icon" />
        Chat
      </Nav.Link>
      <Nav.Link href="/files" className="nav-link">
        <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
        Files
      </Nav.Link>
      <Nav.Link href="/calendar" className="nav-link">
        <FontAwesomeIcon icon={faCalendarAlt} className="nav-icon" />
        Calendar
      </Nav.Link>
      <Nav.Link href="/analytics" className="nav-link">
        <FontAwesomeIcon icon={faChartBar} className="nav-icon" />
        Analytics
      </Nav.Link>
      <Nav.Link href="/community" className="nav-link">
        <FontAwesomeIcon icon={faUsers} className="nav-icon" />
        Community
      </Nav.Link>
      <Nav.Link href="/support" className="nav-link">
        <FontAwesomeIcon icon={faLifeRing} className="nav-icon" />
        Support
      </Nav.Link>
      <Nav.Link href="/settings" className="nav-link">
        <FontAwesomeIcon icon={faCog} className="nav-icon" />
        Settings
      </Nav.Link>
      <Nav.Link href="/" className="nav-link logout-link">
        <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon logout" />
        Log out
      </Nav.Link>
    </Nav>
  </div>
);

export default Sidebar;
