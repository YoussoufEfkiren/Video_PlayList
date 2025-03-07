import React, { useEffect, useState } from "react";
import "../styles/VideoList.css";

const VideoList = ({ selectedVideo, addComment, commentInput, setCommentInput }) => {
  // Etat local
  const [visibleCommentIndex, setVisibleCommentIndex] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userLiked, setUserLiked] = useState(false);  // Etat pour savoir si l'utilisateur a aimé
  const [userDisliked, setUserDisliked] = useState(false);  // Etat pour savoir si l'utilisateur a disliké

  useEffect(() => {
    if (selectedVideo) {
      setLikes(selectedVideo.likes || 0); 
      setDislikes(selectedVideo.dislikes || 0); 
    }
  }, [selectedVideo]);

  
  useEffect(() => {
    if (selectedVideo && selectedVideo.commentaires.length > 0) {
      const interval = setInterval(() => {
        setVisibleCommentIndex((prevIndex) =>
          prevIndex + 1 >= selectedVideo.commentaires.length ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [selectedVideo]);

  // Gestionnaire d'events pour like
  const handleLike = () => {
    if (userDisliked) {
      setDislikes((prev) => prev - 1); 
      setUserDisliked(false); 
    }
    if (userLiked) {
      setLikes((prev) => prev - 1); // Retire 1 like si déjà aimé
      setUserLiked(false); // Réinitialise l'état like
    } else {
      setLikes((prev) => prev + 1); // Ajoute 1 like
      setUserLiked(true); // L'utilisateur aime maintenant
    }
  };

  // Gestionnaire d'events pour dislike
  const handleDislike = () => {
    if (userLiked) {
      setLikes((prev) => (prev > 0 ? prev - 1 : 0)); 
      setUserLiked(false); 
    }
    if (userDisliked) {
      setDislikes((prev) => prev - 1); // Retire 1 dislike si déjà disliké
      setUserDisliked(false); // Réinitialise l'état dislike
    } else {
      setDislikes((prev) => prev + 1); // Ajoute 1 dislike
      setUserDisliked(true); // L'utilisateur disliké maintenant
    }
  };

  return (
    <div className="col-md-8">
      {selectedVideo ? (
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src={selectedVideo.lien.replace("watch?v=", "embed/")}
            title={selectedVideo.titre}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h3 className="mt-3">{selectedVideo.titre}</h3>
          <p>Auteur : {selectedVideo.auteur.prenom} {selectedVideo.auteur.nom}</p>
          <p>{selectedVideo.description}</p>

          <div className="d-flex align-items-center mt-3">
            <button className="btn btn-outline-primary me-2" onClick={handleLike}>
              👍 {likes}
            </button>
            <button className="btn btn-outline-danger" onClick={handleDislike}>
              👎 {dislikes}
            </button>
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ajouter un commentaire..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />
            <button className="btn btn-success mt-2" onClick={addComment}>
              Ajouter
            </button>
          </div>
          <ul className="list-group">
            {selectedVideo.commentaires.length > 0 ? (
              <li className="list-group-item">{selectedVideo.commentaires[visibleCommentIndex]}</li>
            ) : (
              <p>Aucun commentaire pour cette vidéo.</p>
            )}
          </ul>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default VideoList;
