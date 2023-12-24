import React,{useState} from 'react'
import './TenentEdit.css'
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';
import  Container  from 'react-bootstrap/Container';
import axios from 'axios';
function TenentEdit() {
    const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [state,setState]=useState('')
  const [country,setCountry]=useState('')
  const [from,setFrom]=useState()
  const [city,setCity]=useState('')
  
  return (
    <div>
       
      <Container style={{marginTop:'7em'}}>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <div className="BuildingUplodaFormDiv">
              <form >
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputName">Name</label>
                    <input
                      type="text" class="form-control" id="inputName" placeholder="Name"
                     value={name}
                     onChange={(e)=>setName(e.target.value)}
                      required
                    />
                  </div>
                  
                </div>

                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input type="text" class="form-control" id="inputAddress"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    required
                    placeholder="1234 Main St" />
                </div>
                <div class="form-group">
                  <label for="inputAddress">Country</label>
                  <input type="text" class="form-control" id="inputAddress"
                    value={country}
                    onChange={(e)=>setCountry(e.target.value)}
                    required
                    placeholder="1234 Main St" />
                </div>



                <div class="form-row">
                
               
                  <div class="form-group col-md-6">
                    <label for="inputState">State</label>
                    <input type="text" class="form-control" id="inputState"
                   value={state}
                   onChange={(e)=>setState(e.target.value)}

                     required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputState">City</label>
                    <input type="text" class="form-control" id="inputState"
                   value={city}
                   onChange={(e)=>setCity(e.target.value)}
                   
                     required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputState">From</label>
                    <input type="text" class="form-control" id="inputState"
                   value={from}
                   onChange={(e)=>setFrom(e.target.value)}
                   
                     required
                    />
                  </div>

                 
                </div>


             
                <br />

                <button type="submit" required class="btn-submit">Edit</button>
              
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TenentEdit
