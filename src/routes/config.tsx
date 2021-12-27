import Home from '../pages/home';

export interface IRoute {
  restricted?: boolean;
  layout?: React.ComponentType;
}
interface IConfigRoutes {
  appRoutes: any[];
  isPrivate?: boolean;
  layout?: React.ComponentType;
}
const publicRoutes: any[] = [
  {
    children: <Home />,
    path: '/',
  },
];
export const configRoutes: IConfigRoutes[] = [
  {
    appRoutes: publicRoutes,
    // layout: MainLayout,
  },
];
