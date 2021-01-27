import React from 'react';
import {
  Route as ReactRoute,
  RouteProps as ReactRouterProps,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactRouterProps {
  isPrivate?: boolean;
  isAdmin?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isAdmin = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={({ location }) => {
        if (!isAdmin) {
          return isPrivate === !!user ? (
            <Component />
          ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : '/dashboard',
                state: { from: location },
              }}
            />
          );
        }
        return isAdmin === !!user?.isAdmin ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isAdmin ? '/admin' : '/admin/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
