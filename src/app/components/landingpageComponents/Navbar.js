import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

export default function Header() {
  const style = {
    fontSize: "16px",
    marginLeft: "40px",
    color: "#4b5563",
  };

  const companyStyle = {
    fontSize: "16px",
    marginLeft: "40px",
    background: 'linear-gradient(90deg, #002572, #007bff)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "white" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="Navlogo.png" style={{ width: "80px", height: "60px" }} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex align-items-center">
            <Nav.Link className='fw-bold' href="#" style={style}>Home</Nav.Link>
            <Nav.Link className='fw-bold' href="#" style={style}>Features</Nav.Link>
            <Nav.Link className='fw-bold' href="#" style={style}>Plans&Pricing</Nav.Link>
            <Nav.Link className='fw-bold' href="#" style={style}>AboutUs</Nav.Link>
            <Nav.Link href="#link" style={companyStyle}>Companies/Schools</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
          <Nav.Link className='fw-bold' href="#" 
          style={{ fontSize: "16px", color: "#4b5563", marginLeft: "30px", display: "flex", alignItems: "center" }}>
            <img src="iconlang.png" alt="Language" style={{ marginRight: "5px" }} /> EN
         </Nav.Link>
            <Nav.Link href='/login'>
              <Button className='btn btn-light pt-2 pb-2 ps-4 pe-4 fw-bold' style={{ color: "#004ea0" }}>
                Login
              </Button>
            </Nav.Link>
            <Nav.Link href='/signup'>
              <Button className='btn  fw-bold pt-2 pb-2 ps-4 pe-4' style={{ backgroundColor: "#004ea0", color: "white",fontSize:"14px",whiteSpace: "nowrap" }}>
                Start for free
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
