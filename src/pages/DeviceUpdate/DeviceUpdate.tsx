import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import DeviceUpdateHeader from './components/DeviceUpdateHeader/DeviceUpdateHeader';
import DeviceUpdateTable from './components/DeviceUpdateTable/DeviceUpdateTable';
import "./DeviceUpdate.css";

const DeviceUpdate: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      // dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <>
      <div className="device-update-container">
        <SideBar />
        <div className="device-update-child">
          <DeviceUpdateHeader />
          <div className="">
            <DeviceUpdateTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default DeviceUpdate;