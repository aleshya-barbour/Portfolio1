import React from "react";
import './css/Nav.css';
import { Routes, Route, Link } from "react-router-dom";


import About from "./About";
import Home from "./Home";
import Contact from "./contact/Contact";


export default function Navigation() {
  return(
   
    <div className="navigate">
      <nav>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/contact'>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />

      </Routes>
    </div>
  )
}
  