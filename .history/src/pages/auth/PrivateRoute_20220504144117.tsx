import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, RouteProps } from 'react-router-dom';

import { RootState } from '../../store';

interface Props extends RouteProps {
  component: any;
}

const PrivateRoute: FC<Props> = ({ component: Component, ...rest }) => {
  const { authenticated } = useSelector((state: RootState) => state.auth);

  return(
    <>
      <Route {...rest} render={props => authenticated ? <Component {...props} /> : <Navigate to="/signin" />} />
    </>
  );
}

export default PrivateRoute;