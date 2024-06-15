import React, {useEffect, useState} from 'react';
import {useDebounce} from '@uidotdev/usehooks';

const {REACT_APP_FIREBASE_URL} = process.env;

const Tapper = () => {
  const [count, setCount] = useState(0);
  const debouncedCount = useDebounce(count, 500);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const taps = await fetch(`${REACT_APP_FIREBASE_URL}/data.json`);
        const response = await taps.json();

        setCount(response.taps);
      } catch (error) {
        console.log('Error GET data:', error);
      }
    };

    fetchCount();
  }, []);

  useEffect(() => {
    const searchHN = async () => {
      if (!debouncedCount) {
        return;
      }

      try {
        await fetch(`${REACT_APP_FIREBASE_URL}/data.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({taps: debouncedCount}),
        });
      } catch (error) {
        console.log('Error PUT data:', error);
      }
    };

    searchHN();
  }, [debouncedCount]);

  const onTap = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <h1>Total Taps: {count}</h1>

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
