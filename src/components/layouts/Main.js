import React from 'react';
import {Outlet} from 'react-router';
import Header from '../Header';
import Footer from '../Footer';

export const Main = () => {
  return (
    <>
      <Header/>

      <main className={'container d-flex flex-grow-1'}>
        <Outlet/>
      </main>

      <Footer/>
    </>
  );
};
