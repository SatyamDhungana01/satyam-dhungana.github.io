import React from "react";
import {} from "react-router-dom";
import "../css/index.css";
export default function Index() {
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <p>
            Hello I am Satyam Dhungana from Itahari International Collage,
            Itahari. I am currently studying Bsc (Hons) Computing, currently at
            second year.
          </p>
          <p>
            recently I am looking for Internship at Front End Web Developer.
            <p>I believe in hard work and honesty.</p>
          </p>
          <p>contact details:</p>
          <div className="contact">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/satyam-dhungana-a6aa511b1/detail/contact-info/">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/SatyamDhungana01">GitHub</a>
              </li>
            </ul>
          </div>
          <div className="skills">
            <div className="para-explain">
              <h4>Skills</h4>
              <div className="info-of-skills">
                <p>HTML5 </p>
                <p>CSS3</p>
                <p>XML</p>
                <p>JavaScript</p>
                <p>React JS</p>
                <p>Linux</p>
                <p>Git</p>
                <p>GitHub</p>
              </div>
            </div>
          </div>
          <div className="ending">
            <p>sincerely,</p>
            <p>Satyam Dhungana</p>
          </div>
        </div>
      </div>
    </div>
  );
}
