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

const Tapper = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.user);
  const [tilt, setTilt] = useState({x: 0, y: 0});
  const [numbers, setNumbers] = useState([]);
  const updateHandles = useMemo(() => debounce(() => {
    dispatch(updateUser());
  }, 500), [dispatch]);

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches ? e.touches[0] : e;
    const {clientX, clientY, target} = touch;
    const {left, top, width, height} = target.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 40; // наклон по оси X
    const y = ((clientY - top) / height - 0.5) * 40; // наклон по оси Y

    setTilt({x, y});

    const newNumber = {id: Date.now(), number: data.scoresPerTap, x: clientX - left, y: clientY - top};
    setNumbers([...numbers, newNumber]);
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

    updateHandles();

    setTilt({x: 0, y: 0});
  };

  const handleAnimationEnd = (id) => {
    setNumbers(numbers.filter((number) => number.id !== id));
  };

  return (
    <>
      <h1>Total Taps: {data.totalScores}</h1>

      <div className={'position-relative'}>
        <div
          className="tapper"
          style={{transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`}}
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={'./pngtree-hamster-png-with-ai-generated-png-image_11563624.png'}
            className="img"
            alt="logo"
          />
        </div>

        {numbers.map(({id, number, x, y}) => (
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
