
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

export default function connectWithApps() {
  return (
    <div style={{marginTop:"150px",backgroundColor:"#004EA0",padding:"5rem"}}>
      <Container fluid>
        <Row style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <img src='connectWithApps.png' style={{ width: "100%", maxWidth: "400px" }} alt="Work Together" />
          </Col>
          <Col style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', padding: '20px' }}>
          <div style={{color:"#212529"}}>
          <h4 style={{ textAlign: 'left',fontWeight:"bold",color:"white" }}>Connect with the </h4>
          <h4 style={{ textAlign: 'left' ,fontWeight:"bold",color:"white"}}> Apps You Love</h4>
          </div>
          <div style={{color:"#FFFFFF",fontWeight:"500",marginTop:"30px"}} >
          Keep your favorite apps in the loop! We make it super easy to connect with the tools you already use, so your workflow stays smooth and nothing gets lost in the shuffle.
          </div>
          <Button className='mt-5' style={{width:"25%",backgroundColor:"#F5FAFF",color:"#004EA0"}}>
            Try it now <span>→</span>
          </Button>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}
