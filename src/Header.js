import React, { useState } from "react";
import Opening from "./Opening";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Header = () => {
  const [open, setOpen] = useState(<Opening />);
  setTimeout(() => {
    setOpen(
      <div>
        <h1>Hi I'm John Joneses</h1>
        <h1>I'm a software engineer</h1>
      </div>
    );
  }, [2000]);
  return (
    <div className="Header_Cont">
      <div className="Title_Lines_Cont">
          <div className="MainText">
            <strong>Hello !</strong>
            <h1 className="Title_Name">I Am Ahmed Zitouni</h1>
            <h1 className="Title_Sub">
                I'm a software engineer based in New York. I specialize in building
                high quality web-sites and web-apps with a keen attention to detail.
            </h1>
          </div>
      </div>
      <div className="DesignB"/>
    </div>
  );
};

export default Header;
