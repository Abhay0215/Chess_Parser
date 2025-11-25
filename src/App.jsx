import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChessParserPage from './pages/ChessParserPage';
import LandingPage from './pages/LandingPage';

import PlayPage from './pages/PlayPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<ChessParserPage />} />
        <Route path="/play" element={<PlayPage />} />
      </Routes>
    </div>
  );
}

export default App;
