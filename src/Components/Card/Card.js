import React from "react";
// import styles from './Card.module.css'
import BootstrapCard from 'react-bootstrap/Card'

export default function Card(props) {
  return (
    <BootstrapCard style={{ width: '15rem' }}>
      <BootstrapCard.Img variant="top" src={props.image} className='p-4'/>
      <BootstrapCard.Body style={{color: 'black'}}>
        <BootstrapCard.Title>{props.title}</BootstrapCard.Title>
        <BootstrapCard.Text>{props.text}</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  )
}