import React from 'react';
import {useTelegram} from '../hooks/useTelegram';
// import {Link} from "react-router-dom";
// import {ROUTES} from "../router/routerConfig";

export const Header = () => {
  const {user} = useTelegram();

  return (
    <header className={'header py-2'}>
      <nav className={'container d-flex justify-content-between'}>
        <span className={'user'}>{user?.username}</span>
        <span className='ms-auto'>Logout</span>
      </nav>
    </header>
  );
};
