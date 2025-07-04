import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>PoolPro Ivan</h2>
          <span>Cathedral City Pool Services</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>Inicio</a>
          <a href="#services" className="nav-link" onClick={closeMenu}>Servicios</a>
          <a href="#about" className="nav-link" onClick={closeMenu}>Acerca de</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contacto</a>
        </nav>

        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 