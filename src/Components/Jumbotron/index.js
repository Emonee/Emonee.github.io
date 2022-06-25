import React from 'react'
import styles from './Jumbotron.module.css'

export default function Junbotron () {
  return (
    <div id='home' className={styles.jumbotron}>
      <h1>Emiliano Acevedo</h1>
      <h3 className='mb-5'>Web Developer</h3>
      <a className='btn btn-white d-flex align-items-center gap-2 button' href='#About'>
        know me
        <svg xmlns='http://www.w3.org/2000/svg' width='23' height='23' fill='currentColor' className='bi bi-arrow-right-circle rotate trans' viewBox='0 0 16 16'>
          <path fillRule='evenodd' d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z' />
        </svg>
      </a>
    </div>
  )
}
