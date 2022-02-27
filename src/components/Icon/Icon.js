import React from "react";
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import './eyecon.css'
export default function Icon() {
  return(
    <>
    <div className="eyecon">
      <div className="iconz">
        <button><span><AiOutlineGithub /></span></button>  
      </div>

      <div className="iconz">
        <button><span><BsLinkedin /> </span></button> 
      </div>

    </div>
    
    </>
  )

}