/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
// src/app/login/page.js
"use client";
import LoginForm from '../components/authCopmonets/LoginForm';
import styles from '../page.module.css';
export default function LoginPage() {
    return (
        <div className='container'>
          <div className={styles.gridContainer}>
            <div className={styles.formContainer}>
              <div className={styles.formConytent}>
              <LoginForm />
              </div>
            </div>
            <div className={styles.imageContainer}>
              <div className={styles.overlay}>
                <div className={styles.logoContainer}>
                  <img className={styles.logo} src='projectlogo.png' alt='Logo' />
                </div>
                <div className={styles.overlayText}>
                  <div style={{display:"block"}}>
                    <div className='fw-bold ms-3 fs-3'> Welcome back</div>
                    <div className='fs-6 ms-3'>Our mission is to simplify the management of university</div>
                    <div className='fs-6 ms-3'>projects by providing an intuitive, all-in-one platform.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
