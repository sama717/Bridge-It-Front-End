"use client";
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [email, setEmail] = useState('');
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  }; 
  useEffect(() => {
    const storedEmail = localStorage.getItem("email"); 
    if (storedEmail) {
      setEmail(storedEmail);
      sendOtpRequest(storedEmail);
    } else {
      console.error("No email found in localStorage");
    }
  }, []);
  const sendOtpRequest = (email) => {
    const formData = new FormData();
    formData.append('email', email);
    fetch("http://127.0.0.1:8000/api/email/forget", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          console.log("Email sent for OTP verification");
        } else {
          console.error("Error sending email:", data.message);
        }
      })
      .catch(error => console.error("API error:", error));
  };
  const handleResend = () => {
    if (email) {
      sendOtpRequest(email);
    } else {
      console.error("No email available to resend OTP");
    }
  };
  const handleConfirm = () => {
    const otpToken = otp.join(''); 
    if (!otpToken || otpToken.length !== 4) {
      console.error("Invalid OTP");
      return;
    }
    const formData = new FormData();
    formData.append('email', email);
    formData.append('token', otpToken);

    fetch("http://127.0.0.1:8000/api/email/forget/check", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          console.log("OTP verified successfully");
        } else {
          console.error("OTP verification failed:", data.message);
        }
      })
      .catch(error => console.error("API error:", error));
  };

  return (
    <div className='container'>
      <div className={styles.gridContainer}>
        <div className={styles.formContainer}>
          <div className="otp-container">
            <div className="otp-box">
              <div className="icon-container">
                <div className={styles.imagec}>
                  <img style={{ width: "150px" }} src='opt1.png' alt="OTP Icon" />
                </div>
              </div>
              <h2 className='fw-bold'>OTP Verification</h2>
              <p style={{ fontSize: ".9rem", fontWeight: "bold", color: "rgba(128, 128, 128,.9)" }}>
                We will send you a one-time password for this email
              </p>
              <p className="email fw-bold">{email}</p>

              <div className="otp-inputs">
                {otp.map((data, index) => (
                  <input
                    type="text"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={e => handleChange(e.target, index)}
                    onFocus={e => e.target.select()}
                    className="otp-input"
                  />
                ))}
              </div>

              <div className="resend">
                <span style={{ color: "#5d6672", fontWeight: "bold" }}>Did not receive the message? </span>
                <a style={{ color: "#004ea0", fontWeight: "bold", marginRight: "30px" }} href="#" onClick={handleResend}>Resend</a>
                <span className="timer fw-bold">MM:SS</span>
              </div>
           <Link href="./resetPassword"> <button className="submit mt-4" onClick={handleConfirm}>Confirm</button></Link>
               <img src="copyrights.png" style={{height:"12px",marginTop:"70px",marginLeft:"-40px"}}/>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.overlay}>
            <div className={styles.overlayText}>
            <div className={styles.logoContainer}>
              <img className={styles.logo} src='projectlogo.png' alt='Logo' />
            </div>
              <div style={{ display: "block" }}>
              <div className='fw-bold ms-3 fs-3'> Start your journey with us!</div>
              <div className='fs-6 ms-3'>our mission is to simplify the management of university</div>
              <div className='fs-6 ms-3'>projects by providing an intuitive, all-in-one platform.</div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .otp-container {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
          }

          .otp-box {
            width: 400px;
            background-color: white;
            border-radius: 10px;
          }

          .icon-container {
            margin-bottom: 40px;
          }

          h2 {
            font-size: 1.5em;
            margin-bottom: 10px;
          }

          p {
            margin-bottom: 10px;
            font-size: .9rem;
          }

          .otp-inputs {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            margin-top: 30px;
          }

          .otp-input {
            width: 50px;
            height: 50px;
            text-align: center;
            font-size: 1.5em;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .resend {
            font-size: 0.8em;
            margin-bottom: 20px;
            margin-top: 30px;
          }

          .timer {
            font-size: .8rem;
            margin-bottom: 20px;
            color: #505967;
          }
        `}</style>
      </div>
    </div>
  );
}
