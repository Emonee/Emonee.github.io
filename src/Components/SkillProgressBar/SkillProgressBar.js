import React from 'react'
import styles from './SkillProgressBar.module.css'

import ProgressBar from 'react-bootstrap/ProgressBar'

export default function SkillProgressBar(props) {
  return (
    <div className={styles.languageLvl}>
      <p>{props.language}</p>
      <ProgressBar className={styles.progressBar} now={props.lvl} />
    </div>
  )
}