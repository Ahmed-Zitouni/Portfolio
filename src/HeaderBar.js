import React, {useState, useEffect} from "react";
import { FiHexagon } from "react-icons/fi";
import "animate.css/animate.min.css";
import { HamburgerSliderReverse } from 'react-animated-burgers'

const HeaderBar = () => {
  const [IsTop, setIsTop] = useState(true)
  const [OpenHam, setOpenHam] = useState(false)
  const [PageWidth, setPageWidth] = useState(Math.max(document.documentElement.clientWidth, window.innerWidth || 0))
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let navbar = document.getElementById("navbar");
    let currentScrollPos = window.pageYOffset;
    let Icon = document.getElementsByClassName("Logo_Cont")[0];
    if (currentScrollPos <= 20 && !OpenHam) {
      setIsTop(true)
      navbar.style.backgroundColor = "transparent";
      navbar.style.color = "white";
      navbar.style.boxShadow = "none";
      Icon.style.color = "white";
    } else {
      setIsTop(false)
      navbar.style.backgroundColor = "white";
      navbar.style.color = "#1f2833";
      navbar.style.boxShadow = "-1px 1px 1px rgba(20, 97, 255, 0.1)";
      Icon.style.color = "#1f2833";
    }
    if (prevScrollpos > currentScrollPos && !OpenHam) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };
  const OpenMenu = () => {
    if(OpenHam) return setOpenHam(false)
    setOpenHam(true)

  }
  useEffect(() => {
    function handleResize() {
      setPageWidth(window.innerWidth)
      if(PageWidth > 729 && OpenHam) {
        setOpenHam(false)
        document.getElementsByTagName("body")[0].style.overflowY = "unset"
      }
    }
    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })
  useEffect(() => {
    if(PageWidth < 730 && OpenHam) {
      document.getElementsByTagName("body")[0].style.overflowY = "hidden"
    } else {
      document.getElementsByTagName("body")[0].style.overflowY = "unset"
    }
  },[OpenHam])
  const OpenMenuStyle = {transform: "translateX(0%)", display: "flex"}
  return (
    <div id="navbar" className="Header_Top_Cont">
      <div className="Logo_Cont">
        <FiHexagon className="Header_Hex" strokeWidth={1}></FiHexagon>
        <h1 className="Header_Initial_Hex">A</h1>
      </div>
      <ul className="Header_Sections_Cont">
        <HamburgerSliderReverse className = "Hamburger" isActive={OpenHam} toggleButton={() => {OpenMenu()}} buttonColor="transparent" barColor={IsTop || OpenHam ? "white" : "rgb(31, 40, 51)"} />
        <div className="DropDown_Cont" style = {OpenHam ? OpenMenuStyle : null}>
          <li className="DropDown">
            <a onClick={() => setOpenHam(false)} href="#About">About</a>
          </li>
          <li className="DropDown">
            <a onClick={() => setOpenHam(false)} href="#Projects">Projects</a>
          </li>
          <li className="DropDown">
            <a onClick={() => setOpenHam(false)} href="#Contact">Contact Me</a>
          </li>
        </div>

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
