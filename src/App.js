import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Santa from './Santa.svg'
import Particles from 'react-particles-js';
import Opening from './Opening'
import deer from './small-deer.2a0425af.svg'
import Header from './Header';
import HeaderBar from './HeaderBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Logo from './Logo.png'
import "animate.css/animate.min.css";
function App() { 

  return (
    <div className="App" >
      <HeaderBar />
      <Header />   
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <Opening />
      <img src={Logo} style={{width:'40px', height:'45px'}} /> */}
    </div> 
  ); 
}

export default App;
 