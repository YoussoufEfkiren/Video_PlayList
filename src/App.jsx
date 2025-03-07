import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles/styles.css";
import ThemeToggle from "./components/ThemeToggle";
import Playlist from "./components/Playlist";
import VideoList from "./components/VideoList";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";

const App = () => {
  const playlists = useSelector((state) => state.playlists || []);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const toggleFavorite = (video) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === video.id)
        ? prevFavorites.filter((fav) => fav.id !== video.id)
        : [...prevFavorites, video]
    );
  };

  const addComment = () => {
    if (commentInput.trim() !== "" && selectedVideo) {
      const updatedVideo = {
        ...selectedVideo,
        commentaires: [...selectedVideo.commentaires, commentInput],
      };
      setSelectedVideo(updatedVideo);
      setCommentInput("");
      showPopup("Commentaire ajouté avec succès");
    }
  };

  const showPopup = (message) => {
    setPopupMessage(message);
    setTimeout(() => {
      setPopupMessage("");
    }, 2000);
  };

  const handlePlaylistSelect = (playlist) => {
    setSelectedPlaylist(playlist);
    setSelectedVideo(null); // Réinitialiser la vidéo sélectionnée
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Vous pouvez implémenter la logique de recherche ici si nécessaire
  };

  // Filtrer les vidéos en fonction de la playlist sélectionnée et du terme de recherche
  const filteredVideos = selectedPlaylist
    ? playlists
        .find((p) => p.titre === selectedPlaylist)
        ?.videos.filter((video) =>
          video.titre.toLowerCase().includes(searchTerm.toLowerCase())
        ) || []
    : [];

  return (
    <div className="app-container">
      <Header onSearch={handleSearch} />

      <div className="main-layout">
        <Sidebar onPlaylistSelect={handlePlaylistSelect} />

        <div className="content">
          <ThemeToggle />

          {popupMessage && <div className="popup">{popupMessage}</div>}

          <div className="row">
            <VideoList
              selectedVideo={selectedVideo}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
              addComment={addComment}
              commentInput={commentInput}
              setCommentInput={setCommentInput}
            />
            <Playlist
              playlists={playlists}
              setSelectedVideo={setSelectedVideo}
              selectedPlaylist={selectedPlaylist}
              filteredVideos={filteredVideos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
