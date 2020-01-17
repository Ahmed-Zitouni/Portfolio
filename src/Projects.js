import React, {useState} from "react";
import { FaGithub, FaExternalLinkAlt} from "react-icons/fa";
import App from "./Images/AsendApp.png";
import BikeSite from "./Images/BikeSite.jpg"
import RealEstateSite from "./Images/RealEstateSite.jpg"
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  const [Hover1, setHover1] = useState(false)
  const [Hover2, setHover2] = useState(false)
  const [Hover3, setHover3] = useState(false)
  const HoverStyle = {
    background: "transparent"
  }
  return (
    <div className="About_Cont" id="Projects">
      <div className="About_Title_Cont">
      <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
        <h1 className="About_Title" style={{ minWidth: "7rem" }}>
          Projects
        </h1>
        <hr className="About_Line" />
        </ScrollAnimation>
      </div>
      <div className="ProjectCont">
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
        <div className="Project">
        <div className="ProjectImg">
              <a href= "https://searchrealestate.netlify.com/" rel="noopener noreferrer" target="_blank" onMouseLeave={(e) => setHover1(false)} onMouseOver={(e) => setHover1(true)}>
                <img src = {RealEstateSite} alt ="App"/>
                <div className="ImgOver" style={Hover1 ? HoverStyle : null}/>
              </a>
          </div>
          <div className="ProjectDesc">
            <h1>Real Estate Site</h1>
            <div className="TextBox">
              <p>
                React site that uses the Zillow API to display specific information
                and the estimated value of searched properties.  
                An AWS server was used to set up an Express REST API in order 
                to improve the performance of the site when retrieving data.
              </p>
            </div>
            <div className="ProjectBottom">
              <h2>React - Zillow API - Google Maps API - AWS</h2>
              <div>
                <a href= "https://searchrealestate.netlify.com/" rel="noopener noreferrer" target="_blank">
                  <FaExternalLinkAlt />
                </a>
                <a href= "https://github.com/Ahmed-Zitouni/RealEstate" rel="noopener noreferrer" target="_blank">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
        <div className="Project" id="SecP">
        <div className="ProjectImg">
              <a href= "https://expo.io/@ahmed_z/Asend" rel="noopener noreferrer" target="_blank" onMouseLeave={(e) => setHover2(false)} onMouseOver={(e) => setHover2(true)}>
                <img src = {App} alt ="Real Estate"/>
                <div className="ImgOver" style={Hover2 ? HoverStyle : null}/>
              </a>
          </div>
          <div className="ProjectDesc">
            <h1>Asend App</h1>
            <div className="TextBox">
              <p>
              A production-ready App built in React Native that allowed users to 
              buy and sell closed college classes from one another. AWS was used 
              to handle the user authentication, NoSQL database, and backend functions. 
              Puppeteer a web scraper was used to automate the transfer of classes.  
              </p>
            </div>
            <div className="ProjectBottom">
              <h2>React Native - NoSQL - Node.js - Puppeter - AWS</h2>
              <div>
                <a href= "https://github.com/Ahmed-Zitouni/ClassApp" rel="noopener noreferrer" target="_blank">
                  <FaGithub />
                </a>
                <a href= "https://expo.io/@ahmed_z/Asend" rel="noopener noreferrer" target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true} className="Project">
        <div className="ProjectImg">
              <a href= "https://bikeshopc.netlify.com/" rel="noopener noreferrer" target="_blank" onMouseLeave={(e) => setHover3(false)} onMouseOver={(e) => setHover3(true)}>
                <img src = {BikeSite} alt ="Bike Shop"/>
                <div className="ImgOver" style={Hover3 ? HoverStyle : null}/>
              </a>
          </div>
          <div className="ProjectDesc">
            <h1>Ecommerce Bike Shop</h1>
            <div className="TextBox">
              <p>
              A responsive Ecommerce bike site where users can customize bicycles and see 
              how they look in real-time.  Built-in React with a sleek design and a wide 
              variety of products.  A CDN was used to serve content efficiently.
              </p>
            </div>
            <div className="ProjectBottom">
              <h2>React - Javascript - SCSS - React Router</h2>
              <div>
                <a href= "https://bikeshopc.netlify.com/" rel="noopener noreferrer" target="_blank">
                  <FaExternalLinkAlt />
                </a>
                <a href= "https://github.com/Ahmed-Zitouni/BikeStore" rel="noopener noreferrer" target="_blank">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Projects;
