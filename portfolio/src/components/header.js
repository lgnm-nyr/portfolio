import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/header.css";


const Header = () => {
  return (
    <header className="header">
      <div className="title-section">
        <h1><Link to="/">My Website</Link></h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/my_projects">My Projects</Link></li>
          <li><Link to="/about_me">About</Link></li>
          <li><Link to="/contact_me">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
