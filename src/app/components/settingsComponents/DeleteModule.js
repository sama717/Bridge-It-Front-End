"use client";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export default function DeleteModule(){
    return(
<div>
  <b>Delete Account</b>
  <div className="ms-2 mt-2 mb-3" style={{color:"gray",fontSize:"14px"}}>Deleting your account will remove all your information from out database . This cannot be undo</div>
  <button style={{
      width: "100%",
      backgroundColor: "lightpink",
      height: "40px",
      border: "none",
      borderRadius: "6px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <FontAwesomeIcon icon={faTrash} style={{ color:"red", marginRight: "8px" }} />
      <span className='text-danger'>Delete Account</span>
    </button>
</div>
    );
};