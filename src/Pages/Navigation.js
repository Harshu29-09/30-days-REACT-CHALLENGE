
import React from 'react'
import './Navigation.css'
// import Footer from './Footer'


function Navigation() {
  return (
    <>
    <div className='Navii'>
      <nav>
     

          <div className="logo">DAY<span>3</span></div>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="menu-btn">
            <i className="fas fa-bars"></i>
          </label>
          <ul className="nav-links">
            <li className="hover-underline-animation"><a href="#main">Home <i className='bx bx-home-circle bx-flip-horizontal'></i></a></li>
            <li className="hover-underline-animation"><a href="#about">About <i className='bx bxl-graphql'></i></a></li>
            {/* <li className="hover-underline-animation"><a href="#skill">Skill <i className='bx bx-code-alt'></i></a></li>
            <li className="hover-underline-animation"><a href="#service">Service <i className='bx bxs-briefcase'></i></a></li>
            <li className="hover-underline-animation"><a href="#project">Project <i className='bx bx-slideshow'></i></a></li> */}
            <li className="hover-underline-animation"><a href="#contact">Contact <i className='bx bx-mobile-alt'></i></a></li>
            <li className="hover-underline-animation"><a href="#project">Project <i className='bx bx-slideshow'></i></a></li>
          </ul>
        </nav>
        <h1>TASK 3</h1>
        <h5>Header Build a header component and a footer component, and render them in an app.<br></br></h5>
        {/* <Footer/>
   */}
            
       


        </div>

    </>
  )
}

export default Navigation