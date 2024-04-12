import React,{useEffect,useState} from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Room.css'
function AddmoreRoom() {
  const [count , setCount] = useState(0)
  useEffect(()=>{var fullUrl = window.location.href;

    var number = fullUrl.substr(fullUrl.lastIndexOf('/') + 1);
    const last = parseInt(number)
    setCount(last)},
    [])
 



console.log(count); 
  return (
    <div>
        <Container style={{marginTop:'7em'}}>
      <Row className="justify-content-center" >
        <Col xs={12} md={8}>
          <div className="div" >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Enter Room NO:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="123"
                  
                  required
                />
              </Form.Group>
             
              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  required
                  placeholder="Enter The Prize"
                  
                />
              </Form.Group>
              <p>Add Room To:-</p>
              <Form.Group className="mb-3" controlId="formBasicCat">
                <Form.Label>Select Category</Form.Label>
                <Form.Control
                  as="select"
                 
                >
                 
                  
                </Form.Control>
              </Form.Group>


            

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"  required />
              </Form.Group>

              <button className='btn-sub' type="submit" >
                Upload
              </button>
              <br />
              <a href={`/addmore/${count + 1}`} className='btn-add'>Add more?</a>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>  
    </div>
  )
}

export default AddmoreRoom
