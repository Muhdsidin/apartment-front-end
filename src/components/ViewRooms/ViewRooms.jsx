import React,{useEffect, useState} from 'react'
import Row from 'react-bootstrap/Row';
import './ViewRooms.css'
import  Container  from 'react-bootstrap/Container';
import axios from 'axios';
function ViewRooms() {
  const [build , setBuild ] = useState([])
  const getBuilddata = async(req,res)=>{
      try {
       const response = await axios("https://apartment-one.vercel.app/get-building")
       console.log(response.data)
       setBuild(response.data)
      } catch (error) {
       console.log(error)
      }
     }

     useEffect(()=>{ 
      getBuilddata()
     },[])
  return (
    <div>
     <Container style={{ width: '8em', marginTop: '10em' }}>
  <Row>
    {build.map((val) => (
      <div className="building-item" key={val._id}>
        <a href={`/building/${val._id}`} className="building-1">
          
          <li>{val.name}</li>
          
        </a>
        <a href="" className="delete-building btn btn-danger">
          Delete:
          </a>
          <a href="" className="delete-building btn btn-primary">
          Edit:
          </a>
          
      </div>
      
    ))}
  </Row>
  
</Container>

      
    </div>
  )
}

export default ViewRooms
