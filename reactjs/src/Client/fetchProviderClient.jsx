import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import NavBarClient from './navClient';

function FetchProviderClient() {
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [obj, doUpdateObj] = useState({ category: "", city: "" });
  const [fetchedData, setFetchedData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecords();
  }, []);

  var doUpdate = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    doUpdateObj({ ...obj, [name]: value });
  }

  var fetchServant = async () => {
    if(obj.category==="")
    {
      alert("Choose Category First!...");
      return;
    }
    else if(obj.city==="")
    {
      alert("Choose City First!...");
       return;
    }
    var url = "http://localhost:2006/client/fetchServant";
    var response = await axios.post(url, obj);
    if(response.data.length===0)
    {
      alert("Sorry!! No Servant Found...");
      return;
    }
    setFetchedData(response.data);
  }

  const fetchRecords = async () => {
    try {
      const response = await axios.post("http://localhost:2006/client/fetchProvider");
      const data = response.data;  
      const uniqueCities = Array.from(new Set(data.map(item => item.city)));
      const uniqueCategories = Array.from(new Set(data.map(item => item.category)));
      setCities(uniqueCities);
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching provider records:", error);
    }
  };
  
  

  return (
    <Container>
      <NavBarClient />
      <br />
      <center><h1>Fetch Service Provider</h1></center>
      <br />

      <Form.Group controlId="cityCombo" className="mb-3 textBox" style={{ float: "left" }}>
        <Form.Label>City</Form.Label>
        <Form.Select aria-label="Select City" value={obj.city} name='city' onChange={doUpdate}>
          <option value="">Select City</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="categoryCombo" className="mb-3 textBox" style={{ float: "left" }}>
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Select Category" value={obj.category} name='category' onChange={doUpdate}>
          <option value="">Select Category</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <br /><br /><br /><br /><br />
      <center> <Button variant="outline-primary" size='lg' onClick={fetchServant}>Fetch Provider</Button></center>

      {fetchedData && fetchedData.length > 0 && (
        <Row className="mt-4">
          {fetchedData.map(data => (
            <Col key={data._id} xs={12} md={6} lg={3}>
              <Card style={{ marginBottom: '20px' }}>
                <Card.Img variant="top" src="http://localhost:2006/pics/profile.png" width={"100%"} height={"auto"} />
                <Card.Body>
                  <Card.Title><center>{data.name}</center></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"><b>Mobile: </b>{data.mobile}</Card.Subtitle>
                  <Card.Text><b>Description:</b> {data.dis}</Card.Text>
        {/* <Button variant="primary" onClick={()=>{navigate(`/viewProfileSeeker?email=${data.email}`)}}>View Profile</Button> */}
        <Button variant="primary" onClick={()=>{navigate(`/viewProfileSeeker/${data.email}`)}}>View Profile</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default FetchProviderClient;
