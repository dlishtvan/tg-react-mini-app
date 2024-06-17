import React from 'react';
import {ProgressBar as Progress} from 'react-bootstrap';
import {useGetUserByUsernameQuery} from '../features/users/api/UsersAPI';
import {useTelegram} from '../hooks/useTelegram';

const ProgressBar = () => {
  const {user} = useTelegram();
  const {data, error, isLoading} = useGetUserByUsernameQuery(user.username);

  if (isLoading) {
    return <>IsLoading</>;
  }

  return (
    <>
      <Progress now={data.scores} max={1000} label={`${data.scores}`}/>
    </>
  );
};

export default ProgressBar;
