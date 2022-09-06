import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Woehr Associates
        </h1>
        <h2>Founded in 1956</h2>
        <h3>EMPLOYEE SELECTION | CAREER COUNSELLING </h3>
      </header>
      <main>
        <div className="mid-section">
          <p>Woehr Associates offers a detailed, individualized assessment of candidates under consideration for individual contributor, supervisory or management roles and also provides assessments of current employees for promotion. We also offer career guidance. The evaluations provide a comprehensive assessment of relevant competencies along with experience-tested recommendations.</p>
        </div>
        <footer>
          <h3>Please contact Amy Bobb, Office Manager with any questions.</h3>
        </footer>
      </main>
    </div>
  );
}

export default App;
