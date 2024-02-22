import React from 'react';
import axios from 'axios';
import NavBarService from './NavBarService';

function ReviewService() {
  const [requests, setRequests] = React.useState([]);

  React.useEffect(() => {
    fetchReq();
  }, []);

  const fetchReq = async () => {
    try {
      const url = "http://localhost:2006/service/fetchReq";
      const resp = await axios.post(url, { "email": localStorage.getItem("active_user_email") });

      if (resp.data.status) {
        const filteredRequests = resp.data.rep.filter(request => !isDeadlinePassed(request.deadline));
        setRequests(filteredRequests);
      }
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  const isDeadlinePassed = (deadline) => {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    return now > deadlineDate;
  };

  return (
    <>
      <NavBarService />
      <br />
      <center><h1>Servant Requests</h1></center>
      <br /><br />

      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Email</th>
            <th>Category</th>
            <th>Mobile No.</th>
            <th>Deadline</th>
            <th>Location/Site</th>
            <th>Task Description</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}> {/* Assuming there is an 'id' property */}
              <td>{request.id}</td>
              <td>{request.email}</td>
              <td>{request.category}</td>
              <td>{request.mobile}</td>
              <td>{request.deadline}</td>
              <td>{request.location}</td>
              <td>{request.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ReviewService;
