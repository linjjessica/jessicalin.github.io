import email from "../images/header/email.png";
import github from "../images/header/github.png";
import linkedin from "../images/header/linkedin.png";

import "../styles/navbar.css"

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const sections = [
  { id: "about_me", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  { id: "extracurriculars", label: "Extracurriculars" },
];

function CustomHeader() {
  const [activeSection, setActiveSection] = useState("about_me");

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { root: null, rootMargin: "0px", threshold: 0.5 }
  );

  sections.forEach((section) => {
    const el = document.getElementById(section.id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
  }, []);

  const navigate = useNavigate();

  const handleMinesweeperClick = () => {
    navigate("/minesweeper"); // Navigate to the Minesweeper page
  };

  const handleWelcomeClick = () => {
    navigate("/"); // Navigate to the Welcome page
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-nav-content">
          <div className="container">
            <div className="pink_title">Jessica Lin</div>
            <div className="dark_title">Full Stack Developer</div>
            <div className="dark_title">I build reliable, scalable, and 
              complex web and mobile applications.</div>
          </div>
          
          <div className="row_container">
            <div className="nav-btn-container">
              {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-btn ${activeSection === section.id ? "active" : ""}`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
              ))}
            </div>
          </div>
          {/* <p></p> */}
          <div className="row_container">
            <div className="icon-btn-container">
              <a
                href="mailto:linjjessica@gmail.com"
                className="icon-btn"
                aria-label="Email"
              >
                <img src={email} alt="Email" />
              </a>
            </div>
            <div className="icon-btn-container">
                <a
                  href="https://www.linkedin.com/in/jjessicalin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="LinkedIn"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
            </div>
            <div className="icon-btn-container">
              <a
                  href="https://www.github.com/linjjessica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="LinkedIn"
                >
                <img src={github} alt="Python" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CustomHeader;
