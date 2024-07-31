import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './Terminated.css'; // Make sure to create this CSS file and add the styles below

function Terminated() {
  const [data, setData] = useState([]);
  const [loading , setLoading] = useState(false)

  const terminateTannent = async () => {
    setLoading(true)
    try {
      const response = await axios.post("https://apartment-one.vercel.app/get-delete");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false)
  };

  useEffect(() => {
    terminateTannent();
  }, []);

  if (loading) {
    return <div style={{marginTop:"300px",textAlign:"center",color:"white"}}>Loading...</div>;
  }
  return (
    
    <div className='terminated' style={{marginTop:"100px"}}>
      <div className='tb'>
        <h2 className='heading-renew'>Terminated Tenants</h2>
        <Table striped bordered hover variant="dark" className="custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>ID</th>
              <th>Room No</th>
              <th>Address</th>
              <th>Region</th>
              <th>Country</th>
              <th>State</th>
              <th>From</th>
              <th>To</th>
              <th>Terminated</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              item.Deleted_tannent.map((tenant, innerIndex) => (
                <tr key={`${index}-${innerIndex}`}>
                  <td>{index + 1}</td>
                  <td>{tenant.name}</td>
                  <td>{tenant._id}</td>
                  <td>{tenant.roomNo}</td>
                  <td>{tenant.address}</td>
                  <td>{tenant.region}</td>
                  <td>{tenant.country}</td>
                  <td>{tenant.state}</td>
                  <td>{tenant.from}</td>
                  <td>{tenant.to}</td>
                  <td>{tenant.terminate.toString()}</td>
                </tr>
              ))
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  
  );
}

export default Terminated;
