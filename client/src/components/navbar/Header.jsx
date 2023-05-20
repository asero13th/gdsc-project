import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.png"
const Header = () => {
  return (
    <div className=''>
        <Navbar bg="" variant="light">
        <Container className='d-flex justify-content-between'>
        <Navbar.Brand className='logo' href="#home">
            <img src={logo} alt='navigtaion'></img>
              <div>
                <p className='text-muted text-size-12'>Addis Abeba Science and technology <br/>university</p>
              </div>   
        </Navbar.Brand>
        <Nav className='custom-navigation'>
            <Nav.Link href="/home" className='mx-3'>Home</Nav.Link>
            <Nav.Link href="/projects" className='mx-3'>Project</Nav.Link>
            <Nav.Link href="/team" className='mx-3'>Teams</Nav.Link>
            <Nav.Link href="/Events" className='mx-3'>Events</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
        <Container>
            <hr/>
            <br/>
        </Container>
    </div>
  )
}

export default Header