import React from "react";
import styles from './Formation.module.css'

export default function Formation() {
  return (
    <section id='formation' className={styles.formation}>
      <h2>Formation 📖</h2>
      <p>I'm a self taught dev, but that doesn't mean that I did it all alone. My special thanks to the plataforms that I use to learn about this small fraction of human creation: programing.</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg" alt="shit" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Codecademy.svg" alt="shit" />
      <h3>Skill set:</h3>
      {/* basic carousel and a full list modal with tabs and progress (bar) */}
      <h3>You can see some of my capasitation here:</h3>
      {/* acordions */}
      <h3>What I'm learning right now?</h3>
      {/* use data with: desc, link */}
      <h3>Topics I am interested in learning in the future:</h3>
      {/* list with data: desc */}
    </section>
  )
}