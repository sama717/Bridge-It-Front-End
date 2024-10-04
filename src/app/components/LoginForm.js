// src/components/LoginForm.js
"use client"; 
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../store/authSlice';
import RememberMeCheckbox from '../components/RemberMe';

export default function LoginForm() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart()); 

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, rememberMe }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      dispatch(loginSuccess({ user: data.user, token: data.token }));

      if (rememberMe) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.user.email);
      } else {
        sessionStorage.setItem('token', data.token);
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="fw-bold mb-4">Log in</h4>

      <p className="fw-bold mb-4" style={{ color: "#525252" }}>
        Don't have an account?{' '}
        <Link href="/signup" style={{ textDecoration: "underline", fontWeight: "bold", color: "#0b56a4" }}>
          <span style={{ fontSize: "14px" }}>Create a new account</span>
        </Link>
      </p>

      {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}
      {errorMessage && <div style={{ color: 'red', marginBottom: '20px' }}>{errorMessage}</div>}

      <div className="form-group email mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group pass mb-4">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link href="/Forgetpass">
          <h5 className='schoollink' style={{ textDecoration: "underline", fontWeight: "bold", color: "#0b56a4", fontSize: ".9rem" }}>
            Forgot your password?
          </h5>
        </Link>

        <div className="d-flex align-items-center">
          <RememberMeCheckbox
            checked={rememberMe}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>

      <Button type="submit" className="mt-5 submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Log in'}
      </Button>

      <div style={{ marginTop: "20px", color: "#6b7384" }}>_______________ or With _______________</div>
      <div className='icons' style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        <span>
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: "23px" }} />
        </span>
        <span>
          <FcGoogle size={28} style={{ marginLeft: "30px", marginTop: "-5px" }} />
        </span>
        <span>
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#1877f2", fontSize: "23px", marginLeft: "30px" }} />
        </span>
      </div>
      <img src="copyrights.png" style={{height:"12px",marginTop:"40px",marginLeft:"-40px"}}/>
    </form>
  );
}
