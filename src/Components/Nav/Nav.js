import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'


export default function NavigationalBar() {
  const expand = 'md'
  return (
    <Navbar sticky="top" variant="light" bg="light" expand={expand}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            alt=''
            src="https://emilianopiano.com/Resources/Media/Img/Logo%204.svg"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3 fs-4">
              <Nav.Link href="#About" className='mx-2'>Who I am</Nav.Link>
              <Nav.Link href="#projects" className='mx-2'>Projects</Nav.Link>
              <Nav.Link href="#formation" className='mx-2'>My Formation</Nav.Link>
              <Nav.Link href="#contact" className='mx-2'>Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}