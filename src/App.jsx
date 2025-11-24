import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChessParserPage from './pages/ChessParserPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<ChessParserPage />} />
      </Routes>
    </div>
  );
}

export default App;
