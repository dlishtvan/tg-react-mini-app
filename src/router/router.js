import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {ROUTES} from './routerConfig';

import {Root} from '../layouts/Root';
import {Main} from '../layouts/Main';
// import {Todos} from "../pages/Todos";
// import {About} from "../pages/About";
import {Empty} from '../layouts/Empty';
// import {Toast} from "../components/Toast";
// import { isRouteErrorResponse } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <Root/>,
    path: ROUTES.Root,
    children: [
      {
        element: <Main/>,
        children: [
          {
            index: true,
            async lazy() {
              const {Home} = await import('../pages/Home');
              return {Component: Home};
            },

          },
          {
            path: ROUTES.Statistic,
            async lazy() {
              const {Statistic} = await import('../pages/Statistic');
              return {Component: Statistic};
            },
          },
          {
            path: ROUTES.LeadersBoard,
            async lazy() {
              const {LeadersBoard} = await import('../pages/LeadersBoard');
              return {Component: LeadersBoard};
            },
          },
        ],
      },
      {
        element: <Empty/>,
        // children: [
        //     {
        //         path: ROUTES.Todos,
        //         element: <Todos/>
        //     },
        // ]
      },
      // {
      //     path: ROUTES.Notes.index,
      //     async lazy() {
      //         const {Notes} = await import("../pages/Notes/Notes");
      //         return { Component: Notes };
      //     },
      //     children: [
      //         {
      //             index: true,
      //             async lazy() {
      //                 const {List} = await import("../pages/Notes/List");
      //                 return { Component: List };
      //             },
      //         },
      //         {
      //             path: ROUTES.Notes.view,
      //             async lazy() {
      //                 const {View} = await import("../pages/Notes/View");
      //                 return { Component: View };
      //             },
      //         },
      //     ]
      // },
      // {
      //     path: ROUTES.Todos,
      //     element: <Todos/>
      // },
      // {
      //     path: ROUTES.About,
      //     element: <About/>
      // }
    ],
  },
]);
