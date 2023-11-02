import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='header'>
    <ul>
          <Link className='icon' to="/hello" >Day1</Link>
          <Link className='icon' to="/About " >Day2</Link>
           {/* <Link  className='icon' to="/Navigation" >Day3</Link> */}
          
          
    </ul>
        
    </div>
  )
}

export default NavBar