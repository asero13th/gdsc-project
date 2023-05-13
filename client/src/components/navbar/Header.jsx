import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.png"
const Header = () => {
  return (
    <div>
        <Navbar bg="" variant="light">
        <Container className='d-flex justify-content-between'>
        <Navbar.Brand className='logo' href="#home">
            <img src={logo} alt='navigtaion'></img>
        </Navbar.Brand>
        <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#teams">Teams</Nav.Link>
            <Nav.Link href="#Events">Events</Nav.Link>
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