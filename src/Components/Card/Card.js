import React from "react";
// import styles from './Card.module.css'
import BootstrapCard from 'react-bootstrap/Card'

export default function Card(props) {
  return (
    <BootstrapCard style={{ width: '18rem' }}>
      <BootstrapCard.Img variant="top" src="https://emilianopiano.com/Resources/Media/Img/Logo%204.svg" />
      <BootstrapCard.Body style={{color: 'black'}}>
        <BootstrapCard.Title>{props.title}</BootstrapCard.Title>
        <BootstrapCard.Text>{props.text}</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  )
}