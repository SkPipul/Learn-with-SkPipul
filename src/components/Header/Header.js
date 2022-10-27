import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import { AuthContext } from '../UserContext/UserContext';
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import './Header.css'
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='fw-bold'><Link className='text-decoration-none text-warning fs-4' to='/'><BsFillEmojiSunglassesFill className='mb-1'></BsFillEmojiSunglassesFill> Learning with SkPipul</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link><Link className='text-decoration-none text-white' to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-white' to='/courses'>Courses</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-white' to='/faq'>FAQ</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-white' to='/blog'>Blog</Link></Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link><Link className='text-decoration-none text-white' to='/register'>Register</Link></Nav.Link>
            <Nav.Link>{
              user?.uid ? <> <Link onClick={logOut} className='text-decoration-none text-white'>Logout</Link>
                <> <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">{user.displayName}</Tooltip>}>
                  <img className='nav-logo rounded-circle mx-2' src={user?.photoURL} alt="" />
                </OverlayTrigger>
                </>
              </>

                :
                <Link className='text-decoration-none text-white' to='/login'>Login</Link>}</Nav.Link>
            <Nav.Link>
              
            </Nav.Link>
            <Form>
              <Form.Check className='ms-3 mt-2'
                type="switch"
                id="custom-switch"
              />
            </Form>
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