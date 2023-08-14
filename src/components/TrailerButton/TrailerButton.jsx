// TrailerButton.js

import React, { useState, useEffect } from 'react';
import './TrailerButton.css';

const TrailerButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  const handleTrailerClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="trailer-button-container">
      {showButton && (
        <a
          className="trailer-button"
          href="https://www.youtube.com/watch?v=MmBz9z266gs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Trailer
        </a>
      )}
      {showPopup && (
        <div className="trailer-popup visible">
          <div className="popup-content">
            {/* Remove the <iframe> and video source */}
            <button className="close-button" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrailerButton;
