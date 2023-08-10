import React, { useState, useEffect } from 'react';
import './Dots.css';

const Dots = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const createDot = () => {
      const animationDuration = Math.random() + 0.5;
      const animationDelay = Math.random() * 5;

      return {
        left: `${Math.random() * 100}%`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${animationDelay}s`,
      };
    };

    const generateDots = () => {
      const newDots = Array.from({ length: 50 }, () => createDot());
      setDots(newDots);
    };

    generateDots();

    const interval = setInterval(generateDots, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dots-container">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="dot"
          style={{
            left: dot.left,
            animationDuration: dot.animationDuration,
            animationDelay: dot.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Dots;
