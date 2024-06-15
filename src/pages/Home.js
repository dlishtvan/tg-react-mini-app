import React from 'react';
import Tapper from '../components/Tapper';
import ProgressBar from '../components/ProgressBar';

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className={'d-flex flex-grow-1 flex-column'}
      >
        <div className="mt-5 mb-3">
          <ProgressBar/>
        </div>

        <div className="d-flex flex-fill flex-column align-items-center justify-content-center">
          <Tapper/>
        </div>
      </section>
    </>
  );
};
