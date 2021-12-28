import React from 'react';

import { RouteProps } from 'react-router-dom';
import { MainLayout } from '../layouts/main';

import Home from '../pages/home';

import Login from '../pages/login';
import PrivatePage from '../pages/private';

export interface IRoute extends RouteProps {
  restricted?: boolean;
  layout?: React.ComponentType;
}

const privateRoutes: IRoute[] = [
  {
    children: <PrivatePage />,
    path: '/private',
  },
];
const publicRoutes: IRoute[] = [
  {
    children: <Home />,
    exact: true,
    path: '/',
  },
  {
    children: <Login />,
    path: '/login',
    restricted: true,
  },
];
const noLayoutRoutes: IRoute[] = [];

interface IConfigRoutes {
  appRoutes: IRoute[];
  isPrivate?: boolean;
  layout?: React.ComponentType;
}

export const configRoutes: IConfigRoutes[] = [
  {
    appRoutes: privateRoutes,
    isPrivate: true,
    layout: MainLayout,
  },
  {
    appRoutes: publicRoutes,

    layout: MainLayout,
  },
  {
    appRoutes: noLayoutRoutes,
  },
];
