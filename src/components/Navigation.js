import React from "react";
import './css/Nav.css';
import { Routes, Route, Link } from "react-router-dom";


import About from "./About";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Video from "./Video";


export default function Navigation() {
  return(
   
    <div className="navigate">
      <nav>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/Portfolio'>Portfolio</Link>
        <Link className='link' to='/video'>Videos</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='Portfolio' element={<Portfolio />} />
        <Route path='Video' element={<Video />} />
      </Routes>
    </div>
  )
}
  