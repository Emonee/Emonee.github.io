import React from 'react'
import styles from './Projects.module.css'

import Nowmodal from '../Nowmodal'
import Carousel from '../Carousel'

export default function Projects () {
  return (
    <section id='projects' className={styles.projects}>
      <h2>Projects 💻</h2>
      <Carousel />
      <p>What im building right now?</p>
      <Nowmodal title='Hola' text='Como tamos perrinsque' textButton='Hit me! (More softly this time)' />
    </section>
  )
}
