/* eslint-disable @next/next/no-img-element */

"use client";
import styles from '../page.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
export default function ForgetPassword() {
  const dispatch = useDispatch();
  const router = useRouter();
  const email = useSelector((state) => state.auth.email);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    try {
      const response = await fetch('https://api.bridgeit.site/api/password/change', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: formData.password
        })
      });

      const data = await response.json();
      if (data.status) {
        setSuccessMessage("Password successfully changed.");
        setErrorMessage("");
        setTimeout(() => {
          router.push('/passwordverfication');
        }, 2000);
      } else {
        setErrorMessage(data.message || "Failed to change password. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Failed to change password. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="container">
      <div className={styles.gridContainer}>
        <div className={styles.formContainer}>
        <div className={styles.formConytent}>
          <form onSubmit={handleSubmit}>
            <p className="fw-bold fs-6" style={{ marginTop: "120px" }}>
              Create a new password
            </p>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "rgba(128, 128, 128,.9)",
                marginTop: "-10px",
                marginBottom: "40px"
              }}
            >
              Return to your journey
            </p>

            <div className="form-group pass">
              <label style={{ fontSize: ".95rem" }}>New password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Please enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <p
              style={{
                fontSize: "9px",
                color: "#787e8a",
                marginTop: "-15px"
              }}
              className='passwordText'
            >
              Use 8 or more characters with a combination of letters, numbers,
              and symbols.
            </p>

            <div className="form-group pass">
              <label style={{ fontSize: ".95rem", marginTop: "30px" }}>
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Please enter your password again"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {errorMessage && (
              <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
            )}
            {successMessage && (
              <p style={{ color: "green", marginTop: "10px" }}>
                {successMessage}
              </p>
            )}
            <div className={styles.submitdiv}>
            <Button type="submit" className={styles.submit}>
              Reset password
            </Button>
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
              <img className={styles.logo} src="projectlogo.png" alt="Logo" />
            </div>
            <div className={styles.overlayText}>
              <div style={{ display: "block" }}>
                <div className="fw-bold ms-3 fs-3"> Welcome back</div>
                <div className="fs-6 ms-3">
                  Our mission is to simplify the management of university
                </div>
                <div className="fs-6 ms-3">
                  projects by providing an intuitive, all-in-one platform.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
