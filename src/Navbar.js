import React, { useState } from 'react';
import "./Navbar.css";
import "./App.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const showOffCanvasMenu = (event) => {
    event.preventDefault();
    setIsMenuOpen(true);
    setIsOverlayVisible(true);
    document.querySelector('.menu-btn').classList.add('clicked');
  };

  const closeOffCanvasMenu = (event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1000);
  };

  return (
    <div className="Navbar">
      <nav className="navbar" id="home">
        <div className="btn-container">
          <button className={`menu-btn ${isMenuOpen ? 'menu-btn-clicked' : 'menu-btn-unselected'}`} id="menu-btn" onClick={showOffCanvasMenu}>
            <i className="fa-regular fa-bars-staggered"></i>
          </button>
        </div>
        <div className="logo">
          <span className="logo-bg"></span>
          <span className="logotype">pu</span>
          <span className="logo-text">technology</span>
          <span className="logo-description">experts in polyurethanes</span>
        </div>
        <div className={`offcanvas-menu ${isMenuOpen ? 'show-offcanvas-menu' : 'close-offcanvas-menu'}`} id="offcanvas-menu">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#equipment">Equipment</a></li>
            <li className="nav-item"><a className="nav-link" href="#applications">Applications</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          <button className="close-menu-btn" id="close-menu-btn" onClick={closeOffCanvasMenu}>
            <i className="fa-regular fa-xmark"></i>
          </button>
        </div>
      </nav>
      {isOverlayVisible && (
        <div className={`overlay ${isMenuOpen ? 'overlay-fade-in' : 'overlay-fade-out'}`} onClick={closeOffCanvasMenu}></div>
      )}
    </div>
  );
}

export default Navbar;