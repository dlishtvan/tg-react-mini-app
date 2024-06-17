import React, {useEffect, useState} from 'react';
import {useDebounce} from '@uidotdev/usehooks';
import {useUpdateUserMutation, useGetUserByUsernameQuery} from '../features/users/api/UsersAPI';

import {useTelegram} from '../hooks/useTelegram';

const {REACT_APP_FIREBASE_URL} = process.env;

const Tapper = () => {
  const {user} = useTelegram();
  const {data, error, isLoading} = useGetUserByUsernameQuery(user.username);
  const [updateUser, {isLoading: isCreating, error: createError}] = useUpdateUserMutation();
  const [scores, setScores] = useState(0);
  const debounceScore = useDebounce(scores, 500);

  useEffect(() => {
    if (data) {
      setScores(data.scores);
    }
  }, [data]);

  useEffect(() => {
    const updateScore = async () => {
      if (!debounceScore) {
        return;
      }
      console.log(user, 'USER');
      try {
        // const data= await fetch(`${REACT_APP_FIREBASE_URL}/users/dlishtvan.json`, {
        //   method: 'PUT',
        //   headers: {
        //     'Content-Type': 'application/json;charset=utf-8',
        //   },
        //   body: JSON.stringify({taps: debounceScore}),
        // });

        const qq = await updateUser({username: user.username, body: {}}).unwrap();
        console.log(await qq.json(), 'QQ');
        // const {scores} = await data.json();

        // setScores(scores);
      } catch (error) {
        console.log('Error PUT data:', error);
      }
    };

    updateScore();
  }, [debounceScore, updateUser, user]);

  const onClick = () => {
    setScores((count) => count + 1);
  };

  return (
    <>
      <h1>Total Taps: {scores}</h1>

      <div
        className="img-wrapper"
        onClick={onClick}
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
