import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import ServicedDetailsHeader from './components/ServicedDetailsHeader/ServicedDetailsHeader';
import ServicedDetailsTable from './components/ServicedDetailsTable/ServicedDetailsTable';
import "./ServicedDetails.css";

const ServicedDetails: FC = () => {
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
          <ServicedDetailsHeader />
          <div className="">
            <ServicedDetailsTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicedDetails;