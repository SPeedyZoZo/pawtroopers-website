import React from 'react';
import './Rocket.css';
import rocketImage from '../../assets/rocket.png';

const Rocket = () => {
  return (
    <div className="rocket-container">
      <img src={rocketImage} alt="Rocket" className="rocket-image" />
    </div>
  );
};

export default Rocket;
