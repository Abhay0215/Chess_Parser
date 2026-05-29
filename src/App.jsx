import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChessParserPage from './pages/ChessParserPage';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PlayPage from './pages/PlayPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/app" element={<ChessParserPage />} />
        <Route path="/play" element={<PlayPage />} />
      </Routes>
    </div>
  );
}

export default App;
