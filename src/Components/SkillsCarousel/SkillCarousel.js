import React from "react";
import Carousel from 'react-bootstrap/Carousel'

export default function SkillCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={900}>
        <div>
          <i className="programming lang-javascript"></i>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}>
        <div>
          <i className="programming lang-javascript"></i>
        </div>        
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}>
        <div>
          <i className="programming lang-javascript"></i>
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}