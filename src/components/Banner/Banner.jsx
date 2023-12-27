import React from 'react'
import './Banner.css'
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer'
function Banner() {
  return (
    <div>
 <div style={{ position: 'relative' }}  >
  <img
    src="https://img.freepik.com/free-vector/white-elegant-texture-background-style_23-2148432200.jpg?size=626&ext=jpg&ga=GA1.2.1043746885.1669217085&semt=sph"
    alt=""
    className='banner-image'
    style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
   
  />
  <h3 className='title' data-aos="zoom-right">
    Book Your Apartment Now!!
  </h3>
</div >

<Container>
  <div className='main-items'>
  <Row className="justify-content-center">
      <a
        href="/buildings"
        className="box-3"
        data-aos="zoom-in"
        data-aos-duration="2500"
        style={{ marginTop: '4em', width: '10em' }}
      >
        Upload Buildings
      </a>
    </Row>

    <Row className="justify-content-center">
      <a
        href="/room"
        className="box-3"
        data-aos="fade-up"
        data-aos-duration="3000"
        style={{ marginTop: '1em', width: '10em' }}
      >
        Upload Rooms
      </a>
    </Row>
    <Row className="justify-content-center">
      <a
        href="/viewrooms"
        className="box-3"
        data-aos="fade-up"
        style={{ marginTop: '1em', width: '10em' }}
      >
        View Rooms
      </a>
    </Row>
    <Row className="justify-content-center">
      <a
        href="/ViewTenent"
        className="box-3"
        data-aos="fade-up"
        style={{ marginTop: '1em', width: '10em' }}
      >
        ViewTenents
      </a>
    </Row>
    <br />
    <br />
    
  </div>
  <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    


   
  </Container>
  <Footer/>
  
</div>


    
      
      
  )
}


export default Banner
