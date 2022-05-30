import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Message from '../../components/UI/Message';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import DeviceMenu from '../Device/components/DeviceMenu/DeviceMenu';
import DeviceTable from '../Device/components/DeviceTable/DeviceTable';
import "./Device.css";

const Device: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <>
      <div className="device-container">
        <div className="">
          <SideBar />
        </div>

        <div className="">
          <DeviceMenu />
        </div>
        
        <div className="">
          <DeviceTable />
        </div>

      </div>
    </>
  );
}

export default Device;