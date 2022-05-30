import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Message from '../../components/UI/Message';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import ServicedMenu from '../Serviced/components/ServicedMenu/ServicedMenu';
import ServicedTable from '../Serviced/components/ServicedTable/ServicedTable';
import "./UserInformation.css";

const UserInformation: FC = () => {

  return(
    <>
      <div className="numberlevel-container">
        <SideBar />
        <div className="">
          <ServicedMenu />
          <div className="">
            <ServicedTable />
          </div>
        </div>

      </div>
      
    </>
  );
}

export default UserInformation;