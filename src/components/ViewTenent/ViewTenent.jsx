import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './ViewTenent.css'
import axios from 'axios'
function ViewTenent() {
  const [data , setData] = useState([])
  const [input , setInput ] = useState("")
  const [searchdata , setSearchData] = useState()

  const fetchBooked =async ()=>{
    const response = await axios("https://apartment-one.vercel.app/get-all-book")
    console.log(response.data)
    setData(response.data)
  }

  useEffect(()=>{
    fetchBooked()
  },[]) 

  const terminateTannent = async(id)=>{
    const response = await axios("https://apartment-one.vercel.app/terminate",{
      method:"POST",
      data:{
        BookId : id
      }
    })
    setData(response.data)
  }

  const search = async()=>{
    const response = await axios(`https://apartment-one.vercel.app/${input}`)
    console.log(response.data)
    setSearchData(response.data)
    setInput("")
  }

  
  return (
    <div className='table-main'>
      
    <Container style={{marginTop:'11em'}}>

      <input type="text" onChange={(e)=> setInput(e.target.value)} />
      <button onClick={search} value={input}> Search</button>
   
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">country</th>
      <th scope="col">state</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Total</th>
      <th scope="col">Option1</th>
      <th scope="col">Option2</th>
    </tr>
  </thead>
  <tbody>


    {searchdata?   <tr>
     <th scope="row">1</th>
     <td>{searchdata.name}</td>
     <td>{searchdata.address}</td>
     <td>{searchdata.country}</td>
     <td>{searchdata.state}</td>
     
     <td>{searchdata.from}</td>
     <td>{searchdata.to}</td>
     <td>{searchdata.total}</td>
     
    <td><a href={`/edittenent/${searchdata._id}`} className='btn btn-primary'>Renew</a></td>
    <td><button className='btn btn-danger' onClick={()=>terminateTannent(searchdata._id)}>Terminate</button></td> 
   </tr>
    :  
    
    data.map((val)=>(
     <tr>
     <th scope="row">1</th>
     <td>{val.name}</td>
     <td>{val.address}</td>
     <td>{val.country}</td>
     <td>{val.state}</td>
     
     <td>{val.from}</td>
     <td>{val.to}</td>
     <td>{val.total}</td>
     
    <td><a href={`/edittenent/${val._id}`} className='btn btn-primary'>Renew</a></td>
    <td><button className='btn btn-danger' onClick={()=>terminateTannent(val._id)}>Terminate</button></td> 
   </tr>
   )) }

   
  </tbody>
</table>
    </Container>
    </div>
  )
}

export default ViewTenent
