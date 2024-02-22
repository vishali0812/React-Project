import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import NavBarClient from './navClient';

function DashBoard() {
  const navigate = useNavigate();

useEffect(()=>{
  if(localStorage.getItem("active_user_email"))
  return;
  else
  navigate("/");
},[]);

var doLogout=()=>{
  localStorage.removeItem("active_user_email");
  localStorage.removeItem("active_user_token");
  navigate('/');
}
  return (
    <div>
      <NavBarClient />
      <br /><br />
        <center><h1>Dashboard</h1></center>

       <br /><br />
        <center>
        <div style={{display: 'flex',flexDirection: 'row',marginLeft:"5%",gap:'5%'}}>
        <Card style={{ width: '18rem',float: 'left' }}>
      <Card.Img variant="top" src="http://localhost:2006/pics/profile.png" />
      <Card.Body>
        <Card.Title>Profile-Management</Card.Title>
        <Button variant="primary" onClick={()=>{navigate('/profileSeeker')}}>Manage</Button>
      </Card.Body>
    </Card>
    {/* ============================================================== */}
    <Card style={{ width: '18rem',float: 'left' }}>
      <Card.Img variant="top" src="http://localhost:2006/pics/servant.png" />
      <Card.Body>
        <Card.Title>Servant Requirement</Card.Title>
        <Button variant="primary" onClick={()=>{navigate('/postRequestSeeker')}}>Post Request</Button>
      </Card.Body>
    </Card>
    {/* ============================================================== */}
    <Card style={{ width: '18rem',float: 'left' }}>
      <Card.Img variant="top" src="http://localhost:2006/pics/searchProvider.jpeg" />
      <Card.Body>
        <Card.Title>Search Servant</Card.Title>
        <Button variant="primary" onClick={()=>{navigate('/fetchProviderSeeker')}}>Search</Button>
      </Card.Body>
    </Card>
    {/* ============================================================== */}
    <Card style={{ width: '18rem',float: 'left' }}>
      <Card.Img variant="top" src="http://localhost:2006/pics/logout.png" />
      <Card.Body>
        <Card.Title>Log-Out</Card.Title>
        <Button variant="primary" onClick={doLogout}>Logout</Button>
      </Card.Body>
    </Card>
        </div>
        </center>
    </div>
  )
}

export default DashBoard;