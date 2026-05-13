import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import AboutUs from './pages/homepage/Aboutus/aboutus';

function App() {
  return (
    <Router>
      <div className="bg-brand-background min-h-screen text-brand-dark font-sans antialiased">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
