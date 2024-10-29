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
          <Col xs={12} md={6} className="d-flex flex-column  ">
          <div className='ms-3'>
          <div style={{ color: "#212529" }}>
              <h3 style={{ fontWeight: "bold" }}>Your Data, Your Rules</h3>
            </div>
            <div style={{ color: "#212529", fontWeight: "500", marginTop: "30px" }}>
              We take your data security seriously. You control who gets access to your files, with customizable permissions and top-notch encryption. Share what you need, when you need to, and keep everything else safe and sound.
            </div>
            <Button 
              className="mt-4" 
              style={{ width: "50%", maxWidth: "200px", backgroundColor: "#004EA0", color: "white" }}
            >
              Try it now <span>→</span>
            </Button>
          </div>
           
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center mt-5 mt-md-0">
            <img 
              src="Element.png" 
              style={{ width: "100%", maxWidth: "500px" }} 
              alt="Work Together" 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
