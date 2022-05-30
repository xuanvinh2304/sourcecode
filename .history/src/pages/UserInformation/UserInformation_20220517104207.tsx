import React, { FC } from 'react';
// import Message from '../../components/UI/Message';
import SideBar from '../Device/components/SideBar/SideBar';
import ServicedMenu from '../Serviced/components/ServicedMenu/ServicedMenu';
import ServicedTable from '../Serviced/components/ServicedTable/ServicedTable';
import "./UserInformation.css";

const UserInformation: FC = () => {

  return(
    <>
      <div className="userinformation-container">
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