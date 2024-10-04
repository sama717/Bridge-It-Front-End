
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

      
          <p className='fw-bold fs-6' style={{marginTop:"120px"}}>You forgot your password</p>  
          <p style={{ fontSize: ".9rem", fontWeight: "bold", color: "rgba(128, 128, 128,.9)" }}>To get you back to your account write your email to send you the link </p>
          <div style={{marginBottom:"30px", marginTop:"30px"}}>
      <span  style={{ color: "#000", fontWeight: "bold" ,fontSize: ".9rem",marginBottom:"70px" }}>Did you remember your password? </span>
         <Link href="./login" style={{ textDecoration: "underline", fontWeight: "bold", color: "#0b56a4",fontSize: ".9rem" }}>
          Log in
        </Link>
      </div>
        <div className="form-group email">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
         
      </div>
     
      <Link href="./forgetPassword">
      <Button type="submit" className="mt-3 submit">
        Next
      </Button></Link>
     
      <div style={{marginBottom:"30px"}}>
      <span  style={{ color: "rgba(0,0,0,.8)", fontWeight: "bold" ,fontSize: ".8rem",marginBottom:"70px" }}>Are you facing any problem? </span>
         <Link href="#" style={{ textDecoration: "underline", fontWeight: "bold", color: "#0b56a4",fontSize: ".8rem" }}>
          Contact support
        </Link>
      </div>
        </form>

        <img src="copyrights.png" style={{height:"12px",marginTop:"70px",marginLeft:"-40px"}}/>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.overlay}>
            <div className={styles.overlayText}>
            <div className={styles.logoContainer}>
              <img className={styles.logo} src='projectlogo.png' alt='Logo' />
            </div>
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
