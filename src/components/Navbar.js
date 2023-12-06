import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='header'>
    <ul>
          <Link className='icon' to="/hello" >Day1</Link>
          <Link className='icon' to="/About " >Day2</Link>
           <Link  className='icon' to="/Navigation" >Day3</Link>
           <Link  className='icon' to="/Product" >Day5</Link>
           <Link  className='icon' to="/Counter" >Day6</Link>
           <Link  className='icon' to="/CounterState" >Day7</Link>
           <Link  className='icon' to="/DataApi" >Day8</Link>
           <Link  className='icon' to="/RegistrationForm" >Day10</Link>
           <Link  className='icon' to="/FormValidation" >Day11</Link>
           <Link  className='icon' to="/ListMap" >Day12</Link>
           <Link  className='icon' to="/ToDoList" >Day13</Link>
           <Link  className='icon' to="/Toggle" >Day14</Link>
           <Link  className='icon' to="/LoginPage" >Day15</Link>
          
    </ul>
        
    </div>
  )
}

export default NavBar