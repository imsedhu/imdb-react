import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const  Error = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Container>
        <Row className='justify-content-center align-items-center m-5 p-5 '>
          <Col lg={6}>
              <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>404 Page is NOT FOUND!</Alert.Heading>
            <p>
              Back to Home
            </p>
          </Alert>
          </Col>
        </Row>
      </Container>
      
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}


export default  Error