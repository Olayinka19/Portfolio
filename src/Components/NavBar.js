import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Animations from './Animations';
import ailogo from './assets/ailogo.png'
import './NavBar.css';

const NavBar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
  //   <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
  //   <div className="logo">Olayinka</div>
  //   <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
  //     <li><a  href="#">About</a></li>
  //     <a  href="/Animations">Animations</a>
  //     <li className="dropdown">
  //       <a  href="/Portfolio">Projects</a>
  //       <div className="dropdown-content">
  //       {/* <a  href="#">Fall Events</a> */}
  //         {/* Add more dropdown items */}
  //       </div>
  //     </li>
  //     {/* Add more navigation links */}
  //   </ul>
  //   <div className="menu-toggle" onClick={toggleMenu}>
  //     <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
  //     <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
  //     <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
  //   </div>
  // </nav>
  <div className='Nav'>
       <header>
      <nav>
        <div className="logo"><a href="/"><img src={ailogo} /></a></div>
        <ul className="navbar">
          {/* <li><a href="/About">About</a></li> */}
          <li><a href="/Portfolio">Portfolio</a></li>
    
          <li><a href="/HaikuGenerator">HaikuGtr</a></li>
          <li><a href="/ReverseTextForm">ReverseText</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/Budget">Budget</a></li>
        </ul>
      </nav>
    </header>
  </div>
  );
};

export default NavBar;
