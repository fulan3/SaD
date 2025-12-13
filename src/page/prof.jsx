import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaCamera, FaWhatsapp, FaEllipsisH } from 'react-icons/fa';
import profilePicture from '../aset/imge/icon.png';
import '../styl/pageP.css';

const ProfPage = () => {
  // Placeholder data
  const user = {
    bio: 'MLBB Player | MCL | TeaM SaD Esport',
    profilePicture: profilePicture,
    coverPhoto: 'https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg',
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="cover-photo" style={{ backgroundImage: `url(${user.coverPhoto})` }}>
          <button className="cover-action-btn"><FaCamera /> Camera Actived</button>
        </div>
        <div className="profile-details">
          <div className="profile-picture-container">
            <img src={user.profilePicture} alt={user.name} className="profile-picture" />
          </div>
          <div className="profile-info">
            <h1 className="user-name">{user.name}</h1>
            <p className="user-bio">{user.bio}</p>
          </div>
        </div>
        <div className="profile-actions">
          <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--KHKb_Kd8w-CwkqJjLyuiGaW7CioImhazfHXuRfYId-TjWly6qnC--wa&s=10" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaWhatsapp /> Grup 1
          </a>
          <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRR70zcUuwbJV0L160iYjeCBGQi77qdO5OWmhl9-NA1Q&s=10" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <FaWhatsapp /> Grup 2
          </a>
          <button className="btn btn-secondary more-options"><FaEllipsisH /></button>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+62 812-3456-7890</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>sad.esport@gokgok.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Basecamp SaD, lampung city</span>
          </div>
          <div className="contact-item">
            <FaGlobe className="contact-icon" />
            <span>www.sadesport.com</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ProfPage;
