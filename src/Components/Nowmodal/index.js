import { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function Nowmodal (props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const { textButton, title, text, anchor, url } = props
  const anchorElement = (anchor, url) => <a href={url} rel="noreferrer" target='_blank'>{anchor}</a>

  return (
    <>
      <Button onClick={handleShow} bsPrefix='btn button'>
        {textButton}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {anchor && anchorElement(anchor, url)}
          {anchor && ' '}
          {text}
        </Modal.Body>
      </Modal>
    </>
  )
}
