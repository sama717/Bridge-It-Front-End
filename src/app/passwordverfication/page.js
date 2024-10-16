
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
          <div className='fw-bold '  style={{textAlign:"center",fontSize:"14px"}}>
            Your password has been changed successfully 
          </div>
          <p style={{fontSize:"13px",textAlign:"center",fontWeight:"bold", color: "rgba(128, 128, 128,.8)"}} className='mt-3' >Your password has been cahnged successfully</p>
          <Link href="./login">
          <Button className='mt-5'
                  style={{ backgroundColor: "#0652a2", width: "100%", fontWeight: "bolder",}} >
             Back to login
                </Button>
          </Link>
          <div style={{ display: "flex",height: "100px", justifyContent: "flex-start",alignItems: "flex-end" }}>
                     <img src="copyrights.png" style={{ height: "12px",marginLeft:"-30px"}}/>
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