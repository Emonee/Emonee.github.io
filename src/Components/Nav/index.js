import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function NavigationalBar () {
  return (
    <Navbar sticky='top' variant='light' bg='light' className='paddin-margin-reset'>
      <Nav className='justify-content-center flex-grow-1 fs-4 align-items-center'>
        <Nav.Link active={false} target='_blank' href='https://www.linkedin.com/in/emilianoacevedo/' className='mx-2'>
          <i className='bi bi-linkedin' />
        </Nav.Link>
        <Nav.Link active={false} href='#home' className='mx-2'>
          <img
            alt='Logo Emiliano piano'
            src='https://emilianopiano.com/Resources/Media/Img/Logo%204.svg'
            width='40'
            height='40'
            className='d-inline-block align-top'
          />
        </Nav.Link>
        <Nav.Link active={false} target='_blank' href='https://github.com/Emonee' className='mx-2'>
          <i className='bi bi-github' />
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
