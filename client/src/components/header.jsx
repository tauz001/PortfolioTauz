import React, {useState} from "react"
import {FaBars, FaTimes} from "react-icons/fa"


function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev)
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <header id="header">
      <div className="container">
        <a href="#" className="logo">
          <span className="text-purple">&lt;</span>
          DevPortfolio
          <span className="text-purple">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button id="mobile-menu-btn" onClick={handleMenuToggle} aria-label="Toggle mobile menu">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav${menuOpen ? " active" : ""}`} id="mobile-nav">
          <a href="#home" className="mobile-nav-link" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#about" className="mobile-nav-link" onClick={handleLinkClick}>
            About
          </a>
          <a href="#projects" className="mobile-nav-link" onClick={handleLinkClick}>
            Projects
          </a>
          <a href="#skills" className="mobile-nav-link" onClick={handleLinkClick}>
            Skills
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
