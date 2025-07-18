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
      skills: [
        {
          skillName: "HTML5",
          skillImg: "https://cdn.simpleicons.org/html5",
        },
        {
          skillName: "CSS3",
          skillImg: "https://cdn.simpleicons.org/css",
        },
        {
          skillName: "SASS",
          skillImg: "https://cdn.simpleicons.org/sass",
        },
        {
          skillName: "JavaScript",
          skillImg: "https://cdn.simpleicons.org/javascript",
        },
        {
          skillName: "TypeScript",
          skillImg: "https://cdn.simpleicons.org/typeScript",
        },
        {
          skillName: "Bootstrap",
          skillImg: "https://cdn.simpleicons.org/Bootstrap",
        },
        {
          skillName: "Tailwind",
          skillImg: "https://cdn.simpleicons.org/tailwindcss",
        },
        {
          skillName: "React",
          skillImg: "https://cdn.simpleicons.org/react",
        },
        {
          skillName: "Redux",
          skillImg: "https://cdn.simpleicons.org/redux",
        },
      ],
    },
    // {"CSS3"}, {"JavaScript"}, {"TypeScript"}, {"Bootstrap"}, {"SASS/SCSS"}, {"React"}, {"Redux"}
    {
      title: "Backend",
      skills: [
        {
          skillName: "Node",
          skillImg: "https://cdn.simpleicons.org/node.js",
        },
        {
          skillName: "Express",
          skillImg: "https://cdn.simpleicons.org/express/white",
        },
      ],
    },
    {
      title: "Database",
      skills: [
        {
          skillName: "MongoDB",
          skillImg: "https://cdn.simpleicons.org/mongodb",
        },
        {
          skillName: "MySql",
          skillImg: "https://cdn.simpleicons.org/mysql",
        },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        {
          skillName: "Git",
          skillImg: "https://cdn.simpleicons.org/git",
        },
        {
          skillName: "GitHub",
          skillImg: "https://cdn.simpleicons.org/github/white",
        },
      ],
    },
  ]

  const [taskList, setTaskList] = useState([])
  const handleDeleteTask = deleteIndex => {
    setTaskList(taskList => taskList.filter((_, idx) => idx !== deleteIndex))
  }

  return (
    <BrowserRouter basename="/PortfolioTauz/">
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
