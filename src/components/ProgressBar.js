import React from 'react';
import {ProgressBar as Progress} from 'react-bootstrap';
import {useSelector} from 'react-redux';

const ProgressBar = () => {
  const {scores} = useSelector((state) => state.user.data);

  return (
    <>
      <p className={'m-0 text-end'}><small>Level 1/10</small></p>
      <Progress now={scores} max={1000} label={`${(100 * scores) / 1000}%`}/>
    </>
  );
};

export default ProgressBar;
