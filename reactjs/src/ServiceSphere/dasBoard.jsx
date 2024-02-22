import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import NavBarService from './NavBarService';

function DashBoard() {
  const navigate = useNavigate();


var doLogout=()=>{
  localStorage.removeItem("active_user_email");
  localStorage.removeItem("active_user_token");
  navigate('/');
}
  return (
    <div>
      <NavBarService />
      <br />
        <center><h1>Dashboard</h1></center>
<br /><br />
        <center>
        <div style={{display: 'flex',flexDirection: 'row',marginLeft:"15%",gap:'5%'}}>
        <Card style={{ width: '18rem',float: 'left' }}>
      <Card.Img variant="top" src="http://localhost:2006/pics/profile.png" />
      <Card.Body>
        <Card.Title>Profile-Management</Card.Title>
        <Button variant="primary" onClick={()=>{navigate('/profileService')}}>Manage</Button>
      </Card.Body>
    </Card>
    {/* ============================================================== */}
    <Card style={{ width: '18rem',float: 'left' }}>
      <Card.Img variant="top" src="http://localhost:2006/pics/review.png" />
      <Card.Body>
        <Card.Title>Servants Request</Card.Title>
        <Button variant="primary" onClick={()=>{navigate('/reviewService')}}>Review</Button>
      </Card.Body>
    </Card>
    {/* ============================================================== */}
    {/* <Card style={{ width: '18rem',float: 'left' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
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