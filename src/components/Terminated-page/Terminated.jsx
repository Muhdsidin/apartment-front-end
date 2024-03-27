import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from "axios";
function Terminated() {
const [data,setData]=useState([])
    const terminateTannent = async (id) => {
        const response = await axios("https://apartment-one.vercel.app/terminate", {
          method: "POST",
          data: {
            BookId: id,
          },
        });
        setData(response.data);
      };
    
  return (
    <div>
 
       <div className='tb'>
        <h2 className='heading-renew'>Terminated Tenents</h2>
       
         
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Id</th>
          <th>Occupatents</th>
          <th>Building</th>
          <th>Room</th>
          <th>From</th>
          <th>To</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td>Otto</td>
          <td>@mdo</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
       

      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Terminated

