import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const About = () => {
  return (
    <Container className='mt-5 pt-5 '>
      <Row className=''>
        <Col lg={6} md={6} className='d-flex justify-content-center align-items-center mb-3 '>
          <img src={require("../images/about-img2.jpg")} alt="" className='w-100 h-100 rounded-3  '/>
        </Col>
        <Col lg={6} md={6}>
          <p className='display-6 fs-5'>
          <span className='btn btn-warning py-0 px-1 fw-medium '>IMDb</span>(an acronym for Internet Movie Database) is an online database of information related to films, television series, podcasts, home videos, video games, and streaming content online – including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews. IMDb began as a fan-operated movie database on the Usenet group "rec.arts.movies" in 1990, and moved to the Web in 1993. Since 1998, it has been owned and operated by IMDb.com, Inc., a subsidiary of Amazon.

          The site's message boards were disabled in February 2017. As of 2019, IMDb was the 52nd most visited website on the Internet, as ranked by Alexa. As of March 2022, the database contained some 10.1 million titles (including television episodes), 11.5 million person records, and 83 million registered users.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About