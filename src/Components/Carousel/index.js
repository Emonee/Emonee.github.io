import projectsData from '../../Data/projectsData'

import Carousel from 'react-bootstrap/Carousel'

import styles from './Carousel.module.css'

const MIN_WIDTH_FOR_CONTROLS = 787
const deviceWith = Math.max(window.screen.width, window.innerWidth)

export default function ControlledCarousel () {
  return (
    <Carousel className='mb-5' controls={deviceWith > MIN_WIDTH_FOR_CONTROLS} interval={null}>
      {projectsData.map(project => (
        <Carousel.Item key={project.name}>
          <img
            className='d-block w-35 mx-auto'
            src={project.imgUrl}
            alt={project.name}
          />
          <Carousel.Caption bsPrefix={styles.carouselCaptionStyle}>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <div className='d-flex justify-content-center gap-5'>
              <a className='color-green anchor-style bold-font' target='_blank' rel='noreferrer' href={project.urlRepository}>Github</a>
              <a className='color-green anchor-style bold-font' target='_blank' rel='noreferrer' href={project.urlPage}>Page</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
