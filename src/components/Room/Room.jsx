import React, { useState , useEffect } from 'react';
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

    const response = await axios("https://apartment-one.vercel.app/upload",{
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
    const response = await axios("https://apartment-one.vercel.app/get-building")
    console.log(response.data)
    setData(response.data)
    alert('Room Added successfully')
   } catch (error) {
    console.log(error)
    alert(error)
   }
  }

useEffect(() => {
getBuilddata()
}, [])

console.log(cat)
 

  return (
    <Container style={{marginTop:'7em'}}>
      <Row className="justify-content-center" >
        <Col xs={12} md={8}>
          <div className="div" >
            <Form onSubmit={handleSubmit}>
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
              {/*<Form.Group className="mb-3" controlId="formBasicRoomNumber">
                <Form.Label>Room number</Form.Label>
                <Form.Control
                  type="number"
                  required
                  placeholder="Enter The Room Number"
                
                  onChange={(e) => setRoomNumber(e.target.value)}
                />
  </Form.Group>*/}

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
                  {data.map((val)=>(
                    
                  <option value={val._id}>{val.name}</option>
                   
                  ))}
                  
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
  );
}

export default Room;
