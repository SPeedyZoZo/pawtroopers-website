import React, { useState, useEffect } from 'react';
import './DownloadButton.css';

const DownloadButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="download-button-container">
      {showButton && (
        <button className="download-button" onClick={handleDownloadClick}>
          Download Now
        </button>
      )}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Coming Soon!</p>
            <button className="close-button" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;
