import React from 'react'
import Nav from './Components/Nav'
import Jumbotron from './Components/Jumbotron'
import About from './Components/About/'
import Projects from './Components/Projects'
import './App.css'

function App () {
  return (
    <>
      <Jumbotron />
      <Nav />
      <About />
      <Projects />
    </>
  )
}

export default App
