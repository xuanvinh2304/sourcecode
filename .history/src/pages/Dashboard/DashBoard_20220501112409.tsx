import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/UI/Button';
import { signout } from '../../store/actions/authActions';
// import Message from '../../components/UI/Message';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../DashBoard/components/SideBar/SideBar';
import MainBoard from '../DashBoard/components/MainBoard/MainBoard';

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
      <div className>
        <div className="dashboard-container">
          <Button text="Sign out" onClick={logoutClickHandler} />
          <SideBar />
        </div>
          <MainBoard />
      </div>
    </>
  );
}

export default DashBoard;