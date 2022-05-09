import React from "react";
import styles from './Formation.module.css'

import InterestedTopics from "../InterestedTopics/InterestedTopics";

import SkillCarousel from "../SkillsCarousel/SkillCarousel";
import SkillsTabs from "../SkillsTabs/SkillsTabs";
import AccordionCertifications from "../AccordionCertifications/AccordionCertifications";
import LearningRightNow from "../LearningRightNow/LearningRightNow";

export default function Formation() {
  return (
    <section id='formation' className={styles.formation}>
      <h2 className="mb-4">Formation 📖</h2>
      <p className="mb-5">I'm a self taught dev, but that doesn't mean that I did it all alone. My special thanks to the plataforms that I use to learn about this small fraction of human creation: programing.</p>
      <div className={styles.logos}>
        <img id={styles.freeCodeCampLogo} src="https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg" alt="free code camp logo" />
        <img id={styles.codaCademyLogo} src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Codecademy.svg" alt="codecademy logo" />
      </div>
      <h3>Skill set:</h3>
      <SkillCarousel />
      <SkillsTabs />
      {/* basic carousel and a full list modal with tabs and progress (bar) */}
      <h3>You can see some of my capasitation here:</h3>
      <AccordionCertifications />
      {/* acordions  from database */}
      <LearningRightNow />
      {/* use data with: desc, link */}
      <InterestedTopics />
    </section>
  )
}