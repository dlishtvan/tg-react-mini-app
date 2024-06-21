import React, {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../features/user/userAPI';
import {
  incrementTotalScores,
  incrementLevelScores,
  incrementNeveLevel,
  resetLevelScores,
} from '../features/user/userSlice';
import LEVELS_CONFIG from '../components/levels/LevelsConfig';
import {debounce} from 'lodash';

const Tapper = () => {
  const dispatch = useDispatch();
  const {id} = useSelector((state) => state.user.dataTG);
  const {data} = useSelector((state) => state.user);

  // TODO: need to try close telegram method, and then safe data
  const updateHandles = useMemo(() => debounce((data) => {
    dispatch(updateUser({id, payload: data}));
  }, 1000),
  [id, dispatch]);

  const handleClick = () => {
    const newLevelScores = data.level.scores + 1;
    const isLevelUp = newLevelScores > LEVELS_CONFIG[data.level.current].max;

    dispatch(incrementTotalScores(1));
    dispatch(incrementLevelScores(1));

    if (isLevelUp) {
      dispatch(incrementNeveLevel());
      dispatch(resetLevelScores());

      updateHandles({
        ...data,
        level: {
          ...data.level,
          current: data.level.current + 1,
          scores: 0,
        },
        totalScores: data.totalScores + 1,
      });
      return;
    }

    updateHandles({
      ...data,
      totalScores: data.totalScores + 1,
      level: {
        ...data.level,
        scores: newLevelScores,
      },
    });
  };

  return (
    <>
      <h1>Total Taps: {data.totalScores}</h1>

      <div
        className="img-wrapper"
        onClick={handleClick}
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
