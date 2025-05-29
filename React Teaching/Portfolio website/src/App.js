import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ThemeToggler from './components/ThemeToggler';

function App() {
  const myName = "Ronit";
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <ThemeToggler darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className="main-content">
        <Navbar />
        <Hero />
        <About />
        <div className="projects-section">
          <h1>Projects</h1>
          <div className="projects-grid">
            <ProjectCard title="Portfolio Site" description="A React-based portfolio site" />
            <ProjectCard title="ToDo App" description="A simple task manager using React" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
