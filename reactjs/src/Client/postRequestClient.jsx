import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import NavBarClient from './navClient';

function PostRequestClient() {
  const [obj, doUpdateObj] = React.useState({
    email: "",
    category: "",
    deadline: "",
    location: "",
    mobile: "",
    task: ""
  });

  React.useEffect(()=>{
   doUpdateObj({...obj,["email"]:localStorage.getItem("active_user_email")});
  },[])

  var doPost=async()=>{
    var url ="http://localhost:2006/client/postServantRequest";
    var resp = await axios.post(url,obj);
    alert((resp.data));
  }

  const doUpdate = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    doUpdateObj({ ...obj, [name]: value });
  };

  return (
    <>
    <NavBarClient />
      <br />
      <center><h1>Details to Post Request</h1></center>
      <br /><br />

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 textBox"
      >
        <Form.Control type="email" placeholder="Enter Email Address" readOnly name='email' value={obj.email} onChange={doUpdate} />
      </FloatingLabel>

      <br />

      <FloatingLabel style={{ float: 'left' }}
        controlId="floatingInput"
        label="DeadLine"
        className="mb-3 textBox"
      >
        <Form.Control type="date" min={new Date().toISOString().split('T')[0]} placeholder="Enter Deadline for Your Task" value={obj.deadline} name='deadline' onChange={doUpdate} />
      </FloatingLabel>

      <Form.Group controlId="categoryCombo" className="mb-3 textBox" style={{ float: 'left',width:"40%" }}>
        <Form.Label>Category</Form.Label>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {obj.category ? obj.category : "Select Category"}
          </Dropdown.Toggle>

          <Dropdown.Menu drop="down">
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "plumber" })}>Plumber</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "electrician" })}>Electrician</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "carpenter" })}>Carpenter</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "painter" })}>Painter</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "mason" })}>Mason</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "handyman" })}>Handyman</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "gardener" })}>Gardener</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "house-cleaner" })}>House Cleaner</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "pest-control" })}>Pest Control</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "hvac-technician" })}>HVAC Technician</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "locksmith" })}>Locksmith</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "interior-designer" })}>Interior Designer</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "roofer" })}>Roofer</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "flooring-specialist" })}>Flooring Specialist</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "appliance-repair" })}>Appliance Repair</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "auto-mechanic" })}>Auto Mechanic</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "computer-technician" })}>Computer Technician</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "tutor" })}>Tutor</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "personal-trainer" })}>Personal Trainer</Dropdown.Item>
            <Dropdown.Item onClick={() => doUpdateObj({ ...obj, category: "event-planner" })}>Event Planner</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>

      <br /><br /><br /><br />

      <FloatingLabel style={{ float: 'left' }}
        controlId="floatingInput"
        label="Location/Site"
        className="mb-3 textBox"
      >
        <Form.Control type="text" placeholder="Enter Location/Site" name='location' value={obj.location} onChange={doUpdate} />
      </FloatingLabel>

      <FloatingLabel style={{ float: 'left' }}
        controlId="floatingInput"
        label="Contact Details"
        className="mb-3 textBox"
      >
        <Form.Control type="text" placeholder="Enter Mobile Number" name='mobile' value={obj.mobile} onChange={doUpdate} />
      </FloatingLabel>
      <br /><br /><br /><br />
      <FloatingLabel  style={{float: 'left', width: '85%'}}
        controlId="floatingInput"
        label="Task Description"
        className="mb-3 textBox"
      >
        <Form.Control style={{height: '30%'}} type="text" as="textarea" placeholder="Enter Task Description" value={obj.task} name='task' onChange={doUpdate}/>
      </FloatingLabel>
      <br /><br /><br /> <br /><br />
      <center><Button variant="outline-primary"  size='lg' onClick={doPost}>Post Request</Button> </center>
    </>
  );
}

export default PostRequestClient;
