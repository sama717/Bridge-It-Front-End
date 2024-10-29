/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './notfound.css'
import Link from 'next/link';
export default function NotFound(){
    return(
        <div className='container'>
        <Container   style={{backgroundColor:"white"}} >
            <Row  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr',  alignItems: 'center' }}>
                <Col >
                <img  src='notfounfIcon.png'/>
                <h4 className='text-dark mt-3 fw-bold'>Page not found</h4>
                <p className='text-dark mt-3 fs-6 fw-bold'>You can go back to the main page and start over</p>
                <Link href="/" style={{color:"#007BFF"}} > <div className='mt-5'><span  >BACK TO THE MAIN PAGE</span>  <span style={{color:"#007BFF"}}>→</span></div> </Link>

                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                <img src='Notfound.png'/>
                </Col>
            </Row>
        </Container>


        </div>
    );
}