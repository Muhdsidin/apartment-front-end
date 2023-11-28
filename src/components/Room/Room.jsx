import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Room.css';
import axios from 'axios'

function Room() {
  const [title, setTitle] = useState("");
  const [prize, setPrize] = useState("");
  const [cat, setCat] = useState("");
  const [data , setData] = useState([])
 /* const [imageOne, setImageOne] = useState("");
  const [imageTwo, setImageTwo] = useState("");
  const [imageThree, setImageThree] = useState("");*/

  const handleSubmit = async(event) => {
    try {
      event.preventDefault();
    const formData = new FormData()
    //formData.append("images", imageOne)

    // Add your form submission logic here

    const response = await axios("http://localhost:3000/upload",{
      method:"POST",
      data: {
        title,
        prize,
        buildingId : cat
      },
     
    })
    console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  const getBuilddata = async(req,res)=>{
   try {
    const response = await axios("http://localhost:3000/get-building")
    console.log(response.data)
    setData(response.data)
   } catch (error) {
    console.log(error)
   }
  }

useEffect(() => {
getBuilddata()
}, [])

console.log(cat)

 

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <div className="div">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Prize</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter The Prize"
                  value={prize}
                  onChange={(e) => setPrize(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCat">
                <Form.Label>Select Category</Form.Label>
                <Form.Control
                  as="select"
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                >
                  {data.map((val)=>(
                    
                  <option value={val._id}>{val.name}</option>
                   
                  ))}
                  
                </Form.Control>
              </Form.Group>

            

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Room;
