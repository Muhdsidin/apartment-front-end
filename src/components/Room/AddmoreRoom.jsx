import React,{useEffect,useState, useSyncExternalStore} from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Room.css'
import axios from 'axios';
function AddmoreRoom({setState , state}) {
  const [count , setCount] = useState(0)
  const [data , setData]= useState([])
    const [title, setTitle] = useState("");
  const [prize, setPrize] = useState("");
  const [cat, setCat] = useState("");
  const [total, setTotal] = useState({
    title,
    prize,
    cat
  })
  console.log(state);

  const addMore = ()=>{
    setState((prev)=> prev.push(total))
  }

 


  

  const getBuilddata = async(req,res)=>{
    try {
     const response = await axios("https://apartment-one.vercel.app/get-building")
     console.log(response.data)
     setData(response.data)
     
    }
    
     catch (error) {
     console.log(error)
     alert(error)
    }
   }


  useEffect(()=>{
    var fullUrl = window.location.href;

    var number = fullUrl.substr(fullUrl.lastIndexOf('/') + 1);
    const last = parseInt(number)
    getBuilddata()
    setCount(last)}
    , [])
  //  console.log(res)
 



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
                  onChange={(e)=> setTitle(e.target.value)}
                />
              </Form.Group>
             
              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  required
                  placeholder="Enter The Prize"
                  onChange={(e)=> setPrize(e.target.value)}
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

              <button className='btn-sub' type="submit" >
                Upload
              </button>
              <br />
              <a  onClick={addMore} className='btn-add'>Add more?</a>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>  
    </div>
  )
}

export default AddmoreRoom
