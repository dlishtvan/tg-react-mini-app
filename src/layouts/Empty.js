import React from 'react';
import {Outlet} from 'react-router';

export const Empty = () => {
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
