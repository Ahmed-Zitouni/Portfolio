import React from "react";
import { FiHexagon } from "react-icons/fi";
import "animate.css/animate.min.css";

const HeaderBar = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let navbar = document.getElementById("navbar");
    let currentScrollPos = window.pageYOffset;
    let Icon = document.getElementsByClassName("Logo_Cont")[0];
    if (currentScrollPos <= 20) {
      navbar.style.backgroundColor = "transparent";
      navbar.style.color = "white";
      navbar.style.boxShadow = "none";
      Icon.style.color = "white";
    } else {
      navbar.style.backgroundColor = "white";
      navbar.style.color = "#1f2833";
      navbar.style.boxShadow = "-1px 1px 1px rgba(20, 97, 255, 0.1)";
      Icon.style.color = "#1f2833";
    }
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <div id="navbar" className="Header_Top_Cont">
      <div className="Logo_Cont">
        <FiHexagon className="Header_Hex" strokeWidth={1}></FiHexagon>
        <h1 className="Header_Initial_Hex">A</h1>
      </div>
      <ul className="Header_Sections_Cont">
        <li className="Section_Text">
          <a href="#About">About</a>
        </li>

        <li className="Section_Text">
          <a href="#Projects">Projects</a>
        </li>
        <li className="Section_Text">
          <a href="#Contact">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderBar;
