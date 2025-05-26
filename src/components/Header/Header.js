import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Import the CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Track menu open/close state

  // Toggle menu open/close when hamburger is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  const closeMenuOnOutsideClick = (e) => {
    if (!e.target.closest('.header-container')) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the menu
    document.addEventListener('click', closeMenuOnOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', closeMenuOnOutsideClick);
    };
  }, []);

  // Close the menu when a nav item is clicked
  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <h1>InteriorDesign</h1> {/* Replace this with a logo image */}
        </div>

        {/* Wrapper for hamburger menu */}
        <div className="header-right">
          {/* Hamburger icon */}
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? (
              <span className="close-icon">X</span>  // Show the cross (X) when the menu is open
            ) : (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </div>
        </div>

        {/* Navigation links */}
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={handleNavItemClick}>Home</Link></li>
            <li><Link to="/services" onClick={handleNavItemClick}>Services</Link></li>
            <li><Link to="/projects" onClick={handleNavItemClick}>Projects</Link></li>
            <li><Link to="/about" onClick={handleNavItemClick}>About Us</Link></li>
            <li><Link to="/shop" onClick={handleNavItemClick}>Shop</Link></li>
            <li><Link to="/contact" onClick={handleNavItemClick}>Contact Us</Link></li>
          </ul>
        </nav>

        {/* Always visible "GET INSTANT QUOTE" button */}
        <div className="quote-button">
          <Link to="/quote" className="quote-btn">GET INSTANT QUOTE</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
