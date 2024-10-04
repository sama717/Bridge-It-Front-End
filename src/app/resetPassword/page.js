
"use client";
import styles from '../page.module.css';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
export default function ForgetPassword() {
const [formData, setFormData] = useState({
    email: ''
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json(); 

      if (response.ok) {
        setSuccessMessage('Registration successful! Please log in.');
      } else {
        setErrorMessage(data.message || 'Registration failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='container'>
      <div className={styles.gridContainer}>
        <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>

      
          <p className='fw-bold fs-6' style={{marginTop:"120px"}}>Create a new password</p>  
          <p style={{ fontSize: "1rem", fontWeight: "bold", color: "rgba(128, 128, 128,.9)",marginTop:"-10px",marginBottom:"40px" }}>Return to your journey </p>
  
          <div className="form-group pass">
        <label style={{fontSize:".95rem"}} >New password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Please enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <p style={{fontSize:"9px",color:"#787e8a",marginTop:"-15px"}}>Use 8 or more characters with a compination of letters ,numbers and symbols.</p>
     
 
      <div className="form-group pass">
        <label style={{fontSize:".95rem",marginTop:"30px"}} >Confirm password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Please enter your password again"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
     
      <Link href="./passwordverfication">
      <Button type="submit" className="mt-3 submit">
        Reset password
      </Button></Link>
        </form>
        <img src="copyrights.png" style={{height:"12px",marginTop:"70px",marginLeft:"-40px"}}/>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.overlay}>
          <div className={styles.logoContainer}>
              <img className={styles.logo} src='projectlogo.png' alt='Logo' />
            </div>
            <div className={styles.overlayText}>
              <div style={{display:"block"}}>
                <div className='fw-bold ms-3 fs-3'> Welcome back</div>
                <div className='fs-6 ms-3'>our mission is to simplify the management of university</div>
                <div className='fs-6 ms-3'>projects by providing an intuitive, all-in-one platform.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
