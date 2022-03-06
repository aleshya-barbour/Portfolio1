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
          Web Development Portfolio
        </h1>
      </div>

      <div>
        <Skills />
      </div>

      {/* <div className="mid-section">
        <Portfolio />
      </div> */}

      <div className="contact-section">
        <Contact />
      </div>

    


    </>
    
  )
  
  
}