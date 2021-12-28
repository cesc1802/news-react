import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { configRoutes } from "./config";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        {configRoutes.map(({ appRoutes, isPrivate, layout: MainLayout }, i) => {
          return appRoutes.map(
            ({ children, path, layout, ...props }, index) => {
              return <Route {...props}>{children}</Route>;
            }
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
