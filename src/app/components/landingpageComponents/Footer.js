/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import { faEnvelope, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    FaFacebookF,
    FaLinkedin,
    FaTwitter,
    FaInstagram 
} from 'react-icons/fa';

const SectionOneStyle = {
    margin: "0",
    color: "#8F90A6",
    fontWeight: "550"
};

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(''); 

    const companyLinks = [
        { label: 'Features', Link: 'about' },
        { label: 'Plans & Pricing', Link: 'contact' },
        { label: 'About Us', Link: '' },
        { label: 'Companies/Schools', Link: '' },
    ];

    const contactInfo = [
        { icon: faLocationDot, text: '123 Street, New York, USA' },
        { icon: faMobile, text: '+012 345 67890' },
        { icon: faEnvelope, text: 'info@example.com' },
    ];
    
    const socialLinks = [
        { icon: FaFacebookF, size: 15, scale: 1.3, color: '#1DA1F2' }, 
        { icon: FaTwitter, size: 15, scale: 1.3, color: '#3b5998' }, 
        { icon: FaInstagram, size: 15, scale: 1.3, color: '#FF0000' }, 
        { icon: FaLinkedin, size: 15, scale: 1.3, color: '#0077B5' }, 
    ];

    const handleChange = (e) => {
        setEmail(e.target.value);
        setError(''); 
    };

    const handleSubscribe = async () => {
        const response = await fetch('https://api.bridgeit.site/api/subscription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (!data.status) {
            setError(data.message.email[0]); 
        } else {
            console.log('Subscription successful!');
            setEmail('');
            setError(''); 
        }
    };

    return (
        <React.Fragment>
            <div className="container-fluid bg-white text-dark footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" style={{ borderTop: "1px solid #DFDFDF" }}>
                <div className="container py-4">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <img src='projectlogo.png' alt="Project Logo" />
                            <div className='mt-3 '>
                                <p style={SectionOneStyle}>Our goal is at the</p>
                                <p style={SectionOneStyle}>heart of all that we do.</p>
                            </div>
                            <div className="d-flex mt-4 pt-2 justify-content-start ">
                                {socialLinks.map((social, index) => (
                                    <a key={index} className="btn btn-social " href="" style={{ color: social.color }} >
                                        {React.createElement(social.icon, {
                                            style: {
                                                fontSize: social.size,
                                                transform: `scale(${social.scale})`,
                                                color: social.color, 
                                            },
                                        })}
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <p className="section-title ff-secondary text-start fw-bold mb-4">Our Company</p>
                            {companyLinks.map((link, index) => (
                                <a key={index} className="btn d-flex align-items-center text-dark mb-2" href={link.Link} style={{ fontSize: "14px", fontWeight: "550" }}>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <p className="section-title ff-secondary text-start fw-bold mb-4">Contact</p>
                            {contactInfo.map((info, index) => (
                                <p key={index} className="mb-4">
                                    <FontAwesomeIcon icon={info.icon} className="me-3" />
                                    {info.text}
                                </p>
                            ))}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <p className="section-title ff-secondary text-start fw-bold mb-4">Subscribe</p>
                            <p style={{color:"#6B7280", fontSize:"14px", fontWeight:"550"}}>Subscribe to get the latest property, blog news from us</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: 400 ,height:"50px"}}>
                                <input
                                    className="form-control border-gray w-100 pt-4 pb-4 py-3 ps-4 pe-5"
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={handleChange}
                                  style={{boxSizing:"border-box"}} 
                                />
                              <img
                               src="arrow.png"
                               className="position-absolute"
                               style={{ right: "15px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", margin: 0, padding: 0 }}
                               onClick={handleSubscribe}
                               alt="Subscribe"
                               />
                                {error && <div style={{ color: 'red', marginTop: '1px' }}>{error}</div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyrights">
                        <div className="row">
                            <div className="col-md-6 text-md-start mb-md-0" style={{color:"#8F90A6",fontSize:"12px",fontWeight:"550"}}>
                                All Copyrights go to Bridge It © 2024
                                <br />
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
