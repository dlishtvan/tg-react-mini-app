import React, {useEffect} from 'react';
import {Outlet} from 'react-router';
import {useTelegram} from '../hooks/useTelegram';
// import {Header} from "../components/Header";
// import {Footer} from "../components/Footer";

export const Empty = () => {
  console.log('ROOT');
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);


  return (
    <>
      <main>
        <div id="container" className="container py-3">
                   EMPTY
          <Outlet/>
        </div>
      </main>
    </>
  );
};
