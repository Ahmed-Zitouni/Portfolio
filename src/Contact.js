import React from "react";
import { MdMailOutline } from "react-icons/md";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  return (
    <div className="About_Cont" id="Contact">
      <div className="About_Title_Cont">
        <div className="About_Head_Cont">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <h1 className="About_Title">Contact</h1>
            <hr className="About_Line" />
          </ScrollAnimation>
        </div>
      </div>
      <div className="About_Text_Cont">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <p className="About_Text" style={{ textAlign: "center" }}>
            Have a question or want to work with me?
          </p>
        </ScrollAnimation>
      </div>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <a href="mailto:ahmedzitouni802@gmail.com"  className="Contact_Button">
            <div>
              <MdMailOutline />
              <p>Message Me</p>
            </div>
          </a>
        </ScrollAnimation>
    </div>
  );
};

export default Contact;
