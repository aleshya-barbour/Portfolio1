import React from 'react';
import Container from 'react-bootstrap/Container'

import './css/About.css'
import { FaGuitar, FaHiking} from 'react-icons/fa';
import { GiCook, GiFlowerPot} from 'react-icons/gi';
import { MdComputer, MdKayaking} from 'react-icons/md';


export default function About() {
 
   
  return(
    <>
     <div className='about'> 
      <div className='heading'>
       <span><h1 >All About Me</h1></span>
      </div>
    
      </div>
      <div className='hobbies'>
      <h3>Hobbies</h3>
      < GiFlowerPot size={45}/>
      < FaGuitar size={45}/>
      < MdKayaking size={45}/>
      < FaHiking size={45}/>
      < MdComputer size={45} />
      < GiCook size={45}/>
     </div>
     <div className='bio'>
       <h3>Bio</h3>
       <h4 style={{color: "black"}}>The Pitch</h4>
       <p>Aleshya Barbour is a passionate growing Web Developer, currently residing in Northren Virginia.
         While initially educated through Lambda coding bootcamp, her main purpose and inspiration is Web Development. 
        Aleshya has developed a Blockchain meetup group in her area, connecting both coders and clients together.
        In her free time she enjoys collaborating with <a href='https://joinco.in/'>Join Coin</a> where she is able to create projects and explore Web 3.0, crptocurrency, and NFT's.
        She consistently displays signs of self-motivating and is experimentally creative. 
        In conclusion, she is passioinate about Web Development and focuses on becoming a better developer and contributing to the developer community as a whole.
       </p>
       <h4 style={{color: "black"}}>Language List</h4>
       <p>Since studying Web development since May 2020, she has develop in <strong>Javascript </strong>and <strong>Node.js</strong>. 
         While most comfotable using <strong>HTML/HTML5, CSS/CSS3,</strong> and <strong>REACT</strong>. With experince with back-end
         she enjoys using <strong>API's</strong>, <strong>Ethreum Blockchain</strong> and has very limited experience with <strong>SQL</strong>. Aleshya has limited experience in <strong>PYTHON</strong>.

       </p>
       <h4 style={{color: "black"}}>Experience</h4>
       <p>Since 2020, she has built experience with full-stack development and have been creating responsive applications.
        Uses and has worked with chec and commerce js api for E-commerce applications. 

       </p>


     </div>
    </>
  )
}