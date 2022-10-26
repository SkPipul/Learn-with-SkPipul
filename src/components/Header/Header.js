import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import { AuthContext } from '../UserContext/UserContext';
import { BsFillEmojiSunglassesFill } from "react-icons/bs";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='fw-bold'><Link className='text-decoration-none text-warning fs-4' to='/'><BsFillEmojiSunglassesFill className='mb-1'></BsFillEmojiSunglassesFill> Learning with SkPipul</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link><Link className='text-decoration-none text-white' to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-white' to='/courses'>Courses</Link></Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link>{
              user?.uid ? <Link onClick={logOut} className='text-decoration-none text-white'>Logout</Link>
              :
              <Link className='text-decoration-none text-white' to='/login'>Login</Link>}</Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-white' to='/register'>Register</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-white' to='/blog'>Blog</Link></Nav.Link>
          </Nav>
          <div className='d-lg-none'>
            <SideBar></SideBar>
          </div>
        </Navbar.Collapse>
        <span>{user?.email}</span>
      </Container>
    </Navbar>
  );
};

export default Header;