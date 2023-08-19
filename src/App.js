// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Bixel1 from './pages/Bixel1';
import Bixel2 from './pages/Bixel2';
import Bixel3 from './pages/Bixel3';
import Bixel4 from './pages/Bixel4';
import Home from './pages/Home';
import "./App.css";


function App() {
  return (
    <div className='App'>

      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bixel1" element={<Bixel1 />} />
          <Route path="/bixel2" element={<Bixel2 />} />
          <Route path="/bixel3" element={<Bixel3 />} />
          <Route path="/bixel4" element={<Bixel4 />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
