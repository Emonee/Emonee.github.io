import React from 'react'
// components
import Nav from './Components/Nav/Nav'
import Jumbotron from './Components/Jumbotron/Jumbotron'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects';
import Formation from './Components/Formation/Formation';
// styles
import './App.css';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Jumbotron />
      <Nav />
      <About />
      <Projects />
      <Formation />
      <Contact />
   </>
  );
}

export default App;