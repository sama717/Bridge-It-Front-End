/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../../store/authSlice';
import RememberMeCheckbox from './RemberMe';
import { requestDeviceToken } from '../../../util/firebase.js';
import { auth, googleProvider, githubProvider, facebookProvider } from '../../../util/firebase';
import { signInWithPopup } from 'firebase/auth';

export const dynamic = 'force-dynamic'; // Force dynamic behavior

export default function LoginForm() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Firebase-related code can run here
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    dispatch(loginStart());
    try {
      const deviceToken = await requestDeviceToken();
      if (!deviceToken) throw new Error("Device token retrieval failed.");
      console.log(deviceToken);

      const response = await fetch('https://bridge-it-backend-main-tfxagd.laravel.cloud/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, rememberMe, device_token: deviceToken }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed.');
      }

      const data = await response.json();
      const user = data?.data?.user;
      const token = data?.access_token;

      if (!user || !token) throw new Error("Invalid response structure.");

      dispatch(loginSuccess({ user, token, user_id: user.user_id, email: user.email }));

      if (rememberMe) {
        localStorage.setItem('token', token);
        localStorage.setItem('email', user.email);
      } else {
        localStorage.setItem('token', token);
      }

      router.push('/dashboard');
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  const handleOAuthLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(loginSuccess({ user, token: user.accessToken }));
      localStorage.setItem('token', user.accessToken);
      router.push('/dashboard');
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  const handleCreateAccountClick = () => {
    router.push('/signup');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4 className="fw-bold mt-4 text-dark">Log in</h4>

        <p className="fw-bold mt-4 mb-5" style={{ color: "#525252", fontSize: "12px" }}>
          Don't have an account?{' '}
          <span 
            style={{ textDecoration: "underline", fontWeight: "bold", color: "#0b56a4", cursor: "pointer" }} 
            onClick={handleCreateAccountClick}
          >
            Create a new account
          </span>
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
            <h5 className="schoollink" style={{ textDecoration: "underline", fontWeight: "bold", color: "#0b56a4", fontSize: ".8rem" }}>
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

        <div style={{ marginTop: "10px", color: "#6b7384" }}>  _____________ or With _____________</div>
        <div className="icons" style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
          <span onClick={() => handleOAuthLogin(githubProvider)}>
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "23px" }} />
          </span>
          <span onClick={() => handleOAuthLogin(googleProvider)}>
            <FcGoogle size={28} style={{ marginLeft: "30px", marginTop: "-5px" }} />
          </span>
          <span onClick={() => handleOAuthLogin(facebookProvider)}>
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#1877f2", fontSize: "23px", marginLeft: "30px" }} />
          </span>
        </div>

        <div className="copyright">
          All Copyrights go to Bridge It © 2024
        </div>
      </form>
    </div>
  );
}
