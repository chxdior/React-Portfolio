import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      
      <div className="content">
        <h1>Christian Guan</h1>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Header />
    </div>
  );
}

export default App;

