import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './ViewTenent.css'
import axios from 'axios'
function ViewTenent() {
  const [data , setData] = useState([])
  const fetchBooked =async ()=>{
    const response = await axios("http://localhost:3000/get-all-book")
    console.log(response.data)
    setData(response.data)
  }

  useEffect(()=>{
    fetchBooked()
  },[]) 

  const terminateTannent = async(id)=>{
    const response = await axios("http://localhost:3000/terminate",{
      method:"POST",
      data:{
        BookId : id
      }
    })
    setData(response.data)
  }
  return (
    <div className='table-main'>
      
    <Container style={{marginTop:'11em'}}>
    <div class="input-group">
  <div class="form-outline" data-mdb-input-init>
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary" data-mdb-ripple-init>
    <i class="fas fa-search"></i>
  </button>
</div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Option1</th>
      <th scope="col">Option2</th>
    </tr>
  </thead>
  <tbody>
   {data.map((val)=>(
     <tr>
     <th scope="row">1</th>
     <td>{val.name}</td>
     <td>{val.state}</td>
     <td>@mdo</td>
    <td><a href="/" className='btn btn-primary'>Renew</a></td>
    <td><button className='btn btn-danger' onClick={()=>terminateTannent(val._id)}>Terminate</button></td> 
   </tr>
   ))}
   
  </tbody>
</table>
    </Container>
    </div>
  )
}

export default ViewTenent
