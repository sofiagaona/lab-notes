import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Contextos/contexAuth';

// Autenticación

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, currentUser } = useAuth();

  if (Object.keys(currentUser).length === 0) {
    console.log(`esta vacio${user}`);
  }

  return (
    <Route {...rest}>
      {Object.keys(currentUser).length !== 0 ? (
        <Component />
      ) : (
        <Redirect to="/" />
      )}
    </Route>
  );
};
export default PrivateRoute;
