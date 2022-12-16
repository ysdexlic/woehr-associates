import React from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>Woehr Associates</h1>
        <h2>Founded in 1957</h2>
        <h3 className="header-description">Employee Selection & Assesment</h3>
      </header>
      <main>
        <div className="content">
          <div className="mid-section">
            <p>
              Woehr Associates offers a detailed, individualized assessment of
              candidates under consideration for individual contributor,
              supervisory, management, or executive roles and also provides
              assessments of current employees for promotion. The evaluations
              provide a comprehensive assessment of relevant competencies along
              with experience-tested recommendations.
            </p>
          </div>
          <div className="people">
            <div>
              <h3>Leslie Woehr Tuttle, PsyD</h3>
              <p>
                Leslie Woehr Tuttle, PsyD, is President of Woehr Associates,
                where she has worked for over 40 years. She earned her Doctorate
                in Psychology at Hahnemann University.
              </p>
            </div>
            <div>
              <h3>Peter Kolson, PsyD</h3>
              <p>
                Peter Kolson, PsyD, has worked as a consultant for Woehr
                Associates for over 40 years. He earned his Doctorate in
                Psychology at Hahnemann University.
              </p>
            </div>
          </div>
        </div>
        <footer>
          <h3>Please contact Amy Bobb, Office Manager with any questions.</h3>
          <div>
            <a href="tel:856-427-0776">
              <i className="fa-solid fa-phone"></i>
              856-427-0776
            </a>
            <a href="mailto:abobb@woehrassociates.com">
              <i className="fa-regular fa-envelope"></i>
              abobb@woehrassociates.com
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
