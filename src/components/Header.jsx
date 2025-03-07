// import React from "react";
// import { FaBars, FaVideo, FaBell, FaUserCircle } from "react-icons/fa"; // Supprimé FaSearch
// import ThemeToggle from "./ThemeToggle";
// import "../styles/Header.css";

// const Header = ({ toggleSidebar }) => {
//   return (
//     <header className="header">
      
//       <div className="header-left">
//         <FaBars className="menu-icon" onClick={toggleSidebar} />
//         <img src="yout.png" alt="Logo" className="logo" />
//       </div>

      
//       <div className="header-center">
//         <div className="search-bar">
//           <input type="text" placeholder="Rechercher..." />
          
//         </div>
//       </div>

      
//       <div className="header-right">
//         <ThemeToggle />
//         <FaVideo className="icon" />
//         <FaBell className="icon" />
//         <FaUserCircle className="icon profile-icon" />
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { FaBars, FaVideo, FaBell, FaUserCircle } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import "../styles/Header.css";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); // Mise à jour instantanée du terme de recherche
  };

  return (
    <header className="header">
      <div className="header-left">
        <FaBars className="menu-icon" />
        <img src="yout.png" alt="Logo" className="logo" />
      </div>

      <div className="header-center">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={handleChange} // Mise à jour en temps réel
          />
          <button type="button"></button>
        </div>
      </div>

      <div className="header-right">
        <ThemeToggle />
        <FaVideo className="icon" />
        <FaBell className="icon" />
        <FaUserCircle className="icon profile-icon" />
      </div>
    </header>
  );
};

export default Header;
