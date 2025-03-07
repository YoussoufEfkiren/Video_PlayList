import React from "react";
import "../styles/Playlist.css";

const Playlist = ({ playlists, setSelectedVideo, selectedPlaylist, filteredVideos }) => {
  return (
    <div className="col-md-2">
      <h2 className="playlist-title">Videos</h2>
      {selectedPlaylist ? (
        <div className="mb-4">
          <div className="playlist-container">
            {filteredVideos.map((video) => (
              <li
                key={video.id}
                className="list-group-item d-flex align-items-center"
                onClick={() => setSelectedVideo(video)}
                style={{ cursor: "pointer", listStyle: "none" }}
              >
                <img
                  src={video.miniature}
                  alt={video.titre}
                  className="img-thumbnail me-2"
                  style={{ width: "80px", height: "50px" }}
                />
                <span className="title">{video.titre}</span>
              </li>
            ))}
          </div>
        </div>
      ) : (
        <p>Sélectionnez une playlist pour afficher les vidéos.</p>
      )}
    </div>
  );
};

export default Playlist;