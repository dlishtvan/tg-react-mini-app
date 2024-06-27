import React from 'react';
import {ProgressBar as Progress} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import LEVELS_CONFIG from './levelsConfig';

const ProgressBar = () => {
  const {data} = useSelector((state) => state.user);
  const currentLevelByScores = LEVELS_CONFIG[data.level.current];

  return (
    <>
      <p className={'m-0 text-end'}>
        <small>Level {data.level.current}/{Object.keys(LEVELS_CONFIG).length}</small>
      </p>

      <Progress
        now={data.level.scores}
        max={currentLevelByScores.max}
      />
    </>
  );
};

export default ProgressBar;
