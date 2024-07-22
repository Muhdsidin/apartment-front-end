import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './UploadBuildings.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function UploadBuildings() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios('https://apartment-one.vercel.app/upload-building', {
        method: 'POST',
        data: {
          name,
          zip,
          state,
          address,
          city
        }
      });
      console.log(response.data);
      toast.success('uploaded Redirecting ');
      setTimeout(() => {
        
        navigate('/viewrooms');
      },5000)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="upload-buildings">
      <Container style={{ marginTop: '7em' }}>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <div className="building-upload-form-div">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputName">Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    placeholder="1234 Main St"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputState">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputState"
                      value={state}
                      required
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>

                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputZip"
                      required
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                </div>

                <br />
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      required
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <br />

                <button type="submit" className="btn-submit" style={{background:"white"}}>
                  Upload Building
                </button>
              </form>
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default UploadBuildings;
