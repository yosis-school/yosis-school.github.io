import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FourthToEighth from './components/4th-8th';
import NinthToTwelfth from './components/9th-12th';
import AdultEducation from './components/Adult-Education';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/yosis-school/home">Home</Link></li>
              <li><Link to="/yosis-school/4th-8th">4th-8th</Link></li>
              <li><Link to="/yosis-school/9th-12th">9th-12th</Link></li>
              <li><Link to="/yosis-school/adult-education">Adult Education</Link></li>
              <li><Link to="/yosis-school/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/yosis-school" element={<Navigate replace to="/yosis-school/home" />} />
            <Route path="/yosis-school/home" element={<Home />} />
            <Route path="/yosis-school/about" element={<About />} />
            <Route path="/yosis-school/contact" element={<Contact />} />
            <Route path="/yosis-school/4th-8th" element={<FourthToEighth />} />
            <Route path="/yosis-school/9th-12th" element={<NinthToTwelfth />} />
            <Route path="/yosis-school/adult-education" element={<AdultEducation />} />
            <Route path="*" element={<Navigate replace to="/yosis-school/home" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
