import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="/img/bird-7914702_1280.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button as={Link} to="/Teklif">Teklif Al</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
