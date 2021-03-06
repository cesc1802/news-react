import React, { useCallback, useLayoutEffect } from 'react';

import { Route, useHistory } from 'react-router-dom';
import { localStorageHelper } from '../../helpers';
import { IRoute } from '../../routes/config';

interface IRestrictedRouteProps extends IRoute {
  isPrivate?: boolean;
}

export const RestrictedRoute: React.FC<IRestrictedRouteProps> = ({
  children,
  restricted = false,
  isPrivate,
  layout: Layout,
  ...props
}) => {
  const history = useHistory();
  const redirect = useCallback(() => {
    if (isPrivate && !localStorageHelper.isLogin()) {
      history.replace('login');
    }
    if (restricted && localStorageHelper.isLogin()) {
      history.replace('/');
    }
  }, [isPrivate, history, restricted]);

  useLayoutEffect(() => {
    redirect();
  }, [redirect]);

  const Component = Layout ? <Layout>{children}</Layout> : children;

  return <Route {...props}>{Component}</Route>;
};
