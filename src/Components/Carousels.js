import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';


const Carousels = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={require("../images/carousel-4.jpg")} alt="madmax" className='d-block w-100 carousel-img' />
        <Carousel.Caption className='title'>
          <p className='display-6'>IMDb is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows.</p>
          <LinkContainer to="/signin">
          <h3 className='btn btn-warning fw-medium '>Sign in for more access</h3>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require("../images/carousel-2.jpg")} alt="madmax" className='d-block w-100 carousel-img' />
        <Carousel.Caption className='title'>
          <p className='display-6'>IMDb is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows.</p>
          <LinkContainer to="/signin">
          <h3 className='btn btn-warning fw-medium '>Sign in for more access</h3>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require("../images/carousel-3.jpg")} alt="madmax" className='d-block w-100 carousel-img' />
        <Carousel.Caption className='title'>
          <p className='display-6'>
          IMDb is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows..
          </p>
          <LinkContainer to="/signin">
          <h3 className='btn btn-warning fw-medium '>Sign in for more access</h3>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousels