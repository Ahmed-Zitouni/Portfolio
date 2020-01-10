import React, {useState} from "react";
import { FaGithub } from "react-icons/fa";
import RealEstate from "./RE4.jpg";
import RE1 from "./image2.jpg";
import App from "./7-lyft-app.png";
import BikeSite1 from "./BikeSite.PNG"
import BikeSite from "./Final1.PNG"
import RealEstateSite from "./RealEstateSite.jpg"
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
      <ScrollAnimation animateIn='fadeInUp' animateOnce='true'>
        <h1 className="About_Title" style={{ minWidth: "7rem" }}>
          Projects
        </h1>
        <hr className="About_Line" />
        </ScrollAnimation>
      </div>
      <div className="ProjectCont">
        <ScrollAnimation animateIn='fadeInUp' animateOnce='true'>
        <div className="Project">
        <div className="ProjectImg">
              <a href= "https://expo.io/@ahmed_z/Asend" target="_blank" onMouseLeave={(e) => setHover1(false)} onMouseOver={(e) => setHover1(true)}>
                <img src = {App}/>
                <div className="ImgOver" style={Hover1 ? HoverStyle : null}/>
              </a>
          </div>
          <div className="ProjectDesc">
            <h1>Asend App</h1>
            <div className="TextBox">
              <p>
                A production ready App built in React Native that allowed 
                users to buy and sell closed college classes from one another.
                AWS was used to handle the user authenication, NoSQL database, 
                and backend functions.  Puppeter a webscraper was used to autimate 
                the transfer of classes.   
              </p>
            </div>
            <div className="ProjectBottom">
              <h2>React Native - NoSQL - Node JS - Puppeter - AWS</h2>
              <a href= "https://github.com/Ahmed-Zitouni/ClassApp" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
          
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUp' animateOnce='true'>
        <div className="Project" id="SecP">
        <div className="ProjectImg">
              <a href= "https://searchrealestate.netlify.com/" target="_blank" onMouseLeave={(e) => setHover2(false)} onMouseOver={(e) => setHover2(true)}>
                <img src = {RealEstateSite}/>
                <div className="ImgOver" style={Hover2 ? HoverStyle : null}/>
              </a>
          </div>
          <div className="ProjectDesc">
            <h1>Real Estate Site</h1>
            <div className="TextBox">
              <p>
                This site uses the Zillow API to displays information 
                and the estimated value of searched home.  Google maps 
                was used to display the location of each home, and
                an AWS server was used to handle api call more effectivly.
              </p>
            </div>
            <div className="ProjectBottom">
              <h2>React - Zillow API - Google Maps API - AWS</h2>
              <a href= "https://github.com/Ahmed-Zitouni/RealEstate" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUp' animateOnce='true' className="Project">
        <div className="ProjectImg">
              <a href= "https://bikeshopc.netlify.com/" target="_blank" onMouseLeave={(e) => setHover3(false)} onMouseOver={(e) => setHover3(true)}>
                <img src = {BikeSite}/>
                <div className="ImgOver" style={Hover3 ? HoverStyle : null}/>
              </a>
          </div>
          <div className="ProjectDesc">
            <h1>Ecommerce Bike Shop</h1>
            <div className="TextBox">
              <p>
                A Ecommerce Bicycle shop where users can customize bicycles 
                and see how they look in real time. Built in React with 
                responsive design and wide variety of products.
              </p>
            </div>
            <div className="ProjectBottom">
              <h2>React - Javascript - SCSS - React Router</h2>
              <a href= "https://github.com/Ahmed-Zitouni/BikeStore" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Projects;
