import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Axios from 'axios';
import MyCard from './MyCard';

function App() {

  const [details, setDetails] = useState({});
  const fetchDetails = async () => {

    const {data} = await Axios.get('https://randomuser.me/api/');
    const details = data.results[0];
    setDetails(details);
  }

  useEffect(() => {
    fetchDetails();
  }, [])

  return (
    <Container className="p-4 bg-primary App" fluid>
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
