import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="uppercase">Woehr Associates</h1>
        <h2>Founded in 1956</h2>
        <h3 className="header-description uppercase">
          Employee Selection | Career Counselling
        </h3>
      </header>
      <main>
        <div className="content">
          <div className="mid-section">
            <p>
              Woehr Associates offers a detailed, individualized assessment of
              candidates under consideration for individual contributor,
              supervisory or management roles and also provides assessments of
              current employees for promotion. We also offer career guidance.
              The evaluations provide a comprehensive assessment of relevant
              competencies along with experience-tested recommendations.
            </p>
          </div>
          <div className="people">
            <div>
              <h3>Leslie Woehr Tuttle, PSY.D.</h3>
              <p>
                Leslie Woehr Tuttle, Psy.D., is President of Woehr Associates,
                where she has worked for over 40 years. She earned her Doctorate
                in Psychology at Hahnemann University.
              </p>
            </div>
            <div>
              <h3>Peter Kolson, PSY.D.</h3>
              <p>
                Peter Kolson, Psy.D has worked as a consultant for Woehr
                Associates for over 40 years. He earned his doctorate at
                Hahnemann University
              </p>
            </div>
          </div>
        </div>
        <footer>
          <h3>Please contact Amy Bobb, Office Manager with any questions.</h3>
          <div>
            <h3>856-427-0776</h3>
            <h3>abobb@woehrassociates.com</h3>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
