import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';

import Home from './components/sections/Home';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import ForgotPassword from './components/auth/ForgotPassword';
import PrivateRoute from './components/auth/PrivateRoute';
import PublicRoute from './components/auth/PublicRoute';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Loader from './components/UI/Loader';
import firebase from './firebase/config';
import { getUserById, setLoading, setNeedVerification } from './store/actions/authActions';
import { RootState } from './store';

const App: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);
  
  // Check if user exists
  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if(user) {
        dispatch(setLoading(true));
        await dispatch(getUserById(user.uid));
        if(!user.emailVerified) {
          dispatch(setNeedVerification());
        }
      }
      dispatch(setLoading(false));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if(loading) {
    return <Loader />;
  }

  return (
    <>
    </>
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" component={Home} exact />
        <PublicRoute path="/signup" component={SignUp} exact />
        <PublicRoute path="/signin" component={SignIn} exact />
        <PublicRoute path="/forgot-password" component={ForgotPassword} exact />
        <PrivateRoute path="/dashboard" component={Dashboard} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
