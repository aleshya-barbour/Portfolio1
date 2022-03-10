import React from "react";
import Contact from "./contact/Contact";
import './css/Home.css';
import Skills from "./skills/Skills";



export default function Home() {
  return(
    <>
    <div className="" >
      
    </div>
      <div className="home-div">
        <h1 className="neon pulsate">
          Hi, I am Aleshya. 
          Welcome to my web development portfolio!
        </h1>
      </div>


      <div>
        <Skills />
      </div>


      <div className="contact-section">
        <Contact />
      </div>

    


    </>
    
  )
  
  
}