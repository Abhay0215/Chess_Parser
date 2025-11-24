import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChessParserPage from './pages/ChessParserPage';
import LandingPage from './pages/LandingPage';
import TestBoard from './pages/TestBoard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<ChessParserPage />} />
        <Route path="/test" element={<TestBoard />} />
      </Routes>
    </div>
  );
}

export default App;
