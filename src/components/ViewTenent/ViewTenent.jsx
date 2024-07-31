import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./ViewTenent.css";
import axios from "axios";
import Table from 'react-bootstrap/Table';


function ViewTenent() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [searchdata, setSearchData] = useState();
  var total = data.from - data.to
  console.log(total)

  const fetchBooked = async () => {
    const response = await axios(
      "https://apartment-one.vercel.app/get-all-book"
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetchBooked();

  }, []);

  const terminateTannent = async (id) => {
    const response = await axios("https://apartment-one.vercel.app/delete-tanennt", {
      method: "POST",
      data: {
        id,
      },
    });

  };

  const search = async () => {
    const response = await axios(`https://apartment-one.vercel.app/${input}`);
    console.log(response.data);
    setSearchData(response.data);
    setInput("");
  };
  console.log(data);

  return (
    <div className="table-main">
      <Container style={{ marginTop: "11em" }}>
        {/* <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={search} value={input}>
          {" "}
          Search
        </button> */}
        {/* <form class="d-flex sr">
        <input class="form-control me-2" onChange={(e) => setInput(e.target.value)}  type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit" onClick={search} value={input}>
          {" "}Search</button>
      </form> */}
        <Table striped bordered hover variant="dark" className="custom-table">
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

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><a href=''>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pen"
                  viewBox="0 0 16 16"

                >
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                </svg>
              </a></td>
              <td>
                <a className="delete-room">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash trsh"
                    viewBox="0 0 16 16"
                    style={{ cursor: "pointer",color:'red' }}
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                </a>
              </td>
            </tr> 
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ViewTenent;
