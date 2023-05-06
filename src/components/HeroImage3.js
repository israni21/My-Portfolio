import React from 'react';
import "./HeroImageStyles3.css";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";

const HeroImage3 = () => {
  return (
    <div className = "footer2">
      <div className= "footer-container2">
            <div className = "projects">
                <h1>Projects</h1>
                <p>Dalle Clone</p>
                <p1>It is a website which allows the users to generate high-quality images from textual descriptions, 
                    similar to the original DALL-E model. </p1>
                <h3>Description:</h3>
                <p2>This website provides an implementation of the DALL-E model architecture developed by OpenAI.
                This website offer a user-friendly interface that allows users to input their textual descriptions and view 
                the corresponding generated images.</p2>
                <h3>Tech Stack:</h3>
                <p2>HTML, TailWind CSS, JavaScript, ReactJs, ExpressJs, OpenAI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p2>
                <a href = "https://github.com/israni21/DALL-E-CLONE"><img id = "img1" src = {Img1} alt = "Img1"></img></a>
                

                <h2>My Portfolio</h2>
                <p1>It is a well-designed portfolio website showcasing my skills, work and achievements to 
                    potential clients and employers.</p1>
                <h3>Description:</h3>
                <p2>This website includes a collection of project samples, testimonials, and personal information, 
                    such as education and internship experience. The goal of this responsive portfolio website is to showcase
                    my expertise, creativity and unique selling points.</p2>
                <h3>Tech Stack:</h3>
                <p2>HTML, CSS, JavaScript, ReactJs, ExpressJs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p2>
                <a href = "https://github.com/israni21/My-Portfolio"><img id = "img2" src = {Img2} alt = "Img2"></img></a>
               
                <h2>&#8826;Codinf&#8827;</h2>
                <p1>It is an app which allows the user to login into their Github
                    account and displays all the information of the user's git history.</p1>
                <h3>Description:</h3>
                <p2>When a user logins a dashboard appears which can display information about the User Info, 
                    Repositories and Issue of a Project. It has a very user-friendly interface which allows the user 
                    to easily navigate through the application in a very efficient manner.</p2>
                <h3>Tech Stack:</h3>
                <p2>Github Api, JSON Parsing, Retrofit Library, Figma for UI.</p2>
                <a href = "https://github.com/israni21/Codinf"><img id = "img3" src = {Img3} alt = "Img3"></img></a>

                <h2>Planning Zilla</h2>
                <p1>It is an app which allows the user to find the
                    information regarding their career according to their interests
                    at one place.</p1>
                <h3>Description:</h3>
                <p2>The application is designed to provide students with a convenient and user-friendly 
                    experience. It allows them to search for colleges that align with their interests and 
                    preferences and obtain comprehensive information about each institution. </p2>
                <h3>Tech Stack:</h3>
                <p2>This software uses the waterfall model for meeting the
                    desired requirements.</p2>
                    <a href = "https://github.com/israni21"><img id = "img4" src = {Img4} alt = "Img4"></img></a>

                
            </div>
      </div>
    </div>
  )
}

export default HeroImage3
