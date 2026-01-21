import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Homepage/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Project from './Components/Projects/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';



function App() {
  const [lightMode, setLightMode] = useState(false)
  const textColor = {
    dark_color: '#1a2039',
    text_color: '#ee4604',
    dark_text: '#c5bde1',
    light_text: '#52545d',
    light_color: '#dce2fc',
  }
  return (
    <div className="App">
      <Header lightMode={lightMode} setLightMode={setLightMode} textColor={textColor} />
      <Home lightMode={lightMode} textColor={textColor} />
      <About lightMode={lightMode} textColor={textColor} />
      <Skills lightMode={lightMode} textColor={textColor} />
      <Project lightMode={lightMode} textColor={textColor} />
      <Contact lightMode={lightMode} textColor={textColor} />
      <Footer lightMode={lightMode} textColor={textColor} />


    </div>
  );
}

export default App;
