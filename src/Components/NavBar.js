import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
    <div className="logo">Olayinka</div>
    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
      <li><a class="uk-button uk-button-default" href="#">About</a></li>
      <a class="uk-button uk-button-default" href="/EventList">Events</a>
      <li className="dropdown">
        <a class="uk-button uk-button-default" href="/Portfolio">Projects</a>
        <div className="dropdown-content">
        {/* <a class="uk-button uk-button-default" href="#">Fall Events</a> */}
          {/* Add more dropdown items */}
        </div>
      </li>
      {/* Add more navigation links */}
    </ul>
    <div className="menu-toggle" onClick={toggleMenu}>
      <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
    </div>
  </nav>
  );
};

export default NavBar;
