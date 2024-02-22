import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function UsersAdmin() {
  const [users, setUsers] = useState([]);
React.useEffect(()=>{
  fetchUser();
},[]);
  const fetchUser = async () => {
    try {
      const response = await axios.post("http://localhost:2006/admin/fetchUsers");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  var BlockUser=async(email)=>{
    try {
      const response = await axios.post("http://localhost:2006/admin/blockUser",{"email":email});
      alert(response.data);
    } catch (error) {
      console.error("Error Blocking users:", error);
    }
    fetchUser();
  }

  var ResumeUser=async(email)=>{
    try {
      const response = await axios.post("http://localhost:2006/admin/resumeUser",{"email":email});
      alert(response.data);
    } catch (error) {
      console.error("Error Resuming users:", error);
    }
    fetchUser();
  }

  return (
    <>
    <br />
      <center>
        <h1>All Users Information</h1>
      </center>
      <br />
      <br />
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>ID</th>
            <th>Email</th>
            <th>Date of Signup</th>
            <th>Status</th>
            <th>Action</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={user._id}>
              <td>{index+1}</td>
              <td>{user._id}</td>
              <td>{user.email}</td>
              <td>{user.dos}</td>
              <td>
              {user.status}
              </td>
              <td>
              
                  <Button variant="primary" onClick={() => { BlockUser(user.email) }}>Block</Button>
               </td>
               <td>
                  <Button variant="success" onClick={() => { ResumeUser(user.email) }}>Resume</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default UsersAdmin;
