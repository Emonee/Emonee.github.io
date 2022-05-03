import React from "react";
import styles from './Formation.module.css'

export default function Formation() {
  return (
    <section id='formation' className={styles.formation}>
      <h2>Formation 📖</h2>
      <p>I'm a self teach dev, but that doesn't mean that I did it all alone. My special thanks to the plataforms that I use to learn about this small fraction of creation: programing.</p>
      {/* carousel with logos and anchors of FCC and CC */}
      <h3>Skill set:</h3>
      <h3>You can see some of my capasitation here:</h3>
      <h3>What I'm learning right now?</h3>
      <h3>Topics I am interested in learning in the future</h3>
    </section>
  )
}