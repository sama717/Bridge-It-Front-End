
"use client" ;
import Link from 'next/link';
import styles from '../page.module.css';
import { Button } from 'react-bootstrap';
export default function Verfiction(){
  return (
    <div className='container'>
    <div className={styles.gridContainer}>
      <div className={styles.formContainer}>
        <form >
          <div className={styles.imagec}>
            <img style={{marginTop:"50px"}} src='correct.png'/>
          </div>
          <div className='fw-bold '  style={{textAlign:"center",fontSize:"12px"}}>
            Your account has been created successfully check your Gmail
          </div>
          <p className='mt-3' style={{fontSize:"14px",textAlign:"center"}} >start your journey now,What you are waitig for!</p>
          <Link href="#">
          <Button className='mt-5'
                  style={{ backgroundColor: "#0652a2", width: "100%", fontWeight: "bolder",}} >
                  Take me home
                </Button>
          </Link>
          <div style={{ display: "flex",height: "100px", justifyContent: "flex-start",alignItems: "flex-end" }}>
                     <img src="copyrights.png" style={{ height: "12px",marginLeft:"-10px"}}/>
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