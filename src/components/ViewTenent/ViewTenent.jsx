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
   
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">country</th>
      <th scope="col">state</th>
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
     <td>{val.address}</td>
     <td>{val.country}</td>
     <td>{val.state}</td>
     
    <td><a href="/edittenent" className='btn btn-primary'>Renew</a></td>
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
