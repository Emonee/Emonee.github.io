import React from 'react'

import projectsData from '../../Data/projectsData'

import Carousel from 'react-bootstrap/Carousel'

export default function ControlledCarousel () {
  return (
    <Carousel>
      {projectsData.map(project => (
        <Carousel.Item key={project.name}>
          <img
            className='d-block w-35'
            src={project.imgUrl}
            alt='First slide'
          />
          <Carousel.Caption style={{ backgroundColor: 'hsla(223, 54%, 5%, 50%)', borderRadius: '20px' }}>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <a target='_blank' rel='noreferrer' href={project.urlRepository}>More info here.</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
