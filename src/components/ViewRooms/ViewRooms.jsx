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

  const DeleteBuilding = async (id)=>{
    console.log(id)
    const response = await axios("http://localhost:3000/delete-building",{
      method:"POST",
      data:{
        BuildId : id
      }
    })
    setBuild(response.data)
  }

     useEffect(()=>{ 
      getBuilddata()
     },[])
  return (
    <div className="">
<div className="building-item room-items">
     <Container style={{ width: '8em', marginTop: '10em' }}>
  
  <Row>
    {build.map((val) => (
      <div  key={val._id} className="center-container">
        <a href={`/building/${val._id}`} className="building-1" data-aos='zoom-in'>
          
          <li>{val.name}</li>
          
        </a>
        <button className="delete-building btn btn-danger" data-aos='zoom-in' onClick={()=> DeleteBuilding(val._id)}>
          Delete:{val.name}
          </button>
          <a href={`/buildingedit/${val._id}`} className="delete-building btn btn-primary" data-aos='zoom-in'>
          Edit:{val.name}
          </a>
          
      </div>
      
    ))}
  </Row>
  
</Container>


    </div>
    <br />
    <br />
    </div>
    
   
  )
}

export default ViewRooms
