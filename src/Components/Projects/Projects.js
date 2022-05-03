import React from "react";
import styles from './Projects.module.css'
import Carousel from "../Carousel/Carousel";



export default function Projects() {
  return (
    <section id='projects' className={styles.projects}>
      <h2>Projects 💻</h2>
      <Carousel />
    </section>
  )
}