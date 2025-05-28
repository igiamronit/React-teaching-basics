import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';

function App() {
  const myName = 'Ronit';
  return (
    <>
      <Navbar/>
      <h1>This is {myName}</h1>
    </>

  );
}

export default App;
