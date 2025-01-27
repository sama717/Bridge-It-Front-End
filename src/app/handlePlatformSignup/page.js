"use client";
import styles from '../page.module.css'; 
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HandlePlatformSignup() {
  const router = useRouter(); 
  const [formData, setFormData] = useState({
    password: ''
  });
  // const [error, setError] = useState(null);  

  // useEffect(() => {
  //   const queryError = new URLSearchParams(window.location.search).get('error');
  //   if (queryError === "NeedToEnterPassword") {
  //     setError('You need to enter your password to complete the registration.');
  //   }
  // }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered password:", formData.password);
    router.push('/dashbord');  
  };

  return (
    <div className='container'>
      <div className={styles.gridContainer}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            {/* {error && <p className='fw-bold fs-6' style={{ marginTop: "120px", color: "red" }}>{error}</p>} */}
            <p className='fw-bold fs-6' style={{ marginTop: "120px" }}>You already have an account</p>
            <p style={{ fontSize: ".7rem", fontWeight: "bold", color: "rgba(128, 128, 128,.9)" }}>
              To get you back to your account, write your password to log in.
            </p>
            <div style={{ marginBottom: "30px", marginTop: "30px" }}>
              <span style={{ color: "#000", fontWeight: "bold", fontSize: ".9rem", marginBottom: "70px" }}>Did you remember your password? </span>
              <Link href="./login" style={{ textDecoration: "underline", fontWeight: "bold", color: "#0b56a4", fontSize: ".9rem" }}>
                Log in
              </Link>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
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
            <div style={{ display: "flex",height: "100px", justifyContent: "flex-start",alignItems: "flex-end" }}>
                     <Image src="copyrights.png" style={{ height: "12px"}} alt='copyright'/>
                    </div>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.overlay}>
            <div className={styles.overlayText}>
              <div className={styles.logoContainer}>
                <Image className={styles.logo} src='/projectlogo.png' alt='Logo' />
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
