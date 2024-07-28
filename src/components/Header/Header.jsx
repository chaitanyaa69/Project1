import React, { useState } from 'react';
import './header.css';
import logo from './logo.png';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="Company Logo" className="logo" />
          </a>
        </div>
        <div className={`nav ${menuActive ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="/" className="nav-link" onClick={closeMenu}>Home</a></li>
            <li className="nav-item"><a href="/about" className="nav-link" onClick={closeMenu}>About</a></li>
            <li className="nav-item"><a href="/consult" className="nav-link" onClick={closeMenu}>Consulting</a></li>
            <li className="nav-item"><a href="/audit" className="nav-link" onClick={closeMenu}>Auditing</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
        <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
