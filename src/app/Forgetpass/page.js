/* eslint-disable @next/next/no-img-element */
"use client";
import styles from '../page.module.css'; 
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useDispatch } from 'react-redux'; 
import { setEmail } from '../store/authSlice';
import { useRouter } from 'next/navigation';
export default function ForgetPassword() {
  const dispatch = useDispatch(); 
  const router = useRouter(); 
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setEmail(formData.email)); 
    router.push('/forgetPassword'); 
  };

  return (
    <div className='container'>
      <div className={styles.gridContainer}>
        <div className={styles.formContainer}>
        <div className={styles.formConytent}>
          <form onSubmit={handleSubmit}>
            <p className='fw-bold fs-6 text-dark ' style={{ marginTop: "120px" }}>You forgot your password</p>
            <p  style={{ fontSize: ".7rem", fontWeight: "bold", color: "rgba(128, 128, 128,.9)" }}>
              To get you back to your account write your
            </p>
            <p  style={{ fontSize: ".7rem", fontWeight: "bold", color: "rgba(128, 128, 128,.9)",marginTop:"-10px" }}> email to send you the link</p>
            <div style={{ marginBottom: "30px", marginTop: "10px" }}>
              <span style={{ color: "#000", fontWeight: "bold", fontSize: ".7rem", marginBottom: "70px" }}>Did you remember your password? </span>
              <Link href="./login" style={{ textDecoration: "underline", fontWeight: "bold", color: "#0b56a4", fontSize: ".9rem" }}>
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
            <Button type="submit" className="mt-3 submit">
              Next
            </Button>

            <div style={{ marginBottom: "30px" }}>
              <span style={{ color: "rgba(0,0,0,.8)", fontWeight: "bold", fontSize: ".8rem", marginBottom: "70px" }}>Are you facing any problem? </span>
              <Link href="#" style={{ textDecoration: "underline", fontWeight: "bold", color: "#0b56a4", fontSize: ".8rem" }}>
                Contact support
              </Link>
            </div>
           
            <div className="copyright" >
          All Copyrights go to Bridge It © 2024
        </div>
                    
          </form>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.overlay}>
            <div className={styles.overlayText}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src='/projectlogo.png' alt='Logo' />
              </div>
              <div style={{ display: "block" }}>
                <div className='fw-bold ms-3 fs-3'>Welcome back</div>
                <div className='fs-6 ms-3'>Our mission is to simplify the management of university projects by providing an intuitive, all-in-one platform.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
