import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'react-calendar/dist/Calendar.css';
import './App.css';

import Loader from './components/UI/Loader';
// import Home from './components/sections/Home';
import SignIn from './pages/auth/SignIn/SignIn';
import ForgotPassword from './pages/auth/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword/ResetPassword';
import PrivateRoute from './pages/auth/PrivateRoute';
import PublicRoute from './pages/auth/PublicRoute';
import DashBoard from './pages/DashBoard/DashBoard';
import Device from './pages/Device/Device';
import AddDevice from './pages/AddDevice/AddDevice';
import DeviceUpdate from './pages/DeviceUpdate/DeviceUpdate';
import DeviceDetails from './pages/DeviceDetails/DeviceDetails';
import Serviced from './pages/Serviced/Serviced';
// import AddServiced from './pages/AddServiced/AddServiced';
// import ServicedUpdate from './pages/ServicedUpdate/ServicedUpdate';
// import ServicedDetails from './pages/ServicedDetails/ServicedDetails';
import NumberLevel from './pages/NumberLevel/NumberLevel';
import Report from './pages/Report/Report';
import Role from './pages/Role/Role';
import Account from './pages/Account/Account';
import Diary from './pages/Diary/Diary';
import UserInformation from './pages/UserInformation/UserInformation';
// import firebase from './firebase/config';
// import { getUserById, setLoading, setNeedVerification } from './store/actions/authActions';
import { RootState } from './store';

const App: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);
  
  // Check if user exists
  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
  //     if(user) {
  //       dispatch(setLoading(true));
  //       await dispatch(getUserById(user.uid));
  //       if(!user.emailVerified) {
  //         dispatch(setNeedVerification());
  //       }
  //     }
  //     dispatch(setLoading(false));
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [dispatch]);

  if(loading) {
    return <Loader />;
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/" component={SignIn} exact />
          <PublicRoute path="/signin" component={SignIn} exact />
          <PublicRoute path="/resetpassword/:id" component={ResetPassword} exact />
          <PublicRoute path="/forgot-password" component={ForgotPassword} exact />

          <PrivateRoute path="/dashboard" component={DashBoard} exact />
          <PrivateRoute path="/device" component={Device} exact />
          <PrivateRoute path="/device/add-device" component={AddDevice} exact />
          <PrivateRoute path="/device/device-update/:id" component={DeviceUpdate} exact />
          <PrivateRoute path="/device/device-details/:id" component={DeviceDetails} exact />

          <PrivateRoute path="/serviced" component={Serviced} exact />
          {/* <PrivateRoute path="/serviced/add-serviced" component={AddServiced} exact />
          <PrivateRoute path="/serviced/serviced-update/:id" component={ServicedUpdate} exact />
          <PrivateRoute path="/serviced/serviced-details/:id" component={ServicedDetails} exact /> */}

          <PrivateRoute path="/numberlevel" component={NumberLevel} exact />
          <PrivateRoute path="/report" component={Report} exact />
          <PrivateRoute path="/system/role" component={Role} exact />
          <PrivateRoute path="/system/account" component={Account} exact />
          <PrivateRoute path="/system/diary" component={Diary} exact />
          <PrivateRoute path="/userinformation" component={UserInformation} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
