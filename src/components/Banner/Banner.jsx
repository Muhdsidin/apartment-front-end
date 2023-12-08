import React from 'react'
import './Banner.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Banner() {
  
  return (
    <div>
     <Container style={{marginTop:'5em'}}>
      <Row className="justify-content-center">
      <a href="/buildings" className='box-3 ' data-aos='zoom-in' data-aos-duration="2500" style={{ marginTop: '4em',width:'10em'
    }} >Upload Buildings</a>
      
 
      </Row>
      
      <Row className="justify-content-center">
      <a href="/room" className='box-3' data-aos='fade-up'data-aos-duration="3000" style={{ marginTop: '1em',width:'10em' }}>Upload Rooms</a>
      </Row>
      <Row className="justify-content-center">
      <a href="/viewrooms" className='box-3'  data-aos='fade-up' style={{ marginTop: '1em',width:'10em' }}>View Rooms</a>
      </Row>
      <Row className="justify-content-center">
      <a href="/ViewTenent" className='box-3'  data-aos='fade-up' style={{ marginTop: '1em',width:'10em' }}>ViewTenents</a>
      </Row>
      

    
     </Container>
     
     
   
    </div>
  
  )
}
export default Banner
