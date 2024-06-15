import React from 'react';
import {Outlet} from 'react-router';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
// import {Navbar} from "../components/Navbar";
// import {Toast} from "../components/Toast";

export const Main = () => (
  <>
    {/* <Navbar/>*/}
    <Header/>

    <main className={'container d-flex flex-grow-1'}>
      <Outlet/>
    </main>

    <Footer/>

    {/* <Toast/>*/}
  </>
);
