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
    const response = await axios("https://apartment-one.vercel.app/delete-building",{
      method:"POST",
      data:{
        BuildId : id
      }
    })
    setBuild(response.data)
    console.log("hello wolrd ")
  }

     useEffect(()=>{ 
      getBuilddata()
     },[])
  return (
    <div className="">
      
    <div className="building-item room-items">
    <div class="input-group">
  <div class="form-outline" data-mdb-input-init>
    <input type="search" id="form1" class="form-control" placeholder='search'/>
  
  </div>
  <button type="button" class="btn btn-primary" data-mdb-ripple-init  >
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" >
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
  </button>
</div>
         <Container style={{ width: '8em', marginTop: '10em' }}>
        
      <Row>
        {build.map((val) => (
          <div  key={val._id} className="center-container">
            <a href={`/building/${val._id}`} className="building-1" data-aos='zoom-in'>
              
              <li>{val.name}</li>
              
            </a>
            <b onClick={()=> DeleteBuilding(val._id)}>
          

            <a className="delete-building btn" data-aos='zoom-in' >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
    </svg>
              </a>
            </b>
              <a href={`/buildingedit/${val._id}`} className="delete-building btn" data-aos='zoom-in'> edit 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
    </svg>
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
