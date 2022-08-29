import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MdLocalOffer } from 'react-icons/md';

function TopBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <h5 className='text-light'>
            <MdLocalOffer className='text-warning' />
            &nbsp; &nbsp; Visit Home Town 
          </h5>
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/terms and conditions" activeClassName>
              <Nav.Link>Terms and Conditions</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login" activeClassName>
              <Nav.Link>login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;