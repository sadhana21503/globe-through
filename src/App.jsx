import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/Aboutus';
import Teamup from './pages/Teamup';
import ComingSoon from './pages/Comingsoon';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/joinus" element={<Teamup/>} />
          <Route path="/coming" element={<ComingSoon/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
