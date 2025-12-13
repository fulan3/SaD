import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import logoImg from '../aset/logo.png';
import './nav.css';

const TopNav = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`top-nav ${darkMode ? 'dark' : 'light'}`}>
      <div className="nav-left">
        <img src={logoImg} alt="Logo" className="logo" />
      </div>
      <div className="nav-center">
        <span className="nav-title">SaD</span>
      </div>
      <div className="nav-right">
        <button className="theme-toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default TopNav;
