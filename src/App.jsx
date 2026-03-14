import "./App.css";
import { useEffect } from "react";
import Header from "./header.jsx";
import Home from "./home.jsx";
import Skill from "./skill.jsx";
import About from "./about.jsx";
import Project from "./project.jsx";
import Contact from "./contact.jsx";
import { useState } from "react";

function App() {
  const [activeNav, setActiveNav] = useState("home");
  const [video, setVideo] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // reset animation by forcing reflow
            entry.target.classList.remove("animate");
            void entry.target.offsetWidth; // 🔥 force reflow
            entry.target.classList.add("animate");
            setActiveNav(entry.target.id);
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.35,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main">
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />
      <Home video={video} setVideo={setVideo} />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
