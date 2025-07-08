import React, { use, useEffect, useState } from "react"
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
   const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <a href="#" className="text-xl font-bold text-white">
            <span className="text-purple">&lt;</span>
            DevPortfolio
            <span className="text-purple">/&gt;</span>
          </a>

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

        <hr />

        <div className="footer-bottom">
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <span>{currentTime}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
