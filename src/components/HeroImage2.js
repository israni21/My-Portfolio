import React, { useState } from 'react';
import "./HeroImageStyles2.css";
import AboutImg from "../assets/Photo.jpeg";
//import { FaLinkedin, FaInstagram, FaCodeChef } from 'react-icons/fa';

const HeroImage2 = () => {
  const[animate, setAnimation] = useState(false);
    const changeAnimation = () => {
        if(window.scrollY >= 100){
            setAnimation(true);
        }
        else{
            setAnimation(false);
        }
    };

    window.addEventListener("scroll", changeAnimation);

  return (
    <div className = "footer">
      <div className = "footer-container">
        
        <div className = {animate ? "text text1" : "text"}>
        <h1>About</h1>
            <p>I'm Riya Israni, currently a student of SGGSCC, Delhi University 
              pursuing BSc. (H) CS. My interests lie in diverse amount of things, ranging 
              from research to development. I enjoy discussing new projects and design challenges. 
              I also like reading and watching thriller movies.</p>


        </div>
        
        <div className = {animate ? "about-img animate-img" : "about-img"}>
              <img src = {AboutImg} alt = "AboutImg"/>
              
        </div>

        <div className = 'h-divider'>
          <div className = 'shadow'></div>
          
        </div>
        
        <div className = "left">
              <p></p>
              <h1>Education</h1>
              <p5>, BSc. (Hons.) Computer Science</p5>
              <p3>2023 | NEW DELHI</p3>

              <div className = 'vl'></div>
              <p6>, Class 12th</p6>
              <p3>2020 | GORAKHPUR</p3>
              <p3>91.2%</p3>

              <div className = 'vl'></div>
              <p6>, Class 10th</p6>
              <p3>2018 | GORAKHPUR</p3>
              <p3>91.6%</p3>


              <h1>Skills</h1>

              <div className = 'skill-main'>
                <h2>Programming Languages</h2>
                <div id = "arrow">
                    <ul>
                      <p1><li><span>Java</span></li></p1>
                      <p1><li><span>C++</span></li></p1>
                      <p1><li><span>Android</span></li></p1>
                      <p1><li><span>HTML</span></li></p1>
                      <p1><li><span>CSS</span></li></p1>
                      <p1><li><span>JavaScript</span></li></p1>
                      <p1><li><span>ReactJs</span></li></p1>
                      <p1><li><span>Python</span></li></p1>
                    </ul>
                </div>
                <h2>Database & Design Tools</h2>
                <div id = "arrow">
                    <ul>
                        <p1><li><span>SQL</span></li></p1>
                        <p1><li><span>Figma</span></li></p1>
                        <p1><li><span>Canva</span></li></p1>
                    </ul>
                </div>
                <h2>Other Skills</h2>
                <div id = "arrow">
                    <ul>
                      <p1><li><span>OOPS</span></li></p1>
                      <p1><li><span>DSA</span></li></p1>
                      <p1><li><span>Linux</span></li></p1>
                      <p1><li><span>Git</span></li></p1>
                      <p1><li><span>CI/CD</span></li></p1>
                  </ul>
                </div>
              </div>
              <div className = 'skill-grid-outer'>
                <h2>Programming Languages</h2>
                <h2>Database & Design Tools</h2>
                <h2>Other Skills</h2>
              </div>

              <div className = 'skill-grid-inner'>
                <div id = "arrow">
                    <ul>
                      <p1><li><span>Java</span></li></p1>
                      <p1><li><span>C++</span></li></p1>
                      <p1><li><span>Android</span></li></p1>
                      <p1><li><span>HTML</span></li></p1>
                      <p1><li><span>CSS</span></li></p1>
                      <p1><li><span>JavaScript</span></li></p1>
                      <p1><li><span>ReactJs</span></li></p1>
                      <p1><li><span>Python</span></li></p1>
                    </ul>
                </div>
                <div id = "arrow">
                    <ul>
                        <p1><li><span>SQL</span></li></p1>
                        <p1><li><span>Figma</span></li></p1>
                        <p1><li><span>Canva</span></li></p1>
                    </ul>
                </div>
                <div id = "arrow">
                    <ul>
                      <p1><li><span>OOPS</span></li></p1>
                      <p1><li><span>DSA</span></li></p1>
                      <p1><li><span>Linux</span></li></p1>
                      <p1><li><span>Git</span></li></p1>
                      <p1><li><span>CI/CD</span></li></p1>
                  </ul>
                </div>
              </div>
              
              

              <h1>Internship Experience</h1>
              <p2>, Application Developer Intern</p2>
              <p3>(Aug 2022 - Sept 2022)</p3>
              <div id = "arrow">
                <ul>
                    <p1><li><span>Created a Hotel Booking App for their course similar to OYO.</span></li></p1>
                    <p1><li><span>Translated designs and wireframes into high quality code.</span></li></p1>
                    <p1><li><span>Worked on bug fixing and improving application performance.</span></li></p1>
                </ul>
              </div>

              <p></p>
              <p4>, Application Developer Intern</p4>
              <p3>(July 2022 - Aug 2022)</p3>
              <div id = "arrow">
                <ul>
                    <p1><li><span>Designed and build three advanced applications.</span></li></p1>
                    <p1><li><span>Published these applications on Play Store - (Motion Detector Alarm, Super Flash, NoteTaker)</span></li></p1>
                    <p1><li><span>Maintained the performance of applications by fixing bugs.</span></li></p1>
                </ul>
              </div>

              <h1>Summary</h1>
                <p1>I am a creative individual who enjoys exploring new ideas and concepts to develop unique solutions to problems. I am a natural problem solver, 
                with a keen ability to break down complex issues and find effective solutions.
                I am currently someone who has been venturing into different career paths and working in diverse contexts.
                My background includes research and software development, but my curiosity lies in product development and strategic planning.
                </p1>
             
        </div>

      </div>
      </div>
  )
}

export default HeroImage2
