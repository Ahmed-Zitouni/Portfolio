import React from 'react';
import './App.scss';
import Header from './Header';
import HeaderBar from './HeaderBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
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
 