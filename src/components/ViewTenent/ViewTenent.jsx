import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./ViewTenent.css";
import axios from "axios";



function ViewTenent() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [searchdata, setSearchData] = useState();

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
    const response = await axios("https://apartment-one.vercel.app/terminate", {
      method: "POST",
      data: {
        BookId: id,
      },
    });
    setData(response.data);
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
        <form class="d-flex sr">
        <input class="form-control me-2" onChange={(e) => setInput(e.target.value)}  type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit" onClick={search} value={input}>
          {" "}Search</button>
      </form>
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
            {searchdata ? (
              <tr>
                <th scope="row">1</th>
                <td>{searchdata.name}</td>
                <td>{searchdata.address}</td>
                <td>{searchdata.country}</td>
                <td>{searchdata.state}</td>

                <td>{searchdata.from}</td>
                <td>{searchdata.to}</td>
                <td>{searchdata.total}</td>

                <td>
                  <a
                    href={`/edittenent/${searchdata._id}`}
                    className="btn btn-primary"
                  >
                    Renew
                  </a>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => terminateTannent(searchdata._id)}
                  >
                    Terminate
                  </button>
                </td>
              </tr>
            ) : (
              data.map((val) => (
                <tr>
                  {val.terminate ? (
                    <strike>
                      <th scope="row" className="">
                        1
                      </th>{" "}
                      <td>{val.name}</td>
                      <td>{val.address}</td>
                      <td>{val.country}</td>
                      <td>{val.state}</td>
                      <td>{val.from}</td>
                      <td>{val.to}</td>
                      <td>{val.total}</td>
                    </strike>
                  ) : (
                    <>
                    <th scope="row" className="">
                      1
                    </th>
                  
                  
                  <td>{val.name}</td>
                  <td>{val.address}</td>
                  <td>{val.country}</td>
                  <td>{val.state}</td>

                  <td>{val.from}</td>
                  <td>{val.to}</td>
                  <td>{val.total}</td>

                  <td>
                   
                    <a href={`/edittenent/${val._id}`}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8"/></svg></a>
                  </td>
                  <td>
                    {/* <button
                      className="btn btn-danger"
                      onClick={() => terminateTannent(val._id)}
                    >
                      Terminate
                    </button> */}
       <svg onClick={()=> terminateTannent(val._id)} className="ter" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>

                  </td>
                  </>
                )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default ViewTenent;
