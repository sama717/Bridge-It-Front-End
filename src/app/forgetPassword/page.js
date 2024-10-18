"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const email = useSelector((state) => state.auth.email);
  const [otpSent, setOtpSent] = useState(false);
  const [isOtpCorrect, setIsOtpCorrect] = useState(null); 
  const otpRequestSentRef = useRef(false);
  const isMountedRef = useRef(false);
  const router = useRouter(); 

  const sendOtpRequest = (email) => {
    const formData = new FormData();
    formData.append("email", email);
    fetch("http://127.0.0.1:8000/api/email/forget/requireOTP", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          console.log("Email sent for OTP verification");
          setOtpSent(true);
          otpRequestSentRef.current = true;
        } else {
          console.error("Error sending email:", data.message);
        }
      })
      .catch((error) => console.error("API error:", error));
  };

  useEffect(() => {
    if (isMountedRef.current) {
      if (email && !otpSent && !otpRequestSentRef.current) {
        sendOtpRequest(email);
      }
    }
  }, [email, otpSent]);

  useEffect(() => {
    isMountedRef.current = true;
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleResend = () => {
    if (email) {
      sendOtpRequest(email);
    } else {
      console.error("No email available to resend OTP");
    }
  };

  const handleConfirm = () => {
    const otpToken = otp.join("");
    if (!otpToken || otpToken.length !== 4) {
      console.error("Invalid OTP");
      setIsOtpCorrect(false); 
      return;
    }
    const formData = new FormData();
    formData.append("email", email);
    formData.append("token", otpToken);

    fetch("http://127.0.0.1:8000/api/email/forget/checkOTP", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setIsOtpCorrect(true); 
          router.push("./resetPassword"); 
        } else {
          setIsOtpCorrect(false);
          console.error("OTP verification failed:", data.message);
        }
      })
      .catch((error) => {
        setIsOtpCorrect(false); 
        console.error("API error:", error);
      });
  };

  return (
    <div className="container">
      <div className={styles.gridContainer}>
        <div className={styles.formContainer}>
          <div className="otp-container">
            <div className="otp-box">
              <div className="icon-container">
                <div  className={styles.imagec}>
               
                  <img
                    style={{ width: "120px" }}
                    src={isOtpCorrect === null ? 'opt1.png' : isOtpCorrect ? 'opt1.png' : 'otp2.png'}
                    alt="OTP Icon"
                  />
                </div>
              </div>
              <h2 className="fw-bold text-dark">OTP Verification</h2>
              <p
                style={{
                  fontSize: ".8rem",
                  fontWeight: "bold",
                  color: "rgba(128, 128, 128,.9)",
                }}
              >
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
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    className="otp-input"
                  />
                ))}
              </div>

              <div className="resend">
                <span style={{ color: "#5d6672", fontWeight: "bold" }}>
                  Did not receive the message?{" "}
                </span>
                <a
                  style={{
                    color: "#004ea0",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                  href="#"
                  onClick={handleResend}
                >
                  Resend
                </a>
                <span className="timer fw-bold">MM:SS</span>
              </div>

              <button className="submit mt-5" onClick={handleConfirm}>
                Confirm
              </button>
                 <div style={{ display: "flex",height: "100px", justifyContent: "flex-start",alignItems: "flex-end" }}>
                     <img src="copyrights.png" style={{ height: "12px",marginLeft:"-30px"}}/>
                    </div>
                 </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.overlay}>
            <div className={styles.overlayText}>
              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src="projectlogo.png"
                  alt="Logo"
                />
              </div>
              <div style={{ display: "block" }}>
                <div className="fw-bold ms-3 fs-3 " >
                  Start your journey with us!
                </div>
                <div className="fs-6 ms-3 " >
                  Our mission is to simplify the management of university
                </div>
                <div className="fs-6 ms-3">
                  projects by providing an intuitive, all-in-one platform.
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
        {`


.otp-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.otp-box {
  width: 300px;
  background-color: white;
  border-radius: 10px;
}

.icon-container {
  margin-bottom: 40px;
  text-align:center;
 
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
  justify-content: space-around;
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
  color: #000;
  background-color: #fff;
}

.resend {
  font-size: 0.8em;
  margin-bottom: 20px;
  margin-top: 30px;
  display: flex;
}

.timer {
  font-size: .8rem;
  margin-bottom: 20px;
  color: #505967;
}
        `}
      </style>
      </div>
    </div>
  );
}
