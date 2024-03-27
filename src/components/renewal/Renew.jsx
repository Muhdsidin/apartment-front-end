import React from 'react'
import './Renew.css'
import Table from 'react-bootstrap/Table';
function Renew() {
  return (
    
    <div className='tb'>
        <h2 className='heading-renew'>Renewed Tenents</h2>
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
          <td>Mark</td>
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
  )
}

export default Renew
