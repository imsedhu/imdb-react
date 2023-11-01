import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';

const Signup = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container className='p-3 mt-3 '>
    <Row className='justify-content-center'>
      <Col md={6} className='form-container'>
        <Form className='p-5' noValidate validated={validated} onSubmit={handleSubmit}>
          <h2 className='text-center mt-0 mb-4'>Create account</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" required  />
            <Form.Control.Feedback type="invalid">
                  Enter your name.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required  />
            <Form.Control.Feedback type="invalid">
                  Enter vaild email id.
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required />
            <Form.Control.Feedback type="invalid">
                  Enter vaild password.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" required />
            <Form.Control.Feedback type="invalid">
                  password not match or invaild.
              </Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group> */}
          <Button variant="primary" type="submit" className='btn btn-warning w-100 '>
            Create your IMDb account
          </Button>
          <hr></hr>
          <p className='text-center'>Already have an account?</p>
          <LinkContainer to="/signin">
              <Button className='btn btn-warning w-100  '>Sign in</Button>
          </LinkContainer>
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

export default Signup