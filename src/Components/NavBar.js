import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Animations from './Animations';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
    <nav>
      <ol>
        <a href='/'>Home</a>
        <a href='/BlogPost'>Blog</a>
        <a href='/About'>About</a>
        <a href="/Contact">Contact</a>
      </ol>
    </nav>
  </div>
  );
};

export default NavBar;
