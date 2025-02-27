import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import './App.css';
import CommunityEfforts from './components/CommunityEfforts';
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Intro theme="blue" />
        <Projects theme="white" />
        <CommunityEfforts theme="blue" />
        <Footer theme="white" />
      </div>
    </ThemeProvider >
  );
}

export default App;