import React, {useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../features/user/userAPI';
import {
  incrementTotalScores,
  incrementLevelScores,
  incrementNewLevel,
  resetLevelScores,
} from '../../features/user/userSlice';
import LEVELS_CONFIG from '../levels/levelsConfig';
import {debounce} from 'lodash';
import FloatingScores from './FloatingScores';
import './Tapper.scss';
import UserBalance from '../userBalance/UserBalance';

const Tapper = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.user);
  const [floatingScores, setFloatingScores] = useState([]);
  const [tilt, setTilt] = useState({rotateX: 0, rotateY: 0});

  const updateHandles = useMemo(() => debounce(() => {
    dispatch(updateUser());
  }, 500), [dispatch]);

  const handleTouchStart = (e) => {
    const touch = e.touches ? e.touches[0] : e;
    const {clientX, clientY, target} = touch;
    const {left, top, width, height} = target.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // center distance by x/y axis
    const distanceX = Math.abs(clientX - centerX);
    const distanceY = Math.abs(clientY - centerY);
    const maxDistance = Math.min(width, height) / 2; // Max distance to the center

    let rotateX = 0;
    let rotateY = 0;

    if (clientY < centerY && distanceY > maxDistance / 2) {
      rotateX = -11; // top side tilt
    } else if (clientY >= centerY && distanceY > maxDistance / 2) {
      rotateX = 11; // bottom side tilt
    }

    if (clientX < centerX && distanceX > maxDistance / 2) {
      rotateY = -11; // left side tilt
    } else if (clientX > centerX && distanceX > maxDistance / 2) {
      rotateY = 11; // right side tilt
    }


    setTilt({rotateX, rotateY});
``
    const floatingScore = {
      id: Date.now(), number: data.scoresPerTap, x: clientX - left, y: clientY - top,
    };

    setFloatingScores((prevFloatingScores) => [...prevFloatingScores, floatingScore]);
  };

  const handleAnimationEnd = (id) => {
    setFloatingScores((prevScores) => prevScores.filter((score) => score.id !== id));
  };

  const handleTouchEnd = () => {
    const newLevelScores = data.level.scores + data.scoresPerTap;
    const isLevelUp = newLevelScores > LEVELS_CONFIG[data.level.current].max;

    dispatch(incrementTotalScores(data.scoresPerTap));
    dispatch(incrementLevelScores(data.scoresPerTap));

    if (isLevelUp) {
      dispatch(incrementNewLevel());
      dispatch(resetLevelScores());
    }

    setTilt({rotateX: 0, rotateY: 0});

    updateHandles();
  };

  return (
    <>
      <UserBalance/>

      <div className={'position-relative'}>
        <button
          className="tapper"
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          }}
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={'./pngtree-hamster-png-with-ai-generated-png-image_11563624.png'}
            className="img"
            alt="logo"
          />
        </button>

        {floatingScores.map(({id, number, x, y}) => (
          <FloatingScores
            key={id}
            number={number}
            x={x}
            y={y}
            onAnimationEnd={() => handleAnimationEnd(id)}
          />
        ))}
      </div>
    </>
  );
};

export default Tapper;
