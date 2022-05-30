import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import DeviceHeader from '../Device/components/DeviceHeader/DeviceHeader';
import DeviceTable from '../Device/components/DeviceTable/DeviceTable';
import "./Device.css";
import { LoadDuLieu } from '../../store/actions/thietBiAction';

const Device: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if(success) {
  //     // dispatch(setSuccess(''));
  //   }
  // }, [success, dispatch]);

  useEffect(() => {
    dispatch(LoadDuLieu());
  }, [])

  return(
    <>
      <div className="device-container">
        <SideBar />
        <div className="">
          <DeviceHeader />
          <div className="">
            <DeviceTable /> 
          </div>
        </div>

      </div>
      
    </>
  );
}

export default Device;