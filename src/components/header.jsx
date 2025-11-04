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
        <div className="navbar-nav-left">
          <div className="jessica-lin-container">
            <div className="jessica-lin-text">
              <img src={JessicaLin} alt="Jessica Lin" className="image" />
            </div>
          </div>
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
          <div className="dropdown-content">
            <button
              id="LoadMinesweeper"
              className="dropbtn"
              onClick={handleMinesweeperClick}
            >
            Minesweeper
          </button>
        </div>
          <button
            id="LoadWelcome"
            className="navbar-nav-btn"
            onClick={handleWelcomeClick}
          >Contact Me
          </button>
        </div>
        {/* <h1 className="navbar-nav-middle"> */}
          
          
        {/* </h1> */}
        <div className="navbar-nav-right">
          {/* <button className="navbar-nav-btn">My Interests</button> */}
          {/* <button className="navbar-nav-btn">Contact</button> */}
          {/* </div> */}
          {/* <div className="navbar-nav-icon-container">
          <img src={Github} alt="Github" className="navbar-nav-icon" />
          <img src={LinkedIn} alt="LinkedIn" className="navbar-nav-icon" /> */}
          
        </div>
      </nav>
    </div>
  );
}

export default CustomHeader;
