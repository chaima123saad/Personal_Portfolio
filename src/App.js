// Import necessary modules and assets
import React from 'react';
import './App.css';

// Functional component for the portfolio
function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <div className='secLeft'>
        <h1>Your Name</h1>
        <p>Web Developer</p>
        </div>
        <div className='secRight'>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>

      {/* About Me Section */}
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          Hello! I'm a passionate web developer with expertise in front-end technologies.
          I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        {/* Add your projects here */}
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
          {/* Add more details as needed */}
        </div>

        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
          {/* Add more details as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out to me at your.email@example.com</p>
        {/* You can add more contact information or a contact form */}
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Your Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

