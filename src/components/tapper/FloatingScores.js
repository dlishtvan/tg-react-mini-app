import React, {useEffect, useState} from 'react';
import './FloatingScores.scss';

// eslint-disable-next-line react/prop-types
const FloatingScores = ({number, x, y, onAnimationEnd}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onAnimationEnd();
    }, 1000); // Длительность анимации 1 секунда

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  if (!visible) return null;

  return (
    <div className="floating-scores text-success" style={{left: x, top: y}}>
      +{number}
    </div>
  );
};

export default FloatingScores;
