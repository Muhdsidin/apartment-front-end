import React, { useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './UploadBuildings.css'
function UploadBuildings() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState()
  const HandleSubmit = async (e) => {
    try {
      e.preventDefault()
      const formData = new FormData()
      formData.append('name', name)
      formData.append('address', address)
      formData.append('state', state)
      formData.append('city', city)
      formData.append('zip', zip)

      const response = await axios('https://apartment-one.vercel.app/upload-building', {
        method: 'POST',
        Data: formData,

      })
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }


  }
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <div className="BuildingUplodaFormDiv">
              <form onSubmit={HandleSubmit}>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputName">Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      type="text" class="form-control" id="inputName" placeholder="Name"
                    />
                  </div>

                </div>

                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input type="text" class="form-control" id="inputAddress"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    placeholder="1234 Main St" />
                </div>


                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      class="form-control" id="inputCity" />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputState">State</label>
                    <input type="text" class="form-control" id="inputState"
                      value={state}
                      required
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>

                  <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip"
                      required
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                </div>


                <br />
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck"
                    required>
                      Check me out
                    </label>
                  </div>
                </div>
                <br />

                <button type="submit" required class="btn btn-secondary">Upload</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UploadBuildings
