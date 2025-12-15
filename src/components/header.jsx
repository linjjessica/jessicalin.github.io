import Github from "../images/header/github.png";
import LinkedIn from "../images/header/linkedin.png";
import JessicaLin from "../images/header/JessicaLin.png";


import "../styles/navbar.css"

import { useNavigate } from "react-router-dom";

function CustomHeader() {
  const navigate = useNavigate();

  const handleMinesweeperClick = () => {
    navigate("/minesweeper"); // Navigate to the Minesweeper page
  };

  const handleWelcomeClick = () => {
    navigate("/"); // Navigate to the Welcome page
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-nav-content">
          <div className="pink_title">Jessica Lin</div>
          <div className="dark_title">Full Stack Developer</div>
          <div className="dark_title">I build reliable, scalable, and 
            complex web and mobile applications.</div>
          <p></p>
          <div className="row_container">
            <div className="navbar-nav-btn-container">
              <button
                id="LoadWelcome"
                className="navbar-nav-btn"
                onClick={handleWelcomeClick}
              >About Me
              </button>
              <button
                id="LoadWelcome"
                className="navbar-nav-btn"
                onClick={handleWelcomeClick}
              >Experience
              </button>
              <button className="navbar-nav-btn">Projects</button>
              <button
                id="LoadWelcome"
                className="navbar-nav-btn"
                onClick={handleWelcomeClick}
              >Contact Me
              </button>
            </div>
          </div>
          <p></p>
          <div className="row_container">
            <div className="navbar-nav-icon-container">
              <button className="navbar-nav-icon">
                <img src={null} alt="Python" className="icon" />
              </button>
            </div>
            <div className="navbar-nav-icon-container">
              <button className="navbar-nav-icon">
                <img src={null} alt="Python" className="icon" />
              </button>
            </div>
            <div className="navbar-nav-icon-container">
              <button className="navbar-nav-icon">
                <img src={null} alt="Python" className="icon" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CustomHeader;
