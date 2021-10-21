import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'

const Header = () => {

  const {user,logout}=useFirebase()




    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand as={Link} to="/home#home">Deshi Restaurant</Navbar.Brand>
          <Nav className="ms-auto">
           
            {
              user?.email?
              <Button onClick={logout}>Logout</Button>
             :
              <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            }
           
            <Nav.Link as={Link} to="/signUp">Sign Up</Nav.Link>


          
          </Nav>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Signed in as: <img className="sign-pic" src={user?.photoURL} alt="" />
                </Navbar.Text>
              </Navbar.Collapse>
            
                </Container>
              </Navbar>
     
      
        <br />
        
      </>
    );
};

export default Header;