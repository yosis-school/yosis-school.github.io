import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NinthToTwelfth from './components/9th-12th';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/yosis-school">Home</Link></li>
              <li><Link to="/yosis-school/9th-12th">9th-12th</Link></li>
              <li><Link to="/yosis-school/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/9th-12th" element={<NinthToTwelfth />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
