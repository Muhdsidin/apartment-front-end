import React from 'react'
import './Banner.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Banner() {
  const style={
    box3:{
      color: '#FFF',
      transition: 'all 0.5s',
      position: 'relative',

    }

  }
  return (
    <div>
     <Container>
      <Row className="justify-content-center">
      <a href="/buildings" className='box-3 btn btn-secondary' style={{ marginTop: '4em',width:'10em'
    }} >Upload Buildings</a>
      
 
      </Row>
      
      <Row className="justify-content-center">
      <a href="/room" className='box-3 btn btn-secondary' style={{ marginTop: '1em',width:'10em' }}>Upload Rooms</a>
      </Row>
     </Container>
     
     
   
    </div>
  
  )
}
export default Banner
