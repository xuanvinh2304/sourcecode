import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Message from '../../components/UI/Message';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../DashBoard/components/SideBar/SideBar';
import MainBoard from '../DashBoard/components/MainBoard/MainBoard';
import RightBar from '../DashBoard/components/RightBar/RightBar';
import "./DashBoard.css";

const DashBoard: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch(); 

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <>
      <div className="dashboard-container">
        <SideBar />
        <MainBoard />
        <RightBar />
      </div>
    </>
  );
}

export default DashBoard;