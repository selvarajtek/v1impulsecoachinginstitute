import React,{useState} from 'react';
import {Carousel} from 'react-bootstrap';
import './Carousel.css';

function Homeslide() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="shadow-lg p-1 mb-2 bg-body rounded">
        <Carousel.Item>
          <img
            className="d-block  slide-image"
            src="/slide/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  slide-image"
            src="/slide/2.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  slide-image"
            src="/slide/3.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

export default Homeslide;