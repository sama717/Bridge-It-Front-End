
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

export default function WorkTogether() {
  return (
    <div style={{marginTop:"200px",backgroundColor:"white"}}>
      <Container >
        <Row style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <Col style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', padding: '20px' }}>
          <div style={{color:"#212529"}}>
          <h4 style={{ textAlign: 'left',fontWeight:"bold" }}>Everything You Need,</h4>
          <h4 style={{ textAlign: 'left',fontWeight:"bold" }}>All in One Place</h4>
          </div>
          <div style={{color:"#475569",fontWeight:"500",marginTop:"30px"}} >
          No more juggling a bunch of apps! Our platform has all the tools you need—organize tasks, chat with your team, share files, and hop on video calls—so you can focus on your project, not switching between tools.
          </div>
          <Button className='mt-5' style={{width:"25%",backgroundColor:"#004EA0"}}>
            Try it now <span>→</span>
          </Button>
           
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <img src='EveryThing.png' style={{ width: "100%", maxWidth: "400px" }} alt="Work Together" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
