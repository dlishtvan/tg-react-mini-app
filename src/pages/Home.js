import React from 'react';
import {useEffect, useState} from 'react';

const {REACT_APP_FIREBASE_URL} = process.env;

export const Home = () => {
  const [tapsCount, setTapsCount] = useState(0);

  useEffect(() => {
    const fetchTaps = async () => {
      try {
        const taps = await fetch(`${REACT_APP_FIREBASE_URL}/data.json`);
        const response = await taps.json();

        setTapsCount(response.taps);
      } catch (error) {
        console.log('Error GET data:', error);
      }
    };

    fetchTaps();
  }, []);

  const onTap = async () => {
    try {
      const response = await fetch(`${REACT_APP_FIREBASE_URL}/data.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({taps: tapsCount + 1}),
      });

      const data = await response.json();

      setTapsCount(data.taps);
    } catch (error) {
      console.log('Error PUT data:', error);
    }
  };

  return (
    <>
      <section
        id="home"
        className={'text-center d-flex flex-grow-1 flex-column align-items-center justify-content-center'}
      >
        <h1>Total Taps: {tapsCount}</h1>

        <div
          className="img-wrapper"
          onClick={onTap}
        >
          <img
            src={'./pngtree-hamster-png-with-ai-generated-png-image_11563624.png'}
            alt="logo"
          />
        </div>
      </section>
    </>
  );
};
