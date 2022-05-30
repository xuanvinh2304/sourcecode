import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import AddDeviceHeader from './components/AddDeviceHeader/AddDeviceHeader';
import AddDeviceTable from './components/AddDeviceTable/AddDeviceTable';
import "./AddDevice.css";

const AddDevice: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      // dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <>
      <div className="add-device-container">
        <SideBar />
        <div className="add-device-child">
          <AddDeviceHeader />
          <div className="">
            <AddDeviceTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddDevice;