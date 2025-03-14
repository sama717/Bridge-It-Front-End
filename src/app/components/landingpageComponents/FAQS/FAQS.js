/* eslint-disable @next/next/no-img-element */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import "./faqs.css";
import Image from "next/image";
export default function WorkTogether() {
  return (
    <section className="faq">
      <div className="faq-section">
        <div className="text">
          <h4>
            Have questions? No problem! Check out our FAQs for quick answers
            about how the platform works, security, and anything else you might
            need help with.
          </h4>
          <div className="buttons">
            <button>Help Center</button>
            <button>Privacy Policy</button>
          </div>
        </div>
        <div className="image">
          <Image src={"/Home.svg"} fill priority />
        </div>
      </div>
      {/* <Container fluid>
        <Row className="align-items-center">
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center text-center text-md-start"
          >
            <div>
              <div style={{ color: "#212529" }}>
                <h3 style={{ fontWeight: "bold", fontSize: "1.7rem" }}>FAQs</h3>
              </div>
              <div
                style={{
                  color: "#42526B",
                  fontWeight: "500",
                  marginTop: "20px",
                }}
              >
                Have questions? No problem! Check out our FAQs for quick answers
                about how the platform works, security, and anything else you
                might need help with.
              </div>
              <div className="d-flex justify-content-center justify-content-md-start mt-3">
                <Button
                  className="fw-bold me-2"
                  style={{
                    width: "45%",
                    maxWidth: "200px",
                    backgroundColor: "#004EA0",
                    height: "48px",
                  }}
                >
                  <FontAwesomeIcon icon={faHeadset} />
                  <span className="ms-2">Help Center</span>
                </Button>
                <Button
                  className="fw-bold"
                  style={{
                    width: "45%",
                    maxWidth: "200px",
                    backgroundColor: "#F0F5FF",
                    color: "#004EA0",
                    height: "48px",
                    border: "none",
                  }}
                >
                  Privacy Policy
                </Button>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center mt-4 mt-md-0"
          >
            <img
              src="Element.png"
              style={{ width: "100%", maxWidth: "450px" }}
              alt="FAQs Illustration"
            />
          </Col>
        </Row>
      </Container> */}
    </section>
  );
}
