/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import './invitationForm.css';
const Invitation = () => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
      navigator.clipboard.writeText("Text to copy").then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 4000); 
      });
    };
  
  return (
    <div className='forrm'>
        <div className='imge'>
        <img src='workspaceConfirmation.png' style={{width:"180px",height:"160px",marginTop:"20px"}}/>
        </div>
        < div className='text-dark fw-bold text-center mt-2 title' style={{wordSpacing:"6px"}}> Your work space has created successfully</div>
        <div className='mt-3 p2' >Thank you for your effort and time, Thanks for choosing us and our services </div>
        <div className="invitee" >
        <label style={{color:"#6B7280",fontSize:"13px"}}>Invite your team members</label>
        <div className="d-flex align-items-center gap-2 mt-3">
         <input type="email" className="form-control" placeholder="Enter your team members’ email" />
        <button style={{fontSize:"12px",boxShadow:"0 4px 10px #00000026, 0 6px 15px #FFFFFF40"}} className="w-auto">Invite</button>
        </div>
        </div>

<div className="responsive-div">
  <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }}></div>
  <span style={{ margin: '0 10px', whiteSpace: 'nowrap', color: "#6B7280" }}>or With</span>
  <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }}></div>
</div>


    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <span style={{color: copied ? "#15803D" : "#004EA0",}}>
      {copied ? "Copied" : "Copy Invitation Link"}
      </span>
      {!copied ? (
        <FontAwesomeIcon
          icon={faClone}
          className="ms-2 "
          style={{ cursor: "pointer" ,color:"#004EA0"}}
          onClick={handleCopy}
        />
      ) : (
      
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="ms-2 text-success"
        />
      )}
    </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <button className="start">
        Get Started  <span className="text-light ">→</span>
    </button>
    
    </div>
    <div style={{color:"#4B5563",textAlign:"center",fontSize:"12px",marginTop:"10px"}}>If you face any problem, Please contact us by <u>email</u> </div>
    
    </div>
  );
};

export default Invitation ;
