/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../store/authSlice';
import RememberMeCheckbox from '../authCopmonets/RemberMe';
export default function LoginForm() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  const user_id = useSelector((state) => state.auth.user_id);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [rememberMe, setRememberMe] = useState(false);

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
    console.log("Form submitted");

    if (isLoading) return; 
    dispatch(loginStart()); 

    try {
      const response = await fetch('https://api.bridgeit.site/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, rememberMe }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      const user = data.data.user; 
      const token = data.token.access_token; 
      const userID = user.user_id;
      dispatch(loginSuccess({ user:user, token:token, user_id: userID }));
      if (rememberMe) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.user.email);
      } else {
        sessionStorage.setItem('token', data.token);
      }

      router.push('/dashbord');
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
  const handleGoogleLogin =  () => {
    window.location.href = 'https://api.bridgeit.site/api/register/google';

    
  };
  
  const handleGithubLogin = () => {
   
    window.location.href = 'https://api.bridgeit.site/api/register/github';
  };
  
  return (
    <div>
    <form onSubmit={handleSubmit} >
      <h4 className="fw-bold mt-4 text-dark">Log in</h4>

      <p className="fw-bold mt-4 mb-5" style={{ color: "#525252",fontSize:"12px" }}>
        Don't have an account?{' '}
        <Link href="/signup" style={{ textDecoration: "underline", fontWeight: "bold", color: "#0b56a4" }}>
          <span style={{ fontSize: "12px" }}>Create a new account</span>
        </Link>
      </p>

      {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}

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
          <h5 className='schoollink' style={{ textDecoration: "underline", fontWeight: "bold", color: "#0b56a4", fontSize: ".8rem" }}>
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

      <Button type="submit" className="mt-2 submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Log in'}
      </Button>

      <div style={{ marginTop: "20px", color: "#6b7384" }}>_______________ or With _______________</div>
      <div className='icons' style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        <span>
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: "23px" }} onClick={handleGithubLogin} />
        </span>
        <span>
          <FcGoogle size={28} style={{ marginLeft: "30px", marginTop: "-5px" }}   onClick={handleGoogleLogin}/>
        </span>
        <span>
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#1877f2", fontSize: "23px", marginLeft: "30px" }} />
        </span>
      </div>
      <div className="copyright" >
          All Copyrights go to Bridge It © 2024
        </div>
    </form>
   

    </div>
  );
}