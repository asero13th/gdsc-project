import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, Route, Switch } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
  if (!(localStorage.getItem('isAdmin'))) {
    return (
      <div>
        <h1>Unauthorized Access</h1>
        <p>You must be logged in as an admin to access this page.</p>
        <button onClick={() => navigate('/admin/login')}>Login</button>
      </div>
    );
  }
  
  return (
    <div className=''>
        <Navbar bg="" variant="light">
        <Container className='d-flex justify-content-between'>
        <Navbar.Brand className='logo' href="#home">
      
                
        </Navbar.Brand>
        <Nav className='custom-navigation'>
            <Nav.Link href="/admin/home" className='mx-3'>Home</Nav.Link>
            <Nav.Link href="/admin/project" className='mx-3'>Project</Nav.Link>
            <Nav.Link href="/admin/event" className='mx-3'>event</Nav.Link>
            <Nav.Link href="/admin/sponsor" className='mx-3'>sponsor</Nav.Link>
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