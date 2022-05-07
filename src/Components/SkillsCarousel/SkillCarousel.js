import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const divStyles = {
  display: 'flex', 
  justifyContent: 'start', 
  alignItems: 'center',
  padding: 5, 
  flexWrap: 'wrap',
  gap: 10
}

export default function SkillCarousel() {
  return (
    <Carousel controls={false} indicators={false} interval={1500} pause={false}>
      <Carousel.Item>
        <div style={divStyles}>
          <div style={{fontSize: '3rem', color: '#ee642e'}}>
            <i className="fa-brands fa-html5"></i>
          </div>
          <p className='m-0'>HTML 5</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={divStyles}>
          <div style={{fontSize: '3rem', color: '#29a6de'}}>
            <i className="fa-brands fa-css3-alt"></i>
          </div>    
          <p className='m-0'>CSS 3</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={divStyles}>
          <div style={{fontSize: '3rem', color: '#f0d94d'}}>
            <i className="fa-brands fa-js-square"></i>
          </div>
          <p className='m-0'>Javascript</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={divStyles}>
          <div style={{fontSize: '3rem', color: '#02d3fe'}}>
            <i className="fa-brands fa-react"></i>
          </div>
          <p className='m-0'>ReactJS</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={divStyles}>
          <div style={{fontSize: '3rem', color: '#74cc3a'}}>
            <i className="fa-brands fa-node-js"></i>
          </div>
          <p className='m-0'>NodeJS</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={divStyles}>
          <div style={{fontSize: '3rem', color: '#74cc3a'}}>
            <i className="fa-solid fa-e"></i>
          </div>
          <p className='m-0'>ExpressJS</p>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}