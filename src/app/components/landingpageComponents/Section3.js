/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

export default function WorkTogether() {
  return (
    <div style={{ marginTop: "0px", backgroundColor: "white", padding: "5rem 1rem" }}>
      <Container fluid>
        <Row className="align-items-center ">
          <Col xs={12} md={6} className="d-flex  mb-5 mb-md-0">
            <img 
              src="Work Together Image.png" 
              style={{ width: "100%", maxWidth: "400px" }} 
              alt="Work Together" 
            />
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column ">
          <div className='ms-3'>
          <div style={{ color: "#212529" }}>
              <h3 style={{ fontWeight: "bold" }}>Work Together,</h3>
              <h3 style={{ fontWeight: "bold" }}>Wherever You Are</h3>
            </div>
            <div style={{ color: "#212529", fontWeight: "500", marginTop: "30px" }}>
              Teamwork has never been easier! Stay connected and collaborate in real-time with tools like shared docs,
              whiteboards, and group chats. Whether you're working with classmates or supervisors, everything you need
              is at your fingertips.
            </div>
            <Button 
              className="mt-4" 
              style={{ width: "50%", maxWidth: "200px", backgroundColor: "#004EA0", color: "white" }}
            >
              Try it now <span>→</span>
            </Button>
          </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
