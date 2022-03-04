import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
       <p>lorem ipsum gory gypsy can harpt your own younder greek life and tomorrow can with red fingers and pink grapes kind and brute and young can become moonlight sounds under waves of green eveffervesants more of my bio and a lot of my bio an even the most from my bio and that is why it is fun to type and create web development websites </p>

     </div>
    </>
  )
}