import React from 'react'
import Row from 'react-bootstrap/Row';
import './ViewRooms.css'
import  Container  from 'react-bootstrap/Container';
function ViewRooms() {
  return (
    <div>
      <Container style={{width:'8em',marginTop:'5em'}}>
        <Row>
        <a href="/building1" data-aos='zoom-in' className='building-1'>Buildind-1</a>
        </Row>
      </Container>
      
    </div>
  )
}

export default ViewRooms
