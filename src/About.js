import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div className="AboutSkillCont" id="About">
      <div className="AboutMeCont">
        <div className="AboutMeHead">
          <h1 className="About_Title">About Me</h1>
          <hr className="About_Line" />
        </div>
        <p>
        I'm a well-organised person, problem solver, and independent employee 
        with high attention to detail.  I’m a people-person with deep empathy 
        and work well in team environments.  
        </p>
        <p>Interested in the entire frontend spectrum and working on ambitious
        projects with positive people.</p>
      </div>
      <div className="SkillCont">
        <div className="AboutMeHead">
          <h1 className="About_Title">Skills</h1>
          <hr className="About_Line" />
        </div>
        <div className="SkillsList">
            <ul>
                <li className="Language_Text"><p className="Bullet">•</p>HTML & S(CSS)</li>
                <li className="Language_Text"><p className="Bullet">•</p>Javascript (ES6+)</li>
                <li className="Language_Text"><p className="Bullet">•</p>React / React Native</li>
                <li className="Language_Text"><p className="Bullet">•</p>Graphql</li>
            </ul>
            <ul className="Language_Column1">
                <li className="Language_Text"><p className="Bullet">•</p>SQL / NOSQL</li>
                <li className="Language_Text"><p className="Bullet">•</p>Node JS</li>
                <li className="Language_Text"><p className="Bullet">•</p>AWS Deployment</li>
                <li className="Language_Text"><p className="Bullet">•</p>Git & Agile</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
