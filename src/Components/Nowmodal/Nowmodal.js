import React, { useState } from "react";

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function Nowmodal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Hit me here!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.text}</Modal.Body>
      </Modal>
    </>
  );
}