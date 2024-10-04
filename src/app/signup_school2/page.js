
"use client";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import styles from './page.module.css';
import PhoneNumberInput from '../components/PhoneNumberInput'; 
import FullNameInput from '../components/FullNameInput';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput'; 
import WhatsAppCheckbox from '../components/WhatsAppCheckbox';
export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    sameAsWhatsapp: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='container'>
    <div className={styles.gridContainer}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h4 className={styles.title}>School Account</h4>
          <p className={styles.subtitle}>Start your journey from here</p>
          <p className="fw-bold text-dark">
        Already have an account?{' '}
        <Link href="#login"style={{textDecoration:"underline",fontWeight:"bold",color:"#0b56a4"}}>
              Log in
            </Link>
      </p>
          <FullNameInput
            value={formData.fullName}
            onChange={handleChange}
          />
          <EmailInput
            value={formData.email}
            onChange={handleChange}
          />
          <PhoneNumberInput
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <WhatsAppCheckbox
            checked={formData.sameAsWhatsapp}
            onChange={handleChange}
          />
          <PasswordInput
            value={formData.password}
            onChange={handleChange}
          />

          <Link href="./signup_verfication">
          <Button className='mt-2'
                  style={{
                    backgroundColor: "#0652a2",
                    width: "100%",
                    fontWeight: "bolder",
                    
                   
                  }}
                >
                 Sign up
                </Button>
          </Link> 
        </form>
 <img src="copyrights.png" style={{height:"12px",marginTop:"50px",marginLeft:"-40px"}}/>
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
