import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import  Container  from 'react-bootstrap/Container';
import axios from 'axios';
import './Booknow.css'
import { useParams,useNavigate } from 'react-router-dom';
function Booknow() {
  const {id} = useParams()
  const [name , setName] = useState("")
  const [address , setAddress] = useState("")
  const [country , setCountry] = useState("")
  const [state , setState] = useState("")
  const [from,setFrom]=useState()
  const [to,setTo]=useState()
  const navigate = useNavigate()
  const HandleForm = async(e)=>{
   
    try {
      e.preventDefault();
      const response =await axios("https://apartment-one.vercel.app/book-now",{
        method:"POST",
        data:{
          name,
          address,
          to,
          from,

          country,
          state,
          RoomId : id
        }

      })
      console.log(response.data)
      alert('Tenent Added suucessfully')
      navigate(`/success/${response.data._id}`)

    } catch (error) {
      console.log(error)
      alert(error)
    }
  }
  return (
    <div>
      <Container style={{marginTop:'7em'}}>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <div className="BuildingUplodaFormDiv">
              <form onSubmit={HandleForm}>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputName">Full Name</label>
                    <input
                      type="text" class="form-control" id="inputName" placeholder="Name"
                      onChange={(e)=> setName(e.target.value)}
                      required
                    />
                  </div>
                  <br />
                  <div class="form-group">
                
                  <input type="text" class="form-control" id="inputRoom"
                    placeholder='Room No:000'
                    value={id}

                    required
                  />
                </div>
                <br />
                <div class="form-group">
                
                  <input type="text" class="form-control" id="inputRoom"
                    placeholder='Building:xxx'
                    disabled

                 
                  />
                </div>
<br />
                </div>

                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input type="text" class="form-control" id="inputAddress"
                    onChange={(e)=> setAddress(e.target.value)}
                    required
                    placeholder="1234 Main St" />
                </div>



                <div class="form-row">
                
                  <div class="form-group col-md-6">
                    <label for="inputCity">Country</label>
                    <input type="Text"
                      required
                      class="form-control" id="inputCity"
                      onChange={(e)=> setCountry(e.target.value)}
                      />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputState">State</label>
                    <input type="text" class="form-control" id="inputState"
                     onChange={(e)=> setState(e.target.value)}
                     required
                    />
                  </div>
                  <br />
                  <div class="form-group">
                
                  <input type="text" class="form-control" id="inputRoom"
                  
                    value={from}
onChange={(e)=>setFrom(e.target.value)}
                    required
                  />
                </div> <br />
                  <div class="form-group">
                
                  <input type="text" class="form-control" id="inputRoom"
                    placeholder='Room No:000'
                    value={to}
                    onChange={(e)=>setTo(e.target.value)}

                    required
                  />
                </div>

                 
                </div>


                <br />
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck"
                    required>
                      Terms And Condion*
                    </label>
                  </div>
                </div>
                <br />

                <button type="submit" required class="btn-submit">Add</button>
              
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Booknow
