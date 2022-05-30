import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';

import Home from './components/sections/Home';
import Loader from './components/UI/Loader';
import SignUp from './pages/auth/SignUp/SignUp';
import SignIn from './pages/auth/SignIn/SignIn';
import ForgotPassword from './pages/auth/ForgotPassword/ForgotPassword';
import PrivateRoute from './pages/auth/PrivateRoute';
import PublicRoute from './pages/auth/PublicRoute';
import DashBoard from './pages/DashBoard/DashBoard';
import Device from './pages/Device/Device';
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
      <BrowserRouter>
        <Routes>
          <PublicRoute path="/" component={Home} />
          <PublicRoute path="/signup" component={SignUp} />
          <PublicRoute path="/signin" component={SignIn} />
          <PublicRoute path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/dashboard" component={DashBoard} />
          <PrivateRoute path="/device" component={Device} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
