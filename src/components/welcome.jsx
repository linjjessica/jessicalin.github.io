import React from "react";
import CustomHeader from "./header";
import Footer from "./footer";
import headshot from "../images/welcome/website_headshot.jpg";
import UCILogo from "../images/welcome/UCILogo.png";
import UtahIcon from "../images/welcome/Utah.jpg";
import LAIcon from "../images/welcome/LA.png";
import PythonIcon from "../images/welcome/PythonLogo.png";
import CIcon from "../images/welcome/C++Logo.png";
import JavaScriptIcon from "../images/welcome/JavaScriptLogo.png";
import HTMLIcon from "../images/welcome/HTMLLogo.png";
import ReactIcon from "../images/welcome/ReactLogo.png";
import CSSIcon from "../images/welcome/CSSLogo.png";
import Background from "../images/welcome/Background.jpg";

import "../styles/containers.css"
import "../styles/text.css"
import "../styles/images.css"
import "../styles/text.css"
import "../styles/html_elements.css"

function Welcome() {
  return (
    <div>
      <CustomHeader />
      <div className="right-side">
        <div className="home_background">
          <div className="main-content">
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
                    website. I coded this from scratch using JavaScript, React, HTML, and CSS. 
                    <br />
                    <br />
                    I am a first-generation <b>software engineer</b> with a liberal arts education 
                    and an interest in <b>full-stack mobile and web app development</b>. I am currently 
                    located in Los Angeles, but am open to relocation.

                    I focus on <b>full-stack mobile and web app development</b>, 
                    building responsive, user-centered products that emphasize usability, 
                    performance, and clean design. 
                    <br />
                    <br />
                    I am passionate about creating innovative solutions for complex and meaningful 
                    problems, and I’m fortunate to have the opportunity to work on these projects 
                    every day. This website details my experience professionally and personally and 
                    will give you a glimpse into the things I’ve been working on!
                    <br />
                    <br />
                    <br />
                  </p>
                </div >
              <div className="single_container_55">
            </div>
            <div className="row_container">
                
                  <br />
                  <div>
                  
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className="pink_subtitle">About me:</div>
                  <div className="logo_container">
                    <img
                      src={UtahIcon}
                      alt="Salt Lake City, Utah"
                      className="icon"
                    />
                    Salt Lake City, Utah
                  </div>
                  <div className="logo_container">
                    <img src={LAIcon} alt="Los Angeles" className="icon" />
                    Los Angeles Metrapolitan Area
                  </div>
                  <div className="pink_subtitle">Programming Languages:</div>
                  <div className="container_for_welcome_logo_container">
                    <div className="welcome_logo_container">
                      <div className="logo_container">
                        <img src={PythonIcon} alt="Python" className="icon" />
                        Python
                      </div>
                      <div className="logo_container">
                        <img src={CIcon} alt="C++" className="icon" />
                        C++
                      </div>
                      <div className="logo_container">
                        <img
                          src={JavaScriptIcon}
                          alt="JavaScript"
                          className="icon"
                        />
                        JavaScript
                      </div>
                    </div>
                    <div className="welcome_logo_container">
                      <div className="logo_container">
                        <img src={HTMLIcon} alt="HTML" className="icon" />
                        HTML
                      </div>
                      <div className="logo_container">
                        <img src={ReactIcon} alt="React" className="icon" />
                        React
                      </div>
                      <div className="logo_container">
                        <img src={CSSIcon} alt="CSS" className="icon" />
                        CSS
                      </div>
                    </div>

                    <br />
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className="subtitle">Work Experience:</div>
                  <p>• Director of Technology - Delta Sigma Pi</p>
                  <p>
                    • Introduction to Python Learning Assistant - Donald Bren School
                    of I&CS
                  </p>
                  <p>• Accounting Intern - Restaurant and Family Mart</p>
                <div className="row_container">
                  <p>
                    In my freetime, I enjoy thrifting, gaming, working out, playing
                    poker, and finding new music! Feel free to reach out to me
                    anytime at{" "}
                    <a href="mailto:linjjessica@gmail.com" className="email-link">
                      linjjessica@gmail.com
                    </a>
                    .
                    <br />
                    <br />
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
