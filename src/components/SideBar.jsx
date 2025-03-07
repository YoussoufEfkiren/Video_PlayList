// import React, { useState } from 'react';
// import { FaHome, FaFire, FaYoutube, FaHistory, FaPlayCircle, FaThumbsUp, FaClock, FaAngleDown } from 'react-icons/fa';
// import '../styles/SideBar.css';

// const Sidebar = () => {
//   const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);

//   // Liste des playlists (vous pouvez la modifier selon vos besoins)
//   const playlists = [
//     "Programmation Web",
//     "Développement Mobile",
//     "Bases de données",
//     "Intelligence Artificielle"
//   ];

//   const togglePlaylist = () => {
//     setIsPlaylistOpen((prev) => !prev);
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebar-item">
//         <FaHome className="sidebar-icon" />
//         <span>Accueil</span>
//       </div>
//       <div className="sidebar-item">
//         <FaFire className="sidebar-icon" />
//         <span>Shorts</span>
//       </div>
//       <div className="sidebar-item">
//         <FaYoutube className="sidebar-icon" />
//         <span>Abonnements</span>
//       </div>
//       <hr />
//       <div className="sidebar-item">
//         <FaHistory className="sidebar-icon" />
//         <span>Historique</span>
//       </div>
//       <div className="sidebar-item" onClick={togglePlaylist}>
//         <FaPlayCircle className="sidebar-icon" />
//         <span>Playlists</span>
//         <FaAngleDown className={`dropdown-icon ${isPlaylistOpen ? 'open' : ''}`} />
//       </div>
      
//       <div className="sidebar-item">
//         <FaClock className="sidebar-icon" />
//         <span>À regarder plus tard</span>
//       </div>
//       <div className="sidebar-item">
//         <FaThumbsUp className="sidebar-icon" />
//         <span>Vidéos 'J'aime'</span>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState } from "react";
import { FaHome, FaFire, FaYoutube, FaHistory, FaPlayCircle, FaThumbsUp, FaClock, FaAngleDown } from "react-icons/fa";
import "../styles/SideBar.css";

const Sidebar = ({ onPlaylistSelect }) => {
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);

  // Liste des playlists (vous pouvez la récupérer depuis le store Redux si nécessaire)
  const playlists = [
    "Programmation Web",
    "Développement Mobile",
    "Bases de données",
    "Intelligence Artificielle"
  ];

  const togglePlaylist = () => {
    setIsPlaylistOpen((prev) => !prev);
  };

  const handlePlaylistClick = (playlist) => {
    onPlaylistSelect(playlist); // Transmettre la playlist sélectionnée à App.jsx
  };

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FaHome className="sidebar-icon" />
        <span>Accueil</span>
      </div>
      <div className="sidebar-item">
        <FaFire className="sidebar-icon" />
        <span>Shorts</span>
      </div>
      <div className="sidebar-item">
        <FaYoutube className="sidebar-icon" />
        <span>Abonnements</span>
      </div>
      <hr />
      <div className="sidebar-item">
        <FaHistory className="sidebar-icon" />
        <span>Historique</span>
      </div>
      <div className="sidebar-item" onClick={togglePlaylist} style={{ cursor: "pointer" }}>
        <FaPlayCircle className="sidebar-icon" />
        <span>Playlists</span>
        <FaAngleDown className={`dropdown-icon ${isPlaylistOpen ? 'open' : ''}`} />
      </div>

      {/* Dropdown des playlists */}
      {isPlaylistOpen && (
        <div className="playlist-dropdown">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              className="playlist-item"
              onClick={() => handlePlaylistClick(playlist)}
              style={{ cursor: "pointer" }} // Ajouter le curseur pointer ici
            >
              {playlist}
            </div>
          ))}
        </div>
      )}

      <div className="sidebar-item">
        <FaClock className="sidebar-icon" />
        <span>À regarder plus tard</span>
      </div>
      <div className="sidebar-item">
        <FaThumbsUp className="sidebar-icon" />
        <span>Vidéos 'J'aime'</span>
      </div>
    </div>
  );
};

export default Sidebar;