import React, { FC } from 'react';
import SideBar from '../Device/components/SideBar/SideBar';
import "./UserInformation.css";
import avatar from "../../assets/images/avatar.png";
import UserHeader from "../../components/UserHeader/UserHeader";
import { CameraOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const UserInformation: FC = () => {

  return(
    <>
      <div className="userinformation-container">
        <SideBar />
        <div className="userinformation-container-child">
          <div className="deviceheader-title">
            <p className="deviceheader-title--1"></p>
            <p className="deviceheader-title--2">Thông tin cá nhân</p>
            <UserHeader /> 
          </div>

          <div className="userinformation-main">
            <div className="userinformation-img">
              <img src={avatar} alt="avatar-img" />
              <div className="userinformation-icon">
                <CameraOutlined />  
              </div>
              <p className="userinformation-name">Lê Quỳnh Ái Vân</p>
            </div>

            <div>
              <p>Tên người dùng</p>
              <Input placeholder="" />

              <p>Tên người dùng</p>
              <Input placeholder="" />

              <p>Tên người dùng</p>
              <Input placeholder="" />
            </div>

            <div>
              <p>Tên người dùng</p>
              <Input placeholder="" />

              <p>Tên người dùng</p>
              <Input placeholder="" />
              
              <p>Tên người dùng</p>
              <Input placeholder="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInformation;