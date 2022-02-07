import React from "react";
import Contact from "./contact/Contact";
import './css/Home.css';
import './portfolio/Portfolio'
import Portfolio from "./portfolio/Portfolio";

export default function Home() {
  return(
    <>
      <div className="home-div">
        <h1 className="neon pulsate">
          Web Development Portfolio
        </h1>

        
      </div>
      <div>
        <Contact />
      </div>

      <div>
      <Portfolio />
      </div>

      <footer>
        Made by Aleshya Barbour
      </footer>
    </>
    
  )
  
  
}