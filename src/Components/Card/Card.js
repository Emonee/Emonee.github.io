import React from "react";
import styles from './Card.module.css'
import BootstrapCard from 'react-bootstrap/Card'
import Nowmodal from "../Nowmodal/Nowmodal";


export default function Card(props) {
  return (
    <BootstrapCard className={styles.card}>
      <BootstrapCard.Img variant="top" src={props.image} className='rounded'/>
      <BootstrapCard.Body className={styles.cardBody}>
        <BootstrapCard.Title>{props.title}</BootstrapCard.Title>
        <hr/>
        <BootstrapCard.Text>
          {props.text}
          {props.url && <a href={props.url}> My play list here</a>}
        </BootstrapCard.Text>
        {props.modal && <Nowmodal title={props.modal.title} text={props.modal.text} textButton='... 🥁 ... 🥁 ...' />}
      </BootstrapCard.Body>
    </BootstrapCard>
  )
}