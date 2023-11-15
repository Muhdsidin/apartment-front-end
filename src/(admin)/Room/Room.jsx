import React, { useState } from 'react';
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
  const [cat, setCate] = useState("");
 /* const [imageOne, setImageOne] = useState("");
  const [imageTwo, setImageTwo] = useState("");
  const [imageThree, setImageThree] = useState("");*/

  const handleSubmit = async(event) => {
    try {
      event.preventDefault();
    const formData = new FormData()
    //formData.append("images", imageOne)
    formData.append("title", title)
    formData.append("prize", prize)
    // Add your form submission logic here

    const response = await axios("https://apartment-one.vercel.app/upload",{
      method:"POST",
      data: formData,
      headers : {
        "Content-Type":"multipart/form-data"
      },
    })
    console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  };
  console.log(imageOne)

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
