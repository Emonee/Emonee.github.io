import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function NavigationalBar () {
  return (
    <Navbar sticky='top' variant='light' bg='light' className='paddin-margin-reset'>
      <Nav className='justify-content-center flex-grow-1 fs-4 align-items-center'>
        <Nav.Link active={false} target='_blank' href='https://www.linkedin.com/in/emilianoacevedo/' className='mx-2 icon-container'>
          <i className='bi bi-linkedin linkedin-icon icon' />
        </Nav.Link>
        <Nav.Link active={false} href='#home' className='mx-2'>
          <img
            src='/Resources/logo.svg'
            alt='Logo'
            height={40}
          />
        </Nav.Link>
        <Nav.Link active={false} target='_blank' href='https://github.com/Emonee' className='mx-2  icon-container'>
          <i className='bi bi-github github-icon icon' />
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
