import React from 'react' 
import {FiHexagon} from 'react-icons/fi'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const HeaderBar = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var navbar = document.getElementById("navbar")
      var currentScrollPos = window.pageYOffset;
      var Icon = document.getElementsByClassName("Logo_Cont")[0]
      this.console.log(Icon)
      if (currentScrollPos <= 5) {
        this.console.log("yes")
        navbar.style.backgroundColor = "transparent";
        navbar.style.color = "white";
        navbar.style.boxShadow = "none";
        Icon.style.color = "white"
        console.log(currentScrollPos)
      } else {
        navbar.style.backgroundColor = "white";
        navbar.style.color = "#1f2833";
        navbar.style.boxShadow = "-1px 1px 1px rgba(20, 97, 255, 0.1)";
        Icon.style.color = "#1f2833";
      }
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        console.log(prevScrollpos, "prevscroll")
        console.log(currentScrollPos, "current")
      } else {
        navbar.style.top = "-80px";
      } 
      prevScrollpos = currentScrollPos;
    }
    return (
        <navbar id="navbar" className="Header_Top_Cont">
                
            <div className="Logo_Cont">
<FiHexagon className="Header_Hex" strokeWidth={1} >
</FiHexagon>
<h1 className="Header_Initial_Hex">K</h1>
    </div>
            <ul className="Header_Sections_Cont">
            <li className="Section_Text">
   <a href="#About">About</a> 
                </li> 

            <li className="Section_Text"><a href="#Projects">Projects</a></li>
            <li className="Section_Text"><a href="#Contact">Contact Me</a></li>
            </ul>

        </navbar>
    )
}

export default HeaderBar