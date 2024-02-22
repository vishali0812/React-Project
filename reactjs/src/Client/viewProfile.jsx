import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ViewProfileClient() {
  let { em } = useParams();
  const email = em;
  const [servantData, setServantData] = useState(null);

  useEffect(() => {
    getRecord();
  }, []);

  const getRecord = async () => {
    try {
      var url = "http://localhost:2006/client/getRecordServant";
      var response = await axios.post(url, { "email": email });
      setServantData(response.data);
    } catch (error) {
      console.error("Error fetching servant record:", error);
    }
  }

  return (
    <Container>
      <br />
      <center>
        <h1>Servant Information</h1>
      </center>
      <br />
      {servantData && (
        <Row>
            <Col xs={12} md={1}>
          </Col>
          <Col xs={12} md={4}>
            <br /><br />
                <center><h2>Profile Pic</h2></center>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={`http://localhost:2006/uploads/${servantData.ppic}`} width={"30%"} height={"20%"}/>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <br /><br />
                <center><h2>Details</h2></center>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <br />
                <Card.Text><b>Name: </b>{servantData.name}</Card.Text>
                <Card.Text><b>Contact: </b>{servantData.mobile}</Card.Text>
                <Card.Text><b>Email-Id: </b>{servantData.email}</Card.Text>
                <Card.Text><b>City: </b>{servantData.city}</Card.Text>
                <Card.Text><b>Work Category: </b>{servantData.category}</Card.Text>
                <Card.Text><b>Expert In: </b>{servantData.expert}</Card.Text>
                <Card.Text><b>Experience: </b>{servantData.exp} years</Card.Text>
                <Card.Text><b>Shop Address: </b>{servantData.shop}</Card.Text>
                <Card.Text><b>Description: </b>{servantData.dis}</Card.Text>
                <br /><br />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default ViewProfileClient;
