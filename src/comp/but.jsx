import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaGamepad, FaUser } from 'react-icons/fa';
import './but.css';

const BottomTabBar = ({ darkMode }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`bottom-tab-bar ${darkMode ? 'dark' : 'light'}`}>
      <Link
        to="/"
        className={`tab-item ${isActive('/') ? 'active' : ''}`}
      >
        <FaHome className="tab-icon" />
      </Link>
      <Link
        to="/game"
        className={`tab-item ${isActive('/game') ? 'active' : ''}`}
      >
        <FaGamepad className="tab-icon" />
      </Link>
      <Link
        to="/prof"
        className={`tab-item ${isActive('/prof') ? 'active' : ''}`}
      >
        <FaUser className="tab-icon" />
      </Link>
    </div>
  );
};

export default BottomTabBar;
