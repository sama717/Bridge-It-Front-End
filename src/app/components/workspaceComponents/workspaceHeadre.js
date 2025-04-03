
"use client";
import { Navbar, Form, FormControl } from 'react-bootstrap';
import './css/workspaceHeader.css'; 
const Header = () => (
  <Navbar bg="white" className="p-3 d-flex justify-content-between">
    <div className="d-flex flex-column align-items-center ">
      <div style={{fontSize:"10px",color:'#6B7280'}}>Welcome to bridge.it</div>
      <div style={{color:"#000000D9",fontSize:"12px"}}>userName</div>
    </div>
    <Form inline className="mx-3" style={{ flexBasis: "200px", flexGrow: 1, maxWidth: "400px" }}>
  <FormControl
    style={{ borderRadius: "20px", width: "100%" }}
    type="text"
    placeholder="Search or jump to..."
    className="me-sm-2"
  />
</Form>
    <div className="d-flex align-items-center">
      <span style={{backgroundColor:"#F5FAFF",fontSize:"12px",padding:"8px"}}>Work Space Name</span>
    </div>
  </Navbar>
);

export default Header;
