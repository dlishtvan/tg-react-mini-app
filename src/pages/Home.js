import React from 'react';
import Tapper from '../components/Tapper';

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className={'text-center d-flex flex-grow-1 flex-column align-items-center justify-content-center'}
      >
        <Tapper/>
      </section>
    </>
  );
};
