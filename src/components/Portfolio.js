import React from 'react'
import './css/Portfolio.css'

const Portfolio = () => {
  return (
    <>

    <div className='portfolio'>

    <span><h1> My Portfolio</h1></span>

   
      
      <button className='port'>
         <a className='anchor' href='https://kind-khorana-01df3e.netlify.app'>
            <h1>WEATHER APP</h1> 
         </a>
      </button>
      
    

      <button className='port'>
         <a className='anchor' href='https://gifted-einstein-9aa510.netlify.app'>
            <h1>  My Todo APP</h1> 
         </a>
      </button>
      

      <button className='port'>
         <a className='anchor' href='https://kind-khorana-01df3e.netlify.app'>
            <h1> kombucha App
               </h1> 
         </a>
      </button>
      
     </div>
     
    </>  

  )
}

export default Portfolio;