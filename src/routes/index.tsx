import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";
import { RestrictedRoute } from "../components/RestrictedRoute";
import { Page404 } from "../pages/page-404";

import { configRoutes } from "./config";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {configRoutes.map(({ appRoutes, isPrivate, layout: MainLayout }, i) => {
          return appRoutes.map(
            ({ children, path, layout, ...props }, index) => {
              return (
                <RestrictedRoute
                  isPrivate={isPrivate}
                  path={path}
                  layout={layout || MainLayout}
                  {...props}
                >
                  {children}
                </RestrictedRoute>
              );
            }
          );
        })}
        <RestrictedRoute>
          <Page404 />
        </RestrictedRoute>
      </Switch>
    </BrowserRouter>
  );
};
