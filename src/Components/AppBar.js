import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/* import { MdLocalMovies } from "react-icons/md"; */
import {LinkContainer} from 'react-router-bootstrap'



const AppBar = () => {
  return (

    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold fs-3'>
          {/* <h2 className='fw-bold btn btn-warning '>  */}
            {/* <MdLocalMovies className='fs-1'/>  */}{/* IMDb
          </h2> */}
          <img src={require("../images/imdb-logo.png")} alt="imdb" width={80} />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-warning' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  d-flex justify-content-around ">
          <LinkContainer to="/">
              <Nav.Link className='text-white me-5  fw-bold'>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="about">
              <Nav.Link className='text-white me-5   fw-bold'>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="movies">
              <Nav.Link className='text-white me-5  fw-bold'>Movies</Nav.Link>
          </LinkContainer>
          <LinkContainer to="signin">
              <Nav.Link className='text-white me-5  fw-bold'>Sign in</Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppBar