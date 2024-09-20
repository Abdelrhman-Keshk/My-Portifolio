import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Skill from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/fontawsome/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Main />
        <Skill />
        <Projects />
        <Connect />
        <Footer />
      </Router>
    </>
  );
}

export default App;
