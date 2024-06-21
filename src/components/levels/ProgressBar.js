import React, {useEffect, useState} from 'react';
import {ProgressBar as Progress} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import LEVELS_CONFIG from '../../components/levels/LevelsConfig';
// import {updateUser} from '../../features/user/userAPI';

const ProgressBar = () => {
  const dispatch = useDispatch();
  const {id} = useSelector((state) => state.user.dataTG);
  const {data} = useSelector((state) => state.user);
  // const [localScores, setLocalScores] = useState(data.level.scores);
  const currentLevelByScores = LEVELS_CONFIG[data.level.current];
  // const label = ((100 * data.result.scores) / currentLevelByScores.max).toFixed(1);

  // useEffect(() => {
  //   setLocalScores(data.result.scores.total);
  // }, [data.result.scores.total, setLocalScores]);
  //
  // useEffect(() => {
  //   if (data.result.scores.total > currentLevelByScores.max) {
  //     setLocalScores(0);
  //
  //     dispatch(updateUser({id, payload: {...data, level: data.level + 1}}));
  //   }
  // }, [id, data, dispatch, currentLevelByScores, setLocalScores]);
  // debugger;
  return (
    <>
      <p className={'m-0 text-end'}><small>Level {data.level.current}/{Object.keys(LEVELS_CONFIG).length}</small></p>
      <Progress now={data.level.scores} max={currentLevelByScores.max}/>
    </>
  );
};

export default ProgressBar;
