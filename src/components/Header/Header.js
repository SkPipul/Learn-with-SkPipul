import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='fw-bold'><Link className='text-decoration-none text-white' to='/'>Learning with SkPipul</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link><Link className='text-decoration-none text-white' to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-white' to='/courses'>Courses</Link></Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link><Link className='text-decoration-none text-white' to='/login'>Login</Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign Up
            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
            <SideBar></SideBar>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;