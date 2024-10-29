/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../page.module.css';
import PhoneNumberInput from '../components/authCopmonets/PhoneNumberInput'; 
import FullNameInput from '../components/authCopmonets/FullNameInput';
import EmailInput from '../components/authCopmonets/EmailInput';
import PasswordInput from '../components/authCopmonets/PasswordInput'; 
import WhatsAppCheckbox from '../components/authCopmonets/WhatsAppCheckbox';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    type: 'school',
    sameAsWhatsapp: false,
  });

  const router = useRouter();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneNumberString = String(formData.phoneNumber);
    const data = new FormData();
    data.append('name', formData.fullName);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('type', formData.type);
    data.append('phone', phoneNumberString);  

    for (let pair of data.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    try {
      const response = await fetch('https://api.bridgeit.site/api/register', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error('Registration failed:', errorResponse);
        if (errorResponse.message) {
          Object.entries(errorResponse.message).forEach(([field, errors]) => {
            console.error(`${field}: ${errors.join(', ')}`);
          });
        }
        return;
      }

      const result = await response.json();

      if (result.status) {
        router.push('/signup_verfication');
      } else {
        console.error('Registration failed:', result.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className='container'>
      <div className={styles.gridContainer}>
        <div className={styles.formContainer}>
        <div className={styles.formConytent}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h5  className={styles.title}>School Account</h5>
            <p className={styles.subtitle} >Start your journey from here</p>
            <p className="fw-bold text-dark" style={{fontSize:"14px"}}>
              Already have an account?{' '}
              <Link href="/login" style={{ textDecoration: "underline", fontWeight: "bold", color: "#0b56a4" }}>
                Log in
              </Link>
            </p>
            <FullNameInput name="fullName" value={formData.fullName} onChange={handleChange} />
            <EmailInput name="email" value={formData.email} onChange={handleChange} />
            <PhoneNumberInput name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            <WhatsAppCheckbox name="sameAsWhatsapp" checked={formData.sameAsWhatsapp} onChange={handleChange} />
            <PasswordInput name="password" value={formData.password} onChange={handleChange} />
            <div >
              <div className={styles.submitdiv}>
              <Button className={styles.submit}
              style={{
                backgroundColor: "#0652a2",
                width: "100%",
                fontWeight: "bolder",
              }}
              type="submit" 
            >
              Sign up
            </Button>
              </div>
           
            </div>
    
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
              <div style={{ display: "block" }}>
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
