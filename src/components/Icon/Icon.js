import React from "react";
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin, BsTelephoneFill } from 'react-icons/bs';
import './eyecon.css'
export default function Icon() {
  return(
    <>
    <div className="eyecon">
      <div className="iconz">
       <a href="https://github.com/aleshya-barbour"><button ><span><AiOutlineGithub /></span></button></a>   
      </div>

      <div className="iconz">
        <a href="https://www.linkedin.com/in/aleshya-michelle-879b3213b/"><button><span><BsLinkedin /> </span></button></a> 
      </div>

      <div className="iconz">
      <a data-rel="external" href="tel:5719690965" ><button ><span><BsTelephoneFill /> 571-969-0965</span></button></a>
      </div>

    </div>

   
    
    </>
  )

}