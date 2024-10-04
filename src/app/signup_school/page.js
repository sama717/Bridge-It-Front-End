
"use client";
import Link from 'next/link';
import { IoBusinessOutline } from 'react-icons/io5';
import { FaGraduationCap } from 'react-icons/fa';
import { useState } from 'react';
import styles from './page.module.css'; 
import { Button } from 'react-bootstrap';

export default function Home() {
  const [isCapSelected, setIsCapSelected] = useState(false);

  const handleGraduationCapClick = () => {
    setIsCapSelected(true);
  };

  return (
    <div className='container'>
      <div className={styles.gridContainer}>
        <div className={styles.formContainer}>
          <form>
            <h4 style={{marginTop:"50px"}} className="fw-bold">New account</h4>
            <p style={{fontWeight:"bolder", color:"#4b5563", marginBottom:"30px"}}>
              Start your journey from here
            </p>
            <p className="fw-bold text-dark">
        Already have an account?{' '}
        <Link href="#login"style={{textDecoration:"underline",fontWeight:"bold",color:"#0b56a4"}}>
              Log in
            </Link>
      </p>
            <p style={{fontWeight:"bolder"}}>Account Type</p>
            <div className={styles.iconContainer} style={{ columnGap: "20%", marginTop: "30px", display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ textAlign: 'center' }}>
                <IoBusinessOutline size={80} color="#0652a2" />
                <p style={{ marginTop: '8px', color:"#565f6d", fontWeight:"bolder" }}>Company</p>
              </div>

              <div style={{ textAlign: 'center', cursor: 'pointer' }} onClick={handleGraduationCapClick}>
                <FaGraduationCap size={80} color={isCapSelected ? "#0652a2" : '#4b5563'} />
                <p style={{ marginTop: '8px', color:"#565f6d", fontWeight:"bolder" }}>School</p>
              </div>
            </div>

            <div>
             
              <Link href={isCapSelected ? "./signup_school2" : "#"}>
                <Button
                  style={{
                    backgroundColor: isCapSelected ? "#0652a2":"#0652a2",
                    width: "100%",
                    fontWeight: "bolder",
                    cursor: isCapSelected ? "pointer" : "not-allowed"
                  }}
                >
                  Next
                </Button>
              </Link>

              <Link href="/" passHref>
                <h5 className='schoollink' style={{color:"#004ea0", fontSize:".9rem", fontWeight:"bolder", marginTop:"8px"}}>
                  Register as Regular User
                </h5>
              </Link>
            </div>
          </form>
        </div>
        <div className={styles.imageContainer}>
        <div className={styles.overlay}>
        <div className={styles.logoContainer}>
              <img className={styles.logo} src='projectlogo.png' alt='Logo' />
            </div>
        <div className={styles.overlayText}>
          <div style={{display:"block"}}>
          <div  className='fw-bold ms-3  fs-3'> Start your journey with us!</div>
         <div className='fs-6 ms-3'>our mission is to  simplfiy the management of unversity</div>
         <div className='fs-6 ms-3'>projects by providing an intuitive,all-in-one platform.</div>
          </div> 
    </div>
        </div>
        </div>
      </div>
    </div>
  );
}
