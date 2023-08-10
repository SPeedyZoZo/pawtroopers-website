import React, { useState, useEffect } from 'react';
import './Logo.css';
import logoImage from '../../assets/logo.png'

const Logo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`logo-container ${isVisible ? 'visible' : ''}`}>
      <img src={logoImage} alt="Logo" className="logo-image" />
    </div>
  );
};

export default Logo;
