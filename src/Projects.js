import React from "react";
import { FaGithub } from "react-icons/fa";
import RealEstate from "./RE4.jpg";
import RE1 from "./image2.jpg";
import App from "./7-lyft-app.png";
import BikeSite from "./BikeSite.PNG"
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  return (
    <div className="About_Cont" id="Projects">
      <div className="About_Title_Cont">
        <h1 className="About_Title" style={{ minWidth: "7rem" }}>
          Projects
        </h1>
        <hr className="About_Line" />
      </div>
      <div className="ProjectCont">
        <div className="Project">
          <div className="ProjectImg">
            <div className="ImgOver" />
          </div>
          <div className="ProjectDesc">
            <h1>College Classes</h1>
            <div className="TextBox">
              <p>
                A real estate site that use real time data displays the
                estimated value of a houses along with additial information.
                Google maps was used to display the location of each home, and
                an AWS server was used to handle api call more effectivly.
              </p>
            </div>
            <div className="ProjectBottom">
              <h2>React - Javascript - SCSS - AWS - Git</h2>
              <FaGithub />
            </div>
          </div>
        </div>
        <div className="Project">
          <div className="ProjectImg">
            <div className="ImgOver" />
          </div>
          <div className="ProjectDesc">
            <h1>College Classes</h1>
            <div className="TextBox">
              <p>
                A real estate site that use real time data displays the
                estimated value of a houses along with additial information.
                Google maps was used to display the location of each home, and
                an AWS server was used to handle api call more effectivly.
              </p>
            </div>
            <div className="ProjectBottom">
              <h2>React - Javascript - SCSS - AWS - Git</h2>
              <FaGithub />
            </div>
          </div>
        </div>
        <div className="Project">
          <div className="ProjectImg" style = {{backgroundImage : `url(${BikeSite})`}}>
            <div className="ImgOver" />
          </div>
          <div className="ProjectDesc">
            <h1>College Classes</h1>
            <div className="TextBox">
              <p>
                A Ecommerce Bicycle shop where you can build a custimized Bike
                and see how it looks in real time. Built with a working checkout
                page and cart features.
              </p>
            </div>
            <div className="ProjectBottom">
              <h2>React - Javascript - SCSS - AWS - Git</h2>
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
