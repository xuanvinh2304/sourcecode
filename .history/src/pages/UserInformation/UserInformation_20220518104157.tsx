import React, { FC } from 'react';
import SideBar from '../Device/components/SideBar/SideBar';
import "./UserInformation.css";
import UserHeader from "../../components/UserHeader/UserHeader";

const UserInformation: FC = () => {

  return(
    <>
      <div className="userinformation-container">
        <SideBar />
        <div>
          <UserHeader />
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInformation;