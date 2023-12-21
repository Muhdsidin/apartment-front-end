import React,{useState} from 'react'

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function EditRooms() {

    
  const [title, setTitle] = useState("");
  const [prize, setPrize] = useState("");
  const [cat, setCat] = useState("");
 
  return (
    <div>
      <Container style={{marginTop:'7em'}}>
      <Row className="justify-content-center" >
        <Col xs={12} md={8}>
          <div className="div" >
            <Form >
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Enter Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </Form.Group>
             
              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  required
                  placeholder="Enter The Prize"
                  value={prize}
                  
                  onChange={(e) => setPrize(e.target.value)}  
                />
              </Form.Group>
              <p>Add Room To:-</p>
              <Form.Group className="mb-3" controlId="formBasicCat">
                <Form.Label>Select Category</Form.Label>
                <Form.Control
                  as="select"
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                >
                 
                  
                </Form.Control>
              </Form.Group>


            

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"  required />
              </Form.Group>

              <button className='btn-sub' type="submit">
                Upload
              </button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default EditRooms
