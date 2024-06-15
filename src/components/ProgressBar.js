import React from 'react';
import {ProgressBar as Progress} from 'react-bootstrap';

const ProgressBar = () => {
  const now = 60;

  return (
    <>
      <Progress now={now} label={`${now}%`}/>
    </>
  );
};

export default ProgressBar;
