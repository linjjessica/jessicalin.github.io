import React from "react";
import CustomHeader from "./header";
import Footer from "./footer";
import headshot from "../images/welcome/website_headshot.jpg";
import UCILogo from "../images/welcome/UCILogo.png";
import UtahIcon from "../images/welcome/Utah.jpg";
import LAIcon from "../images/welcome/LA.png";
import PythonLogo from "../images/experience/technologies/PythonLogo.png";
import CPlusLogo from "../images/experience/technologies/C++Logo.png";
import CSharpLogo from "../images/experience/technologies/CSharpLogo.png";
import CLogo from "../images/experience/technologies/CLogo.png";
import JavaLogo from "../images/experience/technologies/JavaLogo.png";
import JavaScriptLogo from "../images/experience/technologies//JavaScriptLogo.png";
import HTMLLogo from "../images/experience/technologies/HTMLLogo.png";
import ReactLogo from "../images/experience/technologies/ReactLogo.png";
import CSSLogo from "../images/experience/technologies/CSSLogo.png";
import NodeLogo from "../images/experience/technologies/NodeLogo.png";
import PostgreSQLLogo from "../images/experience/technologies/PostgreSQLLogo.png";
import DjangoLogo from "../images/experience/technologies/PythonDjango.png";
import MySQLLogo from "../images/experience/technologies/MySQLLogo.png";
import FlaskLogo from "../images/experience/technologies/FlaskLogo.png";
import MongoDBLogo from "../images/experience/technologies/MongoDBLogo.png";
import TypeScriptLogo from "../images/experience/technologies/TypescriptLogo.png";
import Background from "../images/welcome/SmallerBackgroundWithButterly.jpg";
import TroicomAppScreens from "../images/experience/TroicomAppScreens.png";
import DataCleanerGIF from "../images/experience/DataCleanerGif.mov";
import EYLogo from "../images/experience/EYLogo.png";
import TroicomLogo from "../images/experience/TroicomLogo.png";
import DSPWebsite from "../images/experience/DSPWebsite.png";

import "../styles/containers.css"
import "../styles/text.css"
import "../styles/images.css"
import "../styles/text.css"
import "../styles/html_elements.css"
import "../styles/experience.css"

function Welcome() {
  return (
    <div>
      <CustomHeader />
        <div className="right-side">
          <div className="main-content">
            <section id="about_me">
              <div className="dark_header">About Me</div>
              <div className="line"></div>
              <div className="row_container">
                <div className="image_wrapper">
                  <div className="rounded_wrapper">
                    <img 
                      src={headshot} 
                      alt="Personal Headshot"
                      className="image"
                    />
                  </div>
                </div>
                <p>
                  Hello world! My name is <b>Jessica Lin</b>, and welcome to my personal portfolio 
                  website. I coded this from scratch using JavaScript, React, HTML, and CSS, and deployed
                  it statically using Github pages. This website is best for desktop-sized screens, however it is
                  fully dynamic for screens of width 300 pixels and greater. Feel free to <b>reach out to me at&nbsp;
                  <a href="mailto:linjjessica@gmail.com" className="email-link">
                    linjjessica@gmail.com
                  </a>
                  !</b>
                  <br />
                  <br />
                  I am a first-generation <b>software engineer</b> studying <b>computer science and business administration at the
                  University of California, Irvine</b>,  
                  and am currently based in Los Angeles, California.
                  <br />
                  <br />
                  <div className="uci_container">
                    <img
                      src={UCILogo}
                      alt="UC Irvine Logo"
                      className="icon"
                    />
                    <div className="row_container">
                      <p>
                        <b>University of California, Irvine<br />
                        B.S. in Computer Science<br />
                        B.A. in Business Administration<br /></b>
                      </p>
                    </div>
                  </div>
                  <br />
                  <br />
                  I specialize in <b>full-stack mobile and web app development</b>, with a focus on 
                  sleek design and high-performance. I feel fortunate that I get to turn ideas into polished, 
                  intuitive products and <b>tackle complex problems through technical solutions. </b>
                  This website showcases the professional and personal projects that I have been working on.
                  <br />
                  <br />
                  In my freetime, I enjoy keeping myself busy with new hobbies. The list consists of traveling, thrifting, skiing, 
                  working out, and gaming. Ask me about my crawl from Budapest to Prague!
                  <br />
                  <br />
                </p>
              </div >
            </section>


            <section id="experience">
              <div className="dark_header">Experience</div>
              <div className="line"></div>
              <p></p>
              <div className="experience_container">
                <div className="container_20">
                  Jun-Aug 2026
                </div>
                <div className="container_80">
                  <div className="row_container_left_aligned">
                    <div className="company_logo"><img src={EYLogo} alt="HTML" className="icon" /></div>
                    <div className="company_text">Ernst & Young</div>
                  </div>
                  <div className="dark_large_text">Technology Consulting Intern</div>
                  <p>
                    Built a Python/Pandas data-validation tool that automated 
                    the data validation process across 500+ inconsistent CSV files. 
                    Designed and implemented a Streamlit UI that let users upload files, 
                    view reports, and download results.
                  </p>
                  <video autoPlay loop muted playsInline style={{ width: "100%",}}>
                    <source src={DataCleanerGIF} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="row_container_left_aligned2">
                    <div className="curved-outline-box">
                      <p> Python </p>
                    </div>
                    <div className="curved-outline-box">
                      <p> Pandas </p>
                    </div>
                    <div className="curved-outline-box">
                      <p> Streamlit </p>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="experience_container">
                <div className="container_20">
                  Oct 2025-Jun 2026
                </div>
                <div className="container_80">
                  <div className="row_container_left_aligned">
                    <div className="company_logo"><img src={TroicomLogo} alt="Troicom Logo" className="icon" /></div>
                    <div className="company_text">Troicom</div>
                  </div>
                  <div className="dark_large_text">Software Engineering Intern</div>
                  <p>
                    Redesigned 11 mobile screens for Troicom's DropGO app, a LoRa-connected game. 
                    Authored 5 C# scripts to connect UI/UX to backend logic, including a secure 
                    sign-out flow and Bluetooth device toggling page. Oversaw the end-to-end
                    app deployment process, including producing and editing 7 app store previews and  
                    2 professional app demo videos.
                  </p>
                  <img 
                    src={TroicomAppScreens} 
                    alt="Personal Headshot"
                    className="image"
                  />
                  <div className="row_container_left_aligned2">
                    <div className="curved-outline-box">
                      <p> C# </p>
                    </div>
                    <div className="curved-outline-box">
                      <p> AWS </p>
                    </div>
                    <div className="curved-outline-box">
                      <p> Unity </p>
                    </div>
                    <div className="curved-outline-box">
                      <p> Canva </p>
                    </div>
                  </div>
                </div>
                
              </div>
              
              <div className="row_container">
              </div>
            </section>



            <section id="skills">
              <div className="dark_header">Skills</div>
              <div className="line"></div>
              <p></p>
              <div className="row_container"><b>Backend: </b></div>
              <div className="row_container">
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={PythonLogo} alt="Python"/>
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> Python</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={CPlusLogo} alt="C++"/>
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> C++</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={CSharpLogo} alt="C#"/>
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> C#</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={CLogo} alt="C"/>
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> C</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={JavaScriptLogo} alt="JavaScript"/>
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> JavaScript</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={JavaLogo} alt="Java"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> Java</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={NodeLogo} alt="Node"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> Node</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={PostgreSQLLogo} alt="PostgreSQL"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> PostgreSQL</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={DjangoLogo} alt="Django"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> MySQL</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={MySQLLogo} alt="MySQL"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> MySQL</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={FlaskLogo} alt="Flask"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> Flask</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={MongoDBLogo} alt="MongoDB"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> MongoDB</div>
                  </div>
                </div></div>
                

              </div>
              <div className="row_container"><b>Frontend: </b></div>
              <div className="row_container">
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={JavaScriptLogo} alt="JavaScript"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> JavaScript</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={ReactLogo} alt="React"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> React</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={HTMLLogo} alt="HTML"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> HTML</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={CSSLogo} alt="CSS"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> CSS</div>
                  </div>
                </div></div>
                <div className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={TypeScriptLogo} alt="TypeScript"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text"> TypeScript</div>
                  </div>
                </div></div>
                
              </div>

              <div className="row_container"><b>Developer Tools: </b></div>
                
                
                
                
            </section>
            
            <section id="projects">
              <div className="dark_header">Projects</div>
              <div className="line"></div>
              <p></p>
              <div className="experience_container">
                <div className="row_container">
                  Redesigned 11 mobile screens for Troicom's DropGO, a LoRa-connected game. 
                    Authored 5 C# scripts to connect UI/UX to backend logic, including a secure 
                    sign-out flow and Bluetooth device toggling page. Oversaw the end-to-end
                    app deployment process, including producing and editing 7 app store previews and  
                    2 professional app demo videos.
                </div>
              </div>
              <p></p>
            </section>

            <section id="extracurriculars">
              <div className="dark_header">Extracurriculars</div>
              <div className="line"></div>
              <p></p>
              <div className="experience_container">
                <div className="container_20">
                  May 2023-Jan 2024
                </div>
                <div className="container_80">
                  <div className="dark_large_text">Delta Sigma Pi</div>
                  <div className="dark_large_text">Director of Technology</div>
                  <p>
                    <div className="rounded_wrapper">
                      <img 
                        src={DSPWebsite} 
                        alt="Personal Headshot"
                        className="image"
                      />
                    </div>
                    <p></p>
                    Modernized the website's architecture and automated the data input process. 
                    Managed digital operations for 45+ members, including website maintenance, 
                    email configuration, and domain management.
                  </p>
                </div>
                
              </div>
              <div className="experience_container">
                <div className="container_20">
                  Sept 2023-Dec 2023
                </div>
                <div className="container_80">
                  <div className="dark_large_text">Donald Bren School of Information and 
                    Computer Sciences</div>
                  <div className="dark_large_text">Learning Assistant - Introduction to Python</div>
                  <p>
                    Mentored 52 students in UCI’s essential intro to Python course by leading 
                    bi-weekly labs and resolving 85+ technical questions.
                  </p>
                </div>
                
              </div>
            </section>

          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Welcome;
