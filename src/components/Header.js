import React from 'react';
import {useSelector} from 'react-redux';
// import {Link} from "react-router-dom";
// import {ROUTES} from "../router/routerConfig";

const Header = () => {
  const {username} = useSelector((state) => state.user.data);

  return (
    <header className={'header py-2'}>
      <nav className={'container d-flex justify-content-between'}>
        <span className={'user'}>{username}</span>
        <span className='ms-auto'>Logout</span>
      </nav>
    </header>
  );
};

export default Header;
