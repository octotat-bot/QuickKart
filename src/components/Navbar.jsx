import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  const location = useLocation();
  
  // Helper function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <div className="logo-circle">
              <span className="logo-letter">Q</span>
            </div>
            <span className="logo-text">QuickKart</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="main-nav">
          <ul className="nav-links">
            <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className={`nav-item ${isActive('/research') ? 'active' : ''}`}>
              <Link to="/research" className="nav-link">Research</Link>
            </li>
            <li className={`nav-item ${isActive('/system-diagram') ? 'active' : ''}`}>
              <Link to="/system-diagram" className="nav-link">CLD Diagram</Link>
            </li>
            <li className={`nav-item ${isActive('/analysis') ? 'active' : ''}`}>
              <Link to="/analysis" className="nav-link">EPS Analysis</Link>
            </li>
            <li className={`nav-item ${isActive('/data-dashboard') ? 'active' : ''}`}>
              <Link to="/data-dashboard" className="nav-link">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 