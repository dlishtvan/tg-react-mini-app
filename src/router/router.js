import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {ROUTES} from './routerConfig';

import {Root} from '../components/layouts/Root';
import {Main} from '../components/layouts/Main';
import {Empty} from '../components/layouts/Empty';

import userLoader from './loaders/userLoader';
import usersLoader from './loaders/usersLoader';
import mineLoader from './loaders/mineLoader';

export const router = createBrowserRouter([
  {
    element: <Root/>,
    path: ROUTES.Root,
    children: [
      {
        element: <Main/>,
        loader: userLoader,
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
            path: ROUTES.Mine,
            loader: mineLoader,
            async lazy() {
              const {Mine} = await import('../pages/Mine');
              return {Component: Mine};
            },
          },
          {
            path: ROUTES.LeadersBoard,
            loader: usersLoader,
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
