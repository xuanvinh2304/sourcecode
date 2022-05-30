import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import DeviceDetailsHeader from './components/DeviceDetailsHeader/DeviceDetailsHeader';
import DeviceDetailsTable from './components/DeviceDetailsTable/DeviceDetailsTable';
import "./DeviceDetails.css";

const DeviceDetails: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      // dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <>
      <div className="device-details-container">
        <SideBar />
        <div className="device-details-child">
          <DeviceDetailsHeader />
          <div className="">
            <DeviceDetailsTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default DeviceDetails;