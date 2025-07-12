// import React from "react"
import ProfileCard from "../../reactbit/ProfileCard/ProfileCard"
// import profileImg from "../assets/file_00000000fd0861f8a18b81556a2470b5.png"
import profileAvtar from "../../src/assets/profileAvtar.png"
const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="about-text">
          <p>Hi there! I'm a passionate full stack web developer with a keen eye for creating elegant, efficient, and user-friendly web applications. My journey in web development started a years ago, and I've been honing my skills ever since.</p>
          <p>I specialize in building modern web applications using various technologies. My approach combines technical expertise with creative problem-solving to deliver exceptional digital experiences.</p>
          <p>Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously expanding my knowledge through ongoing learning and professional development.</p>

          <div className="focus-areas">
            <h3>My Focus Areas:</h3>
            <ul>
              <li>Responsive Web Design</li>
              <li>Frontend Development</li>
              <li>Backend Systems</li>
              {/* <li>Database Architecture</li> */}
              <li>API Development</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>

        {/* <div className="about-image">
          <div className="image-container">
            <div className="placeholder">
              <img src={profileImg} alt="img" />
            </div>
          </div>
        </div> */}
        <ProfileCard name="Mohammad Tauz" title="MERN Stack" handle="tauz001" status="Online" contactText="Contact Me" avatarUrl={profileAvtar} showUserInfo={true} enableTilt={true} onContactClick={() => console.log("Contact clicked")} />
      </div>
    </section>
  )
}

export default AboutSection
