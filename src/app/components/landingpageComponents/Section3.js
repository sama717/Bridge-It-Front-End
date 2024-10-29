
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

export default function WorkTogether() {
  return (
    <div style={{marginTop:"150px",backgroundColor:"white"}}>
      <Container fluid>
        <Row style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <img src='Work Together Image.png' style={{ width: "100%", maxWidth: "400px" }} alt="Work Together" />
          </Col>
          <Col style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', padding: '20px' }}>
          <div style={{color:"#212529"}}>
          <h4 style={{ textAlign: 'left',fontWeight:"bold" }}>Work Together,</h4>
          <h4 style={{ textAlign: 'left' ,fontWeight:"bold"}}> Wherever You Are</h4>
          </div>
          <div style={{color:"#212529",fontWeight:"500",marginTop:"30px"}} >
          Teamwork has never been easier! Stay connected and collaborate in real-time with tools like shared docs, whiteboards, and group chats. Whether you're working with classmates or supervisors, everything you need is at your fingertips.
          </div>
          <Button className='mt-5' style={{width:"25%",backgroundColor:"#004EA0"}}>
            Try it now <span>→</span>
          </Button>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}
