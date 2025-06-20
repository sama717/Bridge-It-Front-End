/* eslint-disable @next/next/no-img-element */

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

export default function WorkTogether() {
  return (
    <div style={{ marginTop: "0px", backgroundColor: "white", padding: "5rem 1rem" }}>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="d-flex flex-column ">
          <div className='ms-3'>
             <div style={{ color: "#212529" }}>
              <h3 style={{ fontWeight: "bold" }}>Everything You Need,</h3>
              <h3 style={{ fontWeight: "bold" }}>All in One Place</h3>
            </div>
            <div style={{ color: "#475569", fontWeight: "500", marginTop: "30px" }}>
              No more juggling a bunch of apps! Our platform has all the tools you need—organize tasks, chat with your
              team, share files, and hop on video calls—so you can focus on your project, not switching between tools.
            </div>
            <Button 
              className="mt-4" 
              style={{ width: "50%", maxWidth: "200px", backgroundColor: "#004EA0", color: "white" }}
            >
              Try it now <span>→</span>
            </Button></div>
           
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center mt-4 mt-md-0">
            <img 
              src="EveryThing.png" 
              style={{ width: "100%", maxWidth: "400px" }} 
              alt="Work Together" 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
