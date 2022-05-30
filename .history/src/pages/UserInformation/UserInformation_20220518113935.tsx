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
          <div className="deviceheader-title">
            <p className="deviceheader-title--1"></p>
            <p className="deviceheader-title--2">Thông tin cá nhân</p>
            <UserHeader />
          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  );
}

export default UserInformation;