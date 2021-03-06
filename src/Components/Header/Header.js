import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Header = () => {

  const { user, logout } = useFirebase()




  return (
    <>
      <Fade left cascade>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
            <Zoom left cascade>
              <Navbar.Brand as={Link} to="/home#home">Deshi Restaurant</Navbar.Brand>
              <Navbar.Toggle className='nav-toggole' />
              <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/signUp">Sign Up</Nav.Link>
                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>

                {
                  user?.email ?
                    <Button onClick={logout}>Logout</Button>
                    :
                    <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                }


                <Navbar.Text className="ms-3" >
                  Signed in as: <img className="sign-pic " src={user?.photoURL} alt="" />
                </Navbar.Text>
              </Navbar.Collapse>
            </Zoom>





          </Container>
        </Navbar>
      </Fade>



      <br />

    </>
  );
};

export default Header;