import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SignupModal from './index page/signupModel';
import LoginModal from './index page/loginModel';

function NavDel({ onLogin }) {
  const handleLogin = (category) => {
    onLogin(category);
  };
  return (
    <Navbar  collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Servant Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/ourServices">Our **</Nav.Link>
            <Nav.Link href="/ourTeam">About $$$$</Nav.Link>
            <Nav.Link href="/reachUs">Reach Us</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Item style={{marginRight: '10%'}}><SignupModal /></Nav.Item>
            <Nav.Item><LoginModal onLogin={handleLogin} /></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavDel;
