import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function NavBarAdmin() {
React.useEffect(()=>{
  if(localStorage.getItem("active_user_email"))
  return;
  else
  navigate("/");
});
    var doLogout=()=>{
        localStorage.removeItem("active_user_email");
        localStorage.removeItem("active_user_token");
        navigate('/');
      }

 var navigate = useNavigate();
  return (
    <Navbar  collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={()=>{navigate("/")}}>Servant Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/admin")}}><b>Dash-Board</b></Nav.Link>
            <Nav.Link onClick={()=>{navigate("/seekerAdmin")}}><b>Users-Info</b></Nav.Link>
            <Nav.Link onClick={()=>{navigate("/providerAdmin")}}><b>Service-Providers</b></Nav.Link>
            <Nav.Link onClick={()=>{navigate("/seekerAdmin")}}><b>Service-Seekers</b></Nav.Link>
          </Nav>
          <Nav className="ms-auto">
        <Button variant="outline-primary" onClick={doLogout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarAdmin;
