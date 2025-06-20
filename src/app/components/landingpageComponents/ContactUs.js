/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import './ContactUs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    question: '',
    name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.bridgeit.site/api/question/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="contact-us-background ">
      <Container>
        <Row style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
          <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px' }}>
            <h3 style={{ textAlign: 'left', fontWeight: "bold", fontSize: "1.9rem" }}>Reach Out Anytime</h3>
            <div className='mb-3' style={{ color: "rgba(255,255,255,.7)", fontWeight: "500", marginTop: "20px", textAlign: 'left', lineHeight: "26px" }}>
              We're here for you! If you need help or just want to ask a question, don't hesitate to get in touch. Send us an email or message, and we’ll get back to you as soon as we can.
            </div>
            <div className='mt-3 '>
              <Row style={{ display: 'grid', gridTemplateColumns: '60px 100px' }}>
                <Col>
                  <img style={{ width: "50px", height: "50px" }} src="email.png" />
                </Col>
                <Col>
                  <div style={{ color: "rgba(255,255,255,.7)" }}>Email us</div>
                  <p className="text-white">info@golio.com</p>
                </Col>
              </Row>
            </div>

            <div className='d-flex'>___Connect with us:</div>
            <div className="social-icons d-flex mt-4">
              <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '1.5rem', color: '#fff', marginRight: '15px' }} />
              <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '1.5rem', color: '#fff', marginRight: '15px' }} />
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.5rem', color: '#fff', marginRight: '15px' }} />
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.5rem', color: '#fff', marginRight: '15px' }} />
            </div>
          </Col>

          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="form-container mt-5">
              <Form onSubmit={handleSubmit} style={{ padding: '30px', borderRadius: '10px', backgroundColor: 'white', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formName" className="mb-3">
                      <Form.Label className='labell'>Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name" 
                        placeholder="Full name" 
                        value={formData.name} 
                        onChange={handleChange} 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail" className="mb-3">
                      <Form.Label className='labell'>Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        placeholder="Email address" 
                        value={formData.email} 
                        onChange={handleChange} 
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Label className='labell'>Subject</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                  />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label className='labell'>Message</Form.Label>
                  <Form.Control 
                    style={{ resize: "none" }} 
                    as="textarea" 
                    rows={3} 
                    name="question" 
                    placeholder="Tell us about your project..." 
                    value={formData.question} 
                    onChange={handleChange} 
                  />
                </Form.Group>

                <div className="d-flex justify-content-start">
                  <Button className='button2' variant="primary" type="submit">
                    Request A Quote <span>→</span>
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
