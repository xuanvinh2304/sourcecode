import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Message from '../../components/UI/Message';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import DeviceMenu from '../Device/components/DeviceMenu/DeviceMenu';
import DeviceTable from '../Device/components/DeviceTable/DeviceTable';
import "./Account.css";

const Account: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <>
      <div className="account-container">
        <SideBar />
        <div className="">
          <DeviceMenu />
          <div className="">
            <DeviceTable />
          </div>
        </div>

      </div>
      
    </>
  );
}

export default Account;