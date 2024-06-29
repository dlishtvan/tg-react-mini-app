import React, {useEffect, useState} from 'react';
import './FloatingScores.scss';

// eslint-disable-next-line react/prop-types
const FloatingScores = ({number, x, y, onAnimationEnd}) => {
  return (
    <div
      className="floating-scores text-success"
      style={{left: x, top: y, pointerEvents: 'none'}}
      onAnimationEnd={onAnimationEnd}
      onClick={(e) => e.preventDefault()}
    >
      +{number}
    </div>
  );
};

export default FloatingScores;
