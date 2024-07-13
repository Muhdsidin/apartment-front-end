import React from 'react';
import './Banner.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';

function Banner() {

  
  return (
    <div style={{ marginTop: '8em' }}>
      <Container>
        <div className='main-items'>


          <Row className="justify-content-center">
            <Col md={4} className="d-flex justify-content-center">
              <a
              data-aos="zoom-in"
                href="/buildings"
                className="box-3"
                
                data-aos-duration="2500"
                style={{ marginTop: '4em', width: '10em' }}
              >
                Upload Buildings
              </a>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <a
                href="/room"
                className="box-3"
                data-aos="fade-up"
                data-aos-duration="3000"
                style={{ marginTop: '4em', width: '10em' }}
              >
                Upload Rooms
              </a>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <a
                href="/viewrooms"
                className="box-3"
                data-aos="fade-up"
                style={{ marginTop: '4em', width: '10em' }}
              >
                View Rooms
              </a>
            </Col>
          </Row>


          <Row className="justify-content-center">
            <Col md={4} className="d-flex justify-content-center">
              <a
                href="/ViewTenent"
                className="box-3"
                data-aos="fade-up"
                style={{ marginTop: '1em', width: '10em' }}
              >
                View Tenants
              </a>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <a
                href="/renewtenent"
                className="box-3"
                data-aos="fade-up"
                data-aos-duration="3000"
                style={{ marginTop: '1em', width: '10em' }}
              >
                Renewed Tenants
              </a>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <a
                href="/terminated"
                className="box-3"
                data-aos="fade-up"
                data-aos-duration="3000"
                style={{ marginTop: '1em', width: '10em' }}
              >
                Terminates
              </a>
            </Col>
          </Row>


          


        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Banner;
