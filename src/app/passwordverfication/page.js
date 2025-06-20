/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client" ;
import Link from 'next/link';
import styles from '../page.module.css';
import { Button } from 'react-bootstrap';
export default function Verfiction(){
  return (
    <div className='container'>
    <div className={styles.gridContainer}>
      <div className={styles.formContainer}>
      <div className={styles.formConytent}>
        <form >
          <div className={styles.imagec}>
            <img style={{marginTop:"50px"}} src='correct.png'/>
          </div>
          <div className='fw-bold text-dark mt-2 '  style={{textAlign:"center",fontSize:"14px"}}>
            Your password has been changed successfully 
          </div>
          <p style={{fontSize:"13px",textAlign:"center",fontWeight:"bold", color: "rgba(128, 128, 128,.8)"}} className='mt-3' >Your password has been cahnged successfully</p>
          <Link href="./login">
          <Button className=' submit mt-5'
                  style={{ backgroundColor: "#0652a2", width: "100%", fontWeight: "bolder",}} >
             Back to login
                </Button>
          </Link>
          <div className="copyright" >
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
           <div  className='fw-bold ms-3  fs-3'> Welcome back</div>
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