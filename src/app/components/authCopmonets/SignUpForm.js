"use client";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux'; 
import { registerStart, registerSuccess, registerFailure } from '../../store/authSlice'; 
import { useRouter } from 'next/navigation';
export default function SignUpForm() {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.error);
  const successMessage = useSelector((state) => state.auth.successMessage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter(); 
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; 
    setIsSubmitting(true);

    dispatch(registerStart());  
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (response.ok && data.status === true) { 
        dispatch(registerSuccess(data));  
        router.push('/signup_verfication'); 
      } else {
        dispatch(registerFailure(data.message || 'Registration failed'));
      }
    } catch (error) {
      dispatch(registerFailure('An error occurred. Please try again later.'));
    } finally {
      setIsSubmitting(false); 
    }
  };

  const handleGoogleRegister = () => {
    window.location.href = 'http://127.0.0.1:8000/api/register/google';
  };

  const handleGithubRegister = () => {
    window.location.href = 'http://127.0.0.1:8000/api/register/github';
  };

  return (
    <div >
    <form onSubmit={handleSubmit}>
      <h5 className="fw-bold mt-3" >New account</h5>
      <p className="fw-bold text-muted " style={{fontSize:"13px"}}>Start your journey from here</p>
      <p className="fw-bold text-dark" style={{fontSize:"14px"}}>
        Already have an account?{' '}
        <Link href="./login" style={{ textDecoration: "underline", fontWeight: "bold", color: "#0b56a4" }}>
          Log in
        </Link>
      </p>
      <div className="form-group name">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          className="form-control"
          placeholder="Enter your first and last name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group email">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group pass">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      {successMessage && <p className="text-success">{successMessage}</p>}
      <Button type="submit" className=" submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Sign up'}
      </Button>
      <Link href="./signup_school">
        <h5 className='schoollink' style={{ color: "#004ea0", fontSize: ".9rem", fontWeight: "bolder" }}>
          Register as Company or school
        </h5>
      </Link>

      <div style={{ marginTop: "10px", color: "#6b7384" }}>_______________ or With _______________</div>

      <div className='icons' style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
        <span onClick={handleGithubRegister}>
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: "23px", cursor: "pointer" }} />
        </span>
        <span onClick={handleGoogleRegister}>
          <FcGoogle size={28} style={{ marginLeft: "30px", marginTop: "-5px", cursor: "pointer" }} />
        </span>
        <span>
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#1877f2", fontSize: "23px", marginLeft: "30px", cursor: "pointer" }} />
        </span>
      </div>
      <img src="copyrights.png" style={{ height: "12px", marginTop: "30px", marginLeft: "-40px" }} />
    </form>
    </div>
  );
}
