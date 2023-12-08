import React from 'react'
import { Container } from 'react-bootstrap'
import './ViewTenent.css'
function ViewTenent() {
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
     <td><a href="/" className='btn btn-primary'>Renew</a></td>
     <td><a href="/" className='btn btn-danger'>Terminate</a></td> 
    </tr>
   
  </tbody>
</table>
    </Container>
    </div>
  )
}

export default ViewTenent
