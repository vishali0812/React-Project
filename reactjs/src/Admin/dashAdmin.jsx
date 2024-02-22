import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import NavBarAdmin from './navAdmin';

function DashBoard() {
  const navigate = useNavigate();

useEffect(()=>{
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
  return (
    <div>
      <NavBarAdmin />
      <br /><br />
        <center><h1>Admin Dashboard</h1></center>
        <br />
        
       <br />
        <center>
        <div style={{display: 'flex',flexDirection: 'row',marginLeft:"5%",gap:'5%'}}>
        <Card style={{ width: '18rem',float: 'left' }}>
      <Card.Img variant="top" src="http://localhost:2006/pics/users.png" />
      <Card.Body>
        <Card.Title>User-Management</Card.Title>
        <Button variant="primary" onClick={()=>{navigate('/userAdmin')}}>Manage</Button>
      </Card.Body>
    </Card>
    {/* ============================================================== */}
    <Card style={{ width: '18rem',float: 'left' }}>
      <Card.Img variant="top" src="http://localhost:2006/pics/provider.png" />
      <Card.Body>
        <Card.Title>Service-Providers</Card.Title>
        <Button variant="primary" onClick={()=>{navigate('/providerAdmin')}}>Info</Button>
      </Card.Body>
    </Card>
    {/* ============================================================== */}
    <Card style={{ width: '18rem',float: 'left' }}>
      <Card.Img variant="top" src="http://localhost:2006/pics/seeker.png" />
      <Card.Body>
        <Card.Title>Service Seekers</Card.Title>
        <Button variant="primary" onClick={()=>{navigate('/seekerAdmin')}}>Details</Button>
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