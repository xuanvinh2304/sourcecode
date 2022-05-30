import React, { FC } from 'react';
import SideBar from '../Device/components/SideBar/SideBar';
import "./UserInformation.css";
import UserHeader from "../../components/UserHeader/UserHeader";

const UserInformation: FC = () => {

  return(
    <>
      <div className="userinformation-container">
        <SideBar />
        <UserHeader />

      </div>
      
    </>
  );
}

export default UserInformation;