import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../assets/bg.png";
//import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import {FaLinkedinIn} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {SiCodechef} from 'react-icons/si';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src = {IntroImg} alt = "IntroImg"/>
      </div>
      <div className="content">
        <h1>Riya <span>Israni</span></h1>
        <p>I am a <p1><TypeAnimation sequence = {['Student', 2000, 'Developer', 2000, 'Researcher', 2000]} 
                                              speed = {50} className="text-accent" repeat = {Infinity}/></p1></p>


        <a href = "https://www.linkedin.com/in/riya-israni"><FaLinkedinIn id = 'icon1' style = {{color: '#120032'}} size = '1rem'/></a>
        <a href = "https://instagram.com/riya.israni21?igshid=YmMyMTA2M2Y="><BsInstagram id = 'icon2' style = {{color: '#120032'}} size = '1rem'/></a>
        <a href = "https://www.codechef.com/users/israni21"><SiCodechef id = 'icon3' style = {{color: '#120032'}} size = '1rem'/></a>
        
      </div>
    </div>
  )
}

export default HeroImg
