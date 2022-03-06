import React from "react";
import { IoLogoJavascript } from 'react-icons/io';
import { SiHtml5, SiReact, SiCss3 } from 'react-icons/si'
import './Skills.css';


const Skills = () => {
  return (
  <div className="skills">
    <h2>Languages used</h2>
    <p>Hint: hover over</p>
    <div className="codeIcon">
     <button> <IoLogoJavascript /> Javascript</button>
     <button><SiHtml5 /> Html</button> 
     <button><SiReact /> React</button>  
     <button><SiCss3 /> Css</button>    
    </div>
  </div>
 ) 
}

export default Skills
