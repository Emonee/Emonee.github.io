import React from "react";
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id='contact' className={styles.contactSection}>
      <h2 className="text-center mb-4">Let's build something together! 🖖🏻</h2>
      <div className="container d-flex justify-content-center flex-wrap gap-5">
        <a target="_blank" rel="noreferrer" href="mailto:e.acevedo.felip@gmail.com"><i id={styles.mailIcon} className={`bi bi-envelope-fill ${styles.icon}`}></i></a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/emilianoacevedo/"><i id={styles.linkedinIcon} className={`bi bi-linkedin ${styles.icon}`}></i></a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Emonee"><i id={styles.githubIcon} className={`bi bi-github ${styles.icon}`}></i></a>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCg28_cA6E_5BuvJ5_sg0KnA"><i id={styles.youtubeIcon} className={`bi bi-youtube ${styles.icon}`}></i></a>
      </div>
    </section>
  )
}