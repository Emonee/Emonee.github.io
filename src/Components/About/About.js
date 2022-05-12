import React from "react";
import styles from './About.module.css'
//data
import cardsData from "../../Data/cardsData";
import rightNowData from "../../Data/rightNowData";
// components
import Nowmodal from "../Nowmodal/Nowmodal";
import Card from '../Card/Card'

export default function About() {
  const allCards = cardsData.map(data => <Card key={data.title} title={data.title} text={data.text} image={data.image} modal={data.modal} url={data.url}/>)

  return (
    <section id='About' className={styles.aboutSection}>
      <h2 className="mb-4 text-center">About me</h2>
      <p className="mb-5 mx-auto">I'm a Profesional Pianist Player. I love jazz music, but I like listen to other genders too, like Pop or Games-music. Here you can read some things that I love to do, so you can get to know me a little more 😄.</p>
      <div className="mb-5 d-flex flex-wrap justify-content-center gap-5">
        {allCards}  
      </div>
      <p className="text-center fs-4 mx-auto">Do you want to know what am I up to right now?</p>
      <div className="d-flex justify-content-center gap-5">
        <Nowmodal title={rightNowData.title} text={rightNowData.text} textButton='Hit me' />
        <a target="_blank" href="/Resources/Emiliano_Acevedo_CV.pdf" className={`btn ${styles.button}`}>Download my Resume</a>
      </div>
    </section>
  )
}