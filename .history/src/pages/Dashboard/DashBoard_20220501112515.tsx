import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/UI/Button';
import { signout } from '../../store/actions/authActions';
// import Message from '../../components/UI/Message';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../DashBoard/components/SideBar/SideBar';
import MainBoard from '../DashBoard/components/MainBoard/MainBoard';
import "./DashBoard.css";

const DashBoard: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const logoutClickHandler = () => {
    dispatch(signout());
  }

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <>
      <div className="dashboard-container">
        <div className="">
          <Button text="Sign out" onClick={logoutClickHandler} />
          <SideBar />
        </div>

        <div>
          <MainBoard /> 
        </div>
      </div>
    </>
  );
}

export default DashBoard;