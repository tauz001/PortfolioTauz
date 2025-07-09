import "./App.css"
import "./TaskApp.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from "./components/MainLayout"
import AboutSection from "./components/aboutSection"
import ContactSection from "./components/contactSection"
import HeroSection from "./components/heroSection"
import ProjectSection from "./components/projectSection"
import SkillsSection from "./components/skillsSection"
import {useState} from "react"
import WeatherApp from "./fragments/WeatherApp"
import TaskAppImg from "./assets/taskAppImg.png"
import PortfolioImg from "./assets/portfolioAppImg.png"
import weatherAppImg from "./assets/weatherAppImg.png"
import TaskTrackerApp from "./fragments/TaskTrackerApp"
import SplashCursor from "../reactbit/src/App.jsx/SplashCursor"

function App() {
  const projects = [
    {
      title: "Task Management App",
      description: "A productivity application for organizing tasks .",
      image: `${TaskAppImg}`,
      tags: ["HTML/CSS", "JavaScript", "DummyJSON API"],
      githubUrl: "#",
      liveUrl: "/projects/taskTrackerApp",
    },

    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills and professional experience.",
      image: `${PortfolioImg}`,
      tags: ["HTML/CSS", "JavaScript", "React"],
      githubUrl: "#",
      liveUrl: "/",
    },

    {
      title: "Weather Application",
      description: "Weather forecast app with location search functionality, eye catching UI/UX.",
      image: `${weatherAppImg}`,
      tags: ["HTML/CSS", "JavaScript", "Weather API", "React"],
      githubUrl: "#",
      liveUrl: "/projects/weatherApp",
    },
  ]

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Bootstrap", "SASS/SCSS", "React", "Redux"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub"],
    },
  ]

  const [taskList, setTaskList] = useState([])
  const handleDeleteTask = deleteIndex => {
    setTaskList(taskList => taskList.filter((_, idx) => idx !== deleteIndex))
  }

  return (
    <BrowserRouter basename="/PortfolioTauz/">
      <SplashCursor />
      <Routes>
        {/* Portfolio website with header/footer */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HeroSection />
              <AboutSection />
              <ProjectSection projects={projects} />
              <SkillsSection skillCategories={skillCategories} />
              <ContactSection />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutSection />
            </MainLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <MainLayout>
              <ProjectSection projects={projects} />
            </MainLayout>
          }
        />
        <Route
          path="/skills"
          element={
            <MainLayout>
              <SkillsSection skillCategories={skillCategories} />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactSection />
            </MainLayout>
          }
        />

        {/* different routes without header/footer */}
        <Route path="/projects/taskTrackerApp" element={<TaskTrackerApp />} />

        <Route path="/projects/weatherApp" element={<WeatherApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// commit -- seprate the entire logics and data to a folder store and use usecontext to get the data
