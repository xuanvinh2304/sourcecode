import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/UI/Button';
import { signout } from '../../store/actions/authActions';
// import Message from '../../components/UI/Message';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/';
import "./Device.css";

const Device: FC = () => {
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

        <div className="">

        </div>
      </div>
    </>
  );
}

export default Device;