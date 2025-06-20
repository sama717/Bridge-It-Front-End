/* eslint-disable @next/next/no-img-element */
"use client";
import Link from 'next/link';
import { IoBusinessOutline } from 'react-icons/io5';
import { FaGraduationCap } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import styles from './page.module.css'; 

export default function Home() {
  const [selectedAccount, setSelectedAccount] = useState(''); 
  const router = useRouter(); 

  const handleCompanyClick = () => {
    setSelectedAccount('company');
  };

  const handleSchoolClick = () => {
    setSelectedAccount('school');
  };

  const handleNextClick = () => {
    if (selectedAccount === 'school') {
      router.push('/signup_school2'); 
    } else if (selectedAccount === 'company') {
      router.push('/signup_company2'); 
    } else {
      console.log("No account type selected");
    }
  };

  return (
    <div className='container'>
      <div className={styles.gridContainer}>
        <div className={styles.formContainer}>
          <div className={styles.formConytent}>
            <form style={{ width: "100%" }}>
              <h5 style={{marginTop:"60px"}} className="fw-bold text-dark">New account</h5>
              <p style={{fontWeight:"bolder", color:"#4b5563", marginBottom:"30px",fontSize:"14px"}}>Start your journey from here</p>
              <p className="fw-bold text-dark" style={{fontSize:"14px"}}>
                Already have an account?{' '}
                <Link href="/login" style={{textDecoration:"underline",fontWeight:"bold",color:"#0b56a4"}}>
                  Log in
                </Link>
              </p>
              <p style={{color:"#374151"}}>Account Type</p>
              <div className={styles.iconContainer}>
                <div 
                  className={`${styles.icon} ${selectedAccount === 'company' ? styles.selectedIcon : ''}`} 
                  onClick={handleCompanyClick}
                >
                  <IoBusinessOutline size={60} color="#0652a2" />
                  <p style={{ marginTop: '8px', color:"#565f6d", fontWeight:"500" }}>Company</p>
                  {selectedAccount === 'company' && <div className={styles.checkmark}>✓</div>}
                </div>
                <div 
                  className={`${styles.icon} ${selectedAccount === 'school' ? styles.selectedIcon : ''}`} 
                  onClick={handleSchoolClick}
                >
                  <FaGraduationCap size={60} color="#0652a2" />
                  <p style={{ marginTop: '8px', color:"#565f6d", fontWeight:"500" }}>School</p>
                  {selectedAccount === 'school' && <div className={styles.checkmark}>✓</div>}
                </div>
              </div>
              <button
                type="button"
                onClick={handleNextClick}
                className={styles.button}
                disabled={!selectedAccount}
              >
                Next
              </button>
              <Link href="/signup" passHref>
                <span className={styles.registerLink}>
                  Register as Regular User
                </span>
              </Link>
              <div className="copyright">
                All Copyrights go to Bridge It © 2024
              </div> 
            </form>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.overlay}>
            <div className={styles.logoContainer}>
              <img className={styles.logo} src='projectlogo.png' alt='Logo' />
            </div>
            <div className={styles.overlayText}>
              <div style={{display:"block"}}>
                <div className='fw-bold ms-3 fs-3'> Start your journey with us!</div>
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
