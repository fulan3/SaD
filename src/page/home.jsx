import React, { useState, useEffect, useRef } from 'react';
import iconImg from '../aset/imge/icon.png';
import '../styl/pegeH.css';

const HomePage = () => {
  const [rotation, setRotation] = useState(0);
  const [transition, setTransition] = useState('transform 0.1s linear');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        // If at the very top, use a smoother transition to reset rotation
        setTransition('transform 0.5s ease-out');
        setRotation(0);
      } else {
        // For regular scrolling, use a faster, linear transition
        setTransition('transform 0.1s linear');
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down -> rotate left
          setRotation((prevRotation) => prevRotation - 2);
        } else {
          // Scrolling up -> rotate right
          setRotation((prevRotation) => prevRotation + 2);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    // Set initial scroll position
    lastScrollY.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <div className="greeting-text">HAY! DARK SYSTEM</div>
      <div className="divider-line"></div>

      <div className="welcome-section">
        <h2 className="welcome-title">Selamat Datang Di Skuad SAD  Mobile Legends!</h2>
        <p className="welcome-subtitle">Tempat Belajar membuka mata untuk melihat map.</p>
      </div>

      <div className="rotating-image-container">
        <img
          src={iconImg}
          alt="Kompas rusak | pemuda terse sad"
          className="rotating-icon"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: transition,
          }}
        />
      </div>

      <div className="content-section">
        <div className="content-card">
          <h3>🎯 Panduan Pemula</h3>
          <p>Belajar dasar-dasar Mobile Legends dari nol. Mulai dari pemilihan hero, build item, hingga strategi tim.</p>
        </div>

        <div className="content-card">
          <h3>💡 Tips & Trik</h3>
          <p>Kumpulan tips dan trik dari pro player untuk meningkatkan rank dan gameplay kamu.</p>
        </div>

        <div className="content-card">
          <h3>👥 Komunitas</h3>
          <p>Bergabunglah dengan ribuan pemain lainnya untuk berdiskusi, cari tim, dan berlatih bersama.</p>
        </div>

        <div className="content-card">
          <h3>🏆 Turnamen</h3>
          <p>Ikuti turnamen mingguan dan bulanan untuk menantang pemain-pemain terbaik dari seluruh negeri.</p>
        </div>
      </div>

      <div className="mobile-legend-info">
        <h3>Kenapa Harus belajar/memahaminya ?</h3>
        <ul>
          <li>Biar ga epik abadi</li>
          <li>Ga gampang dapat toxic</li>
          <li>Dapat CV tim sad turnament</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
