import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'react-calendar/dist/Calendar.css';
import './App.css';

import Loader from './components/UI/Loader';
import Home from './components/sections/Home';
import SignUp from './pages/auth/SignUp/SignUp';
import SignIn from './pages/auth/SignIn/SignIn';
import ForgotPassword from './pages/auth/ForgotPassword/ForgotPassword';
import PrivateRoute from './pages/auth/PrivateRoute';
// import PublicRoute from './pages/auth/PublicRoute';
import DashBoard from './pages/DashBoard/DashBoard';
import Device from './pages/Device/Device';
import Serviced from './pages/Serviced/Serviced';
import NumberLevel from './pages/NumberLevel/NumberLevel';
import Report from './pages/Report/Report';
import Role from './pages/Role/Role';
import Account from './pages/Account/Account';
import Diary from './pages/Diary/Diary';
import UserInformation from './pages/UserInformation/UserInformation';
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
        <Switch>
          {/* <PublicRoute path="/" component={Home} exact />
          <PublicRoute path="/signup" component={SignUp} exact />
          <PublicRoute path="/signin" component={SignIn} exact />
          <PublicRoute path="/forgot-password" component={ForgotPassword} exact /> */}
          <Route path="/dashboard" component={DashBoard} exact />
          <Route path="/device" component={Device} exact />
          <Route path="/serviced" component={Serviced} exact />
          <Route path="/numberlevel" component={NumberLevel} exact />
          <Route path="/report" component={Report} exact />
          <Route path="/system/role" component={Role} exact />
          <Route path="/system/account" component={Account} exact />
          <Route path="/system/diary" component={Diary} exact />
          <Route path="/userinformation" component={UserInformation} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
