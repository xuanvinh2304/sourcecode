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

            <div className="userinformation-input1">
              <p className="input-subtitle">Tên người dùng</p>
              <Input className="input-hover" placeholder="" />

              <p className="input-subtitle">Số điện thoại</p>
              <Input className="input-hover" placeholder="" />

              <p className="input-subtitle">Email:</p>
              <Input className="input-hover" placeholder="" />
            </div>

            <div className="userinformation-input2">
              <p className="input-subtitle">Tên đăng nhập</p>
              <Input className="input-hover" placeholder="" />

              <p className="input-subtitle">Mật khẩu</p>
              <Input className="input-hover" placeholder="" />
              
              <p className="input-subtitle">Vai trò:</p>
              <Input className="input-hover" placeholder="" />  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInformation;