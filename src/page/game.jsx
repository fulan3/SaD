import React, { useState, useEffect } from 'react';
import logoSvg from '../../public/logo.svg';
import '../styl/pageG.css';

// --- Mobile Legends Hero Data with Default Logo ---
const ALL_HEROES = [
  { id: 1, name: 'Tigreal', image: logoSvg },
  { id: 2, name: 'Miya', image: logoSvg },
  { id: 3, name: 'Eudora', image: logoSvg },
  { id: 4, name: 'Zilong', image: logoSvg },
  { id: 5, name: 'Layla', image: logoSvg },
  { id: 6, name: 'Franco', image: logoSvg },
  { id: 7, name: 'Fanny', image: logoSvg },
  { id: 8, name: 'Chou', image: logoSvg },
  { id: 9, name: 'Gusion', image: logoSvg },
  { id: 10, name: 'Lesley', image: logoSvg },
  { id: 11, name: 'Hayabusa', image: logoSvg },
  { id: 12, name: 'Kagura', image: logoSvg },
];

const GamePage = () => {
  const [availableHeroes, setAvailableHeroes] = useState(ALL_HEROES);
  const [yourTeam, setYourTeam] = useState([]);
  const [enemyTeam, setEnemyTeam] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);
  const [isYourTurn, setIsYourTurn] = useState(true);

  const handleSelectHero = (hero) => {
    setSelectedHero(hero);
  };

  const handlePickHero = () => {
    if (!selectedHero || (yourTeam.length === 5 && enemyTeam.length === 5)) return;

    if (isYourTurn) {
      if (yourTeam.length < 5) {
        setYourTeam([...yourTeam, selectedHero]);
      }
    } else {
      if (enemyTeam.length < 5) {
        setEnemyTeam([...enemyTeam, selectedHero]);
      }
    }

    setAvailableHeroes(availableHeroes.filter(h => h.id !== selectedHero.id));
    setSelectedHero(null);
    setIsYourTurn(!isYourTurn);
  };

  const handleReset = () => {
    setAvailableHeroes(ALL_HEROES);
    setYourTeam([]);
    setEnemyTeam([]);
    setSelectedHero(null);
    setIsYourTurn(true);
  };

  const renderTeamSlots = (team) => {
    const slots = [];
    for (let i = 0; i < 5; i++) {
      const hero = team[i];
      slots.push(
        <div key={i} className="hero-slot" style={{ backgroundImage: hero ? `url(${hero.image})` : 'none' }}>
          {hero && <span className="hero-name">{hero.name}</span>}
        </div>
      );
    }
    return slots;
  };

  return (
    <div className="game-page-container">
      <div className="draft-simulator">
        <div className="team-display">
          <h2>Your Team</h2>
          <div className="team-slots">{renderTeamSlots(yourTeam)}</div>
        </div>

        <div className="team-display">
          <h2>Enemy Team</h2>
          <div className="team-slots">{renderTeamSlots(enemyTeam)}</div>
        </div>

        <div className="turn-indicator">
          {yourTeam.length === 5 && enemyTeam.length === 5 ? "Draft Complete!" : isYourTurn ? "Your Turn to Pick" : "Enemy's Turn to Pick"}
        </div>

        <div className="hero-pool">
          <h3>Available Heroes</h3>
          <div className="hero-grid">
            {ALL_HEROES.map(hero => {
              const isPicked = !availableHeroes.some(h => h.id === hero.id);
              return (
                <div
                  key={hero.id}
                  className={`hero-card ${selectedHero?.id === hero.id ? 'selected' : ''} ${isPicked ? 'picked' : ''}`}
                  style={{ backgroundImage: `url(${hero.image})` }}
                  onClick={() => !isPicked && handleSelectHero(hero)}
                />
              );
            })}
          </div>
        </div>

        <div className="draft-controls">
          <button className="draft-btn pick-btn" onClick={handlePickHero} disabled={!selectedHero}>
            Pick Hero
          </button>
          <button className="draft-btn reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
