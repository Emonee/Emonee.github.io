import React from "react";
import styles from "./AccordionCertifications.module.css";

import AccordionItem from "../AcordionItem/AcordionItem";

import Accordion from 'react-bootstrap/Accordion'

import certificatesData from "../../Data/certificatesData";

export default function AccordionCertifications() {
  const {bigCertifications, complementaryCertifications} = certificatesData
  
  const bigCertificationsComponents = bigCertifications.map(certification => <AccordionItem key={certification.title} title={certification.title} plataform={certification.plataform} description={certification.desc} url={certification.url}/>)

  const complementaryCertificationsComponents = complementaryCertifications.map(certification => <AccordionItem key={certification.title} title={certification.title} plataform={certification.plataform} description={certification.desc} url={certification.url}/>)

  return (
    <Accordion flush className={styles.accordion}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Most relevant</Accordion.Header>
        <Accordion.Body>
         {bigCertificationsComponents}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Complementary</Accordion.Header>
        <Accordion.Body>
          {complementaryCertificationsComponents}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}