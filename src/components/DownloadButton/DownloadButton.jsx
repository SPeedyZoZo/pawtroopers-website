// DownloadButton.js

import React, { useState, useEffect } from 'react';
import './DownloadButton.css';

const DownloadButton = () => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDownloadButton(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadClick = () => {
    setShowDownloadPopup(true);
  };

  const closeDownloadPopup = () => {
    setShowDownloadPopup(false);
  };

  return (
    <div className="download-button-container">
      {showDownloadButton && (
        <button className="download-button" onClick={handleDownloadClick}>
          Download Now
        </button>
      )}
      {showDownloadPopup && (
        <div className="popup visible">
          <div className="popup-content">
            <p>Coming Soon!</p>
            <button className="close-button" onClick={closeDownloadPopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;
