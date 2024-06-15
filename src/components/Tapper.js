import React, {useEffect, useState} from 'react';
import {useDebounce} from '@uidotdev/usehooks';

const {REACT_APP_FIREBASE_URL} = process.env;

const Tapper = () => {
  const [taps, setTaps] = useState(0);
  const debounceTaps = useDebounce(taps, 500);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const data = await fetch(`${REACT_APP_FIREBASE_URL}/data.json`);
        const {taps} = await data.json();

        setTaps(taps);
      } catch (error) {
        console.log('Error GET data:', error);
      }
    };

    fetchCount();
  }, []);

  useEffect(() => {
    const searchHN = async () => {
      if (!debounceTaps) {
        return;
      }

      try {
        const data= await fetch(`${REACT_APP_FIREBASE_URL}/data.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({taps: debounceTaps}),
        });

        const {taps} = await data.json();

        setTaps(taps);
      } catch (error) {
        console.log('Error PUT data:', error);
      }
    };

    searchHN();
  }, [debounceTaps]);

  const onTap = () => {
    setTaps((count) => count + 1);
  };

  return (
    <>
      <h1>Total Taps: {taps}</h1>

      <div
        className="img-wrapper"
        onClick={onTap}
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
