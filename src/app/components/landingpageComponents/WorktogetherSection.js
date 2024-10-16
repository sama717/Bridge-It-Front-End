
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

export default function WorkTogether() {
  return (
    <div style={{marginTop:"200px",backgroundColor:"white"}}>
      <Container >
        <Row style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
          <Col style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', padding: '20px' }}>
          <div style={{color:"#212529"}}>
          <h4 style={{ textAlign: 'left',fontWeight:"bold" }}>Your Data, Your Rules</h4>
          </div>
          <div style={{color:"#212529",fontWeight:"500",marginTop:"30px"}} >
          We take your data security seriously. You control who gets access to your files, with customizable permissions and top-notch encryption. Share what you need, when you need to, and keep everything else safe and sound.
          </div>
          <Button className='mt-5' style={{width:"25%",backgroundColor:"#004EA0"}}>
            Try it now <span>→</span>
          </Button>
           
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <img src='Element.png' style={{ width: "100%", maxWidth: "450px" }} alt="Work Together" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
