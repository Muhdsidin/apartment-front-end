import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import './ViewRooms.css';
import { Col } from 'react-bootstrap';

function ViewRooms() {
  const [build, setBuild] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getBuilddata = async () => {
    try {
      const response = await axios("https://apartment-one.vercel.app/get-building");
      console.log(response.data);
      setBuild(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteBuilding = async (id) => {
    const userConfirmed = window.confirm("Are you sure you want to delete this building?");
    
    if (userConfirmed) {
      console.log(id);
      const response = await axios("https://apartment-one.vercel.app/delete-building", {
        method: "POST",
        data: {
          BuildId: id
        }
      });
      setBuild(response.data);
      console.log("Building deleted successfully");
    } else {
      console.log("Building deletion cancelled");
    }
  };

  const DeleteRoom = async (roomId) => {
    const userConfirmed = window.confirm("Are you sure you want to delete this room?");
  
    if (userConfirmed) {
      console.log(roomId);
      try {
        const response = await axios("https://apartment-one.vercel.app/delete-room", {
          method: "POST",
          data: {
            roomId
          }
        });
        location.reload();
        console.log("Room deleted successfully");
      } catch (error) {
        console.error("Error deleting room:", error);
      }
    } else {
      console.log("Room deletion cancelled");
    }
  };

  useEffect(() => {
    getBuilddata();
  }, []);

  // Filter buildings based on search query
  const filteredBuildings = build.filter(val => 
    val.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="view-rooms" style={{ marginTop: "100px" }}>
      <div className="building-item room-items">
        <div className="input-group">
          <div className="form-outline" data-mdb-input-init>
            <input 
              type="search" 
              style={{ width: "400px" }} 
              id="form1" 
              className="form-control" 
              placeholder="Search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-dark" data-mdb-ripple-init>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
        <Container className="buildings-container">
          <Row>
            {filteredBuildings.map((val) => (
              <Col key={val._id}>
                <div className="center-container">
                  <a href={`/building/${val._id}`} className="building-1" data-aos="zoom-in">
                    <li>{val.name}</li>
                  </a>
                  <br />
                  <b onClick={() => DeleteBuilding(val._id)}>
                    <a className="delete-building btn" data-aos="zoom-in">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash text-white" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </a>
                  </b>
                  <a href={`/buildingedit/${val._id}`} className="edit-building btn" data-aos="zoom-in">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen text-white" viewBox="0 0 16 16">
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                    </svg>
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <br />
      <br />
    </div>
  );
}

export default ViewRooms;
