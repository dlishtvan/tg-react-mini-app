import React, {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../features/user/userAPI';
import {
  incrementTotalScores,
  incrementLevelScores,
  incrementNewLevel,
  resetLevelScores,
} from '../features/user/userSlice';
import LEVELS_CONFIG from './levels/levelsConfig';
import {debounce} from 'lodash';

const Tapper = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.user);
  const updateHandles = useMemo(() => debounce(() => {
    dispatch(updateUser());
  }, 500), [dispatch]);

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
  };

  return (
    <>
      <h1>Total Taps: {data.totalScores}</h1>

      <div
        className="img-wrapper"
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={'./pngtree-hamster-png-with-ai-generated-png-image_11563624.png'}
          alt="logo"
        />
      </div>
    </>
  );
};

export default Tapper;
