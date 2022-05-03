import React from 'react'
// components
import Nav from './Components/Nav/Nav'
import Jumbotron from './Components/Jumbotron/Jumbotron'
import About from './Components/About/About'
// styles
import './App.css';

function App() {
  return (
    <>
      <Jumbotron />
      <Nav />
      <About />
    </>
  );
}

export default App;