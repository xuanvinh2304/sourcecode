import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import ServicedUpdateHeader from './components/ServicedUpdateHeader/ServicedUpdateHeader';
import ServicedUpdateTable from './components/ServicedUpdateTable/ServicedUpdateTable';
import "./ServicedUpdate.css";

const ServicedUpdate: FC = () => {
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
          <ServicedUpdateHeader />
          <div className="">
            <ServicedUpdateTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicedUpdate;