import React from 'react';
import Navbar from './common components/layout/Navbar';
import Homepage from './pages/homepage/homepage';
function App() {
  return (
    <div className="bg-brand-background min-h-screen text-brand-dark font-sans antialiased">
      <Homepage />
    </div>
  );
}

export default App;
