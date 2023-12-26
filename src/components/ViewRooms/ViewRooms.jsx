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
    <div className="building-item">
     <Container style={{ width: '8em', marginTop: '10em' }}>
  <Row>
    {build.map((val) => (
      <div  key={val._id}>
        <a href={`/building/${val._id}`} className="building-1" data-aos='zoom-in'>
          
          <li>{val.name}</li>
          
        </a>
        <a href="" className="delete-building btn btn-danger" data-aos='zoom-in'>
          Delete:{val.name}
          </a>
          <a href="/buildingedit" className="delete-building btn btn-primary" data-aos='zoom-in'>
          Edit:{val.name}
          </a>
          
      </div>
      
    ))}
  </Row>
  
</Container>

      
    </div>
  )
}

export default ViewRooms
