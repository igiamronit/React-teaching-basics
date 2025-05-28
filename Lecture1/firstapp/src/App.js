import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';

function App() {
  const myName = 'Ronit';
  return (
    <div className="App">
      <Navbar/>
      <h1>This is {myName}</h1>
      <h1>Projects</h1>
      <ProjectCard title="Portfolio Site" description="A React-based portfolio site" />
      <ProjectCard title="ToDo App" description="A simple task manager using React" />
    </div>

  );
}

export default App;
