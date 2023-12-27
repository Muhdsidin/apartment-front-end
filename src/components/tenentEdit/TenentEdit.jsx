import React,{useEffect, useState} from 'react'
import './TenentEdit.css'
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';
import  Container  from 'react-bootstrap/Container';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
function TenentEdit() {
  const {id } = useParams()
    const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [state,setState]=useState('')
  const [country,setCountry]=useState('')
  const [from,setFrom]=useState()
  const [city,setCity]=useState('')
  const [data , setData] = useState({})

  const getPecieficTannente = async()=>{
    const response = await axios("http://localhost:3000/get-specific-tannent",{
      method:"GET",
      headers:{
         id
      }
    })
    console.log(response.data)
    setData(response.data)
  }

  useEffect(()=>{
   getPecieficTannente()
  },[])

  const edittenent =async()=>{
    const response = await axios("http://localhost:3000/update-tannent",{
      method:"POST",
      data:{
        name,
        country,
        state,
        TannentId:id
      }
    })
  }
  
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
                     value={name ? name : data.name}
                     onChange={(e)=>setName(e.target.value)}
                      required
                    />
                  </div>
                  
                </div>

                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input type="text" class="form-control" id="inputAddress"
                    value={address? address : data.address}
                    onChange={(e)=>setAddress(e.target.value)}
                    required
                    placeholder="1234 Main St" />
                </div>
                <div class="form-group">
                  <label for="inputAddress">Country</label>
                  <input type="text" class="form-control" id="inputAddress"
                    value={country?country : data
                    .country}
                    onChange={(e)=>setCountry(e.target.value)}
                    required
                    placeholder="1234 Main St" />
                </div>



                <div class="form-row">
                
               
                  <div class="form-group col-md-6">
                    <label for="inputState">State</label>
                    <input type="text" class="form-control" id="inputState"
                   value={state?state:data.state}
                   onChange={(e)=>setState(e.target.value)}

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
