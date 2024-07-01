import React from 'react';
import './FloatingScores.scss';

// eslint-disable-next-line react/prop-types
const FloatingScores = ({number, x, y, onAnimationEnd}) => {
  return (
    <div
      className="floating-scores"
      style={{left: x, top: y, pointerEvents: 'none'}}
      onAnimationEnd={onAnimationEnd}
      onClick={(e) => e.preventDefault()}
    >
      <span>+{number}</span>
    </div>
  );
};

export default FloatingScores;
