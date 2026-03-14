import "./header.css";
import "./App.css";
import { useState, useEffect } from "react";

function Header( { activeNav, setActiveNav } ) {
  const [width, setWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // file must be in public folder
    link.download = "Debabrata_Dey_Resume.pdf"; // filename for download
    link.click();
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    // cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Portfolio
        </a>

        <button className="cvbtn" onClick={handleDownload}>
          CV <i className="fa-solid fa-download"></i>
        </button>

        <i
          id="hamburger"
          style={{
            display: width < 750 ? "block" : "none",
            right: toggle ? "110px" : "5vw",
          }}
          className={toggle ? "fa-solid fa-xmark" : "fas fa-bars"}
          onClick={() => {
            setToggle(!toggle);
          }}
        ></i>

        <nav
          className="navbar"
          style={{ display: width < 750 ? "none" : "block" }}
        >
          <a href="#home" style={{ "--i": 1 }} className= {activeNav === "home" ? "active" : ""} onClick={() => setActiveNav("home")}>
            Home
          </a>
          <a href="#about" style={{ "--i": 2 }} className= {activeNav === "about" ? "active" : ""} onClick={() => setActiveNav("about")}>
            About
          </a>
          <a href="#skill" style={{ "--i": 3 }} className= {activeNav === "skill" ? "active" : ""} onClick={() => setActiveNav("skill")}>
            Skill
          </a>
          <a href="#project" style={{ "--i": 4 }} className= {activeNav === "project" ? "active" : ""} onClick={() => setActiveNav("project")}>
            Project
          </a>
          <a href="#contact" style={{ "--i": 5 }} className= {activeNav === "contact" ? "active" : ""} onClick={() => setActiveNav("contact")}>
            Contact
          </a>
        </nav>
      </header>
      <nav
        className="burger"
        style={{
          display: width < 750 ? "flex" : "none",
          right: toggle ? "0px" : "-180px",
        }}
      >
        <a href="#home" className={activeNav === "home" ? "active" : ""} onClick={() => setActiveNav("home")}>Home</a>
        <a href="#about" className={activeNav === "about" ? "active" : ""} onClick={() => setActiveNav("about")}>About</a>
        <a href="#skill" className={activeNav === "skill" ? "active" : ""} onClick={() => setActiveNav("skill")}>Skill</a>
        <a href="#project" className={activeNav === "project" ? "active" : ""} onClick={() => setActiveNav("project")}>Project</a>
        <a href="#contact" className={activeNav === "contact" ? "active" : ""} onClick={() => setActiveNav("contact")}>Contact</a>
      </nav>
    </>
  );
}

export default Header;
