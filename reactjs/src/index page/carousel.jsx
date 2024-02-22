import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://localhost:2006/pics/cr1.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://localhost:2006/pics/cr2.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://localhost:2006/pics/cr3.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
