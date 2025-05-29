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

  const appStyle = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    transition: "all 0.3s ease"
  };
  return (
    <div style={appStyle}>
      <ThemeToggler darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className="App">
        <Navbar/>
        <h1>Projects</h1>
        <ProjectCard title="Portfolio Site" description="A React-based portfolio site" />
        <ProjectCard title="ToDo App" description="A simple task manager using React" />
        <About />
        <Hero />
        <Footer />
      </div>
    </div>
    

  );
}

export default App;
