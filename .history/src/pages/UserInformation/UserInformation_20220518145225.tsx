import React, { FC } from 'react';
import SideBar from '../Device/components/SideBar/SideBar';
import "./UserInformation.css";
import UserHeader from "../../components/UserHeader/UserHeader";
import { CameraOutlined } from '@ant-design/icons';

const UserInformation: FC = () => {

  return(
    <>
      <div className="userinformation-container">
        <SideBar />
        <div className="">
          <div className="deviceheader-title">
            <p className="deviceheader-title--1"></p>
            <p className="deviceheader-title--2">Thông tin cá nhân</p>
            <UserHeader />
          </div>

          <div className="userinformation-main">
            <div className="">
              <CameraOutlined />  
            </div>

            <div>

            </div>

            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInformation;