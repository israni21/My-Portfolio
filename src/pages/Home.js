import React from 'react';
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import About from "../components/HeroImage2";
import Projects from "../components/HeroImage3";
import Contact from "../components/HeroImage4";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home
