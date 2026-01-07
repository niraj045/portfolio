import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <div className="App">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Achievements />
            <Contact />
        </div>
    );
}

export default App;
