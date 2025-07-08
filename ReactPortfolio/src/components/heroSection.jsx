import React from "react"
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <span className="text-purple font-medium">Hello, I'm</span>
          <h1 className="hello">Asif Ans</h1>
          <h2 className="">Full Stack Web Developer</h2>
          <p className="">I build exceptional and accessible digital experiences for the web. Focused on creating clean, user-friendly interfaces backed by efficient code.</p>

          <div className="button-group">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View my work
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/tauz001" target="_blank" rel="noopener noreferrer">
              <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/mohammad-tauz-88861235a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin/>
            </a>
            <a href="mailto:tauzans609@gmail.com">
              <MdEmail/>
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-down">
        <span>Scroll</span>
        <MdKeyboardDoubleArrowDown/>
      </a>
    </section>
  )
}

export default HeroSection
