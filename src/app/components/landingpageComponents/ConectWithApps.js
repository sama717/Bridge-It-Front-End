/* eslint-disable @next/next/no-img-element */

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

export default function ConnectWithApps() {
  return (
    <div style={{ marginTop: "0px", backgroundColor: "#004EA0", padding: "5rem 1rem" }}>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="d-flex justify-content-center mb-4 mb-md-0">
            <img 
              src='connectWithApps.png' 
              style={{ width: "100%", maxWidth: "400px" }} 
              alt="Work Together" 
            />
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column ">
          <div className='ms-3'>
          <div style={{ color: "#212529" }}>
              <h3 style={{ fontWeight: "bold", color: "white" }}>Connect with the</h3>
              <h3 style={{ fontWeight: "bold", color: "white" }}>Apps You Love</h3>
            </div>
            <div style={{ color: "#FFFFFF", fontWeight: "500", marginTop: "30px" }}>
              Keep your favorite apps in the loop! We make it super easy to connect with the tools you already use, so your workflow stays smooth and nothing gets lost in the shuffle.
            </div>
            <Button 
              className="mt-4" 
              style={{ width: "50%", maxWidth: "200px", backgroundColor: "#F5FAFF", color: "#004EA0" }}
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
