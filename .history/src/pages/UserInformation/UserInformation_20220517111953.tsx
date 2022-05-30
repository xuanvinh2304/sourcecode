import React, { FC } from 'react';
import SideBar from '../Device/components/SideBar/SideBar';
import ServicedHeader from '../Serviced/components/ServicedHeader/ServicedHeader';
import ServicedTable from '../Serviced/components/ServicedTable/ServicedTable';
import "./UserInformation.css";

const UserInformation: FC = () => {

  return(
    <>
      <div className="userinformation-container">
        <SideBar />
        <div className="">
          <ServicedHeader />
          <div className="">
            <ServicedTable />
          </div>
        </div>

      </div>
      
    </>
  );
}

export default UserInformation;