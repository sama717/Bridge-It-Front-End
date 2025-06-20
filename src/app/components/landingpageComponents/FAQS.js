/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import './FAQS.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function WorkTogether() {
  const [faqs, setFaqs] = useState([]);
  const [openFaqId, setOpenFaqId] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('https://api.bridgeit.site/api/questions');
        const data = await response.json();
        setFaqs(data.data[0]);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchFaqs();
  }, []);

  const handleToggle = (id) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div style={{ marginTop: '0px', backgroundColor: 'white', padding: '5rem 1rem' }}>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="d-flex justify-content-center mt-4 mt-md-0" >
            <div>
              <div style={{ color: '#212529' }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.7rem' }}>FAQs</h3>
              </div>
              <div style={{ color: '#42526B', fontWeight: '500', marginTop: '20px' }}>
                Have questions? No problem! Check out our FAQs for quick answers about how the platform works, security, and anything else you might need help with.
              </div>
              <div className="d-flex justify-content-center justify-content-md-start mt-3">
              <Link href="/about#helpcenter" passHref>
                <Button className="fw-bold me-2" style={{ width: '100%', maxWidth: '200px', backgroundColor: '#004EA0', height: '48px'}}>
                  <FontAwesomeIcon icon={faHeadset} />
                  <span className="ms-2">Help Center</span>
                </Button>
                </Link>
                <Link href="/about#helpcenter" passHref>
                <Button className="fw-bold" style={{ width: '100%', maxWidth: '200px', backgroundColor: '#F0F5FF', color: '#004EA0', height: '48px', border: 'none',marginLeft:"20px" }}>
                  Privacy Policy
                </Button>
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} className="d-flex justify-content-center mt-4 mt-md-0 bg-white">
          <form className='questionform' style={{width:"100%"}}>
            <div style={{ width: '90%' }}>
              {faqs.map((faq) => (
                <Card key={faq.id} className="mb-2 no-border">
                  <Card.Header
                    className={`d-flex justify-content-between align-items-center   ${openFaqId === faq.id ? 'answer' : 'bg-white'}`}
                    onClick={() => handleToggle(faq.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span>{faq.question}</span>
                    <FontAwesomeIcon icon={faPlus} style={{ cursor: 'pointer',color:"gray" }} />
                  </Card.Header>
                  <Collapse in={openFaqId === faq.id}>
                    <Card.Body style={{ backgroundColor: '#F0F5FF' }}>
                      <p>{faq.answer}</p>
                    </Card.Body>
                  </Collapse>
                </Card>
              ))}
            </div>
            </form>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}
