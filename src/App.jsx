import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './comp/nav';
import BottomTabBar from './comp/but';
import HomePage from './page/home';
import GamePage from './page/game';
import ProfPage from './page/prof';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router basename="/SAD"> {/* Match your repo name */}
      <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <TopNav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/prof" element={<ProfPage />} />
          </Routes>
        </main>

        <BottomTabBar darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
