import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar  expand="lg" variant="dark" style={{background:'#BC986A'}}>
      <Container>
        <Navbar.Brand href="/real/admin">Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" className="text-white text-decoration-none">Home</Link></Nav.Link>
            <Nav.Link><Link to="/room" className="text-white text-decoration-none">Upload Rooms</Link></Nav.Link>
            <Nav.Link><Link to="/buildings" className="text-white text-decoration-none">Upload building</Link></Nav.Link>
            <Nav.Link><Link to="/all-building" className="text-white text-decoration-none">All building</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
