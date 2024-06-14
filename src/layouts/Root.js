import React, {useEffect} from 'react';
import {Outlet} from 'react-router';
import {useTelegram} from '../hooks/useTelegram';

export const Root = () => {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <Outlet/>
    </>
  );
};
