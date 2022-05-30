import React, { FC } from 'react';
import "./UserHeader.css";
import avatar from "../../assets/images/avatar.png";
import {  RightOutlined, BellOutlined } from '@ant-design/icons';

const UserHeader: FC = () => {

  return(
    <>
      <div className="deviceheader-title">
        <p className="deviceheader-title--1">Thiết bị</p> <RightOutlined /> 
        <p className="deviceheader-title--2">Danh sách thiết bị</p>

        <div className="avatar-device">
          <BellOutlined className="avatar-device-icon"/>
          <img src={avatar} alt="avatar-device-img" />
          <div className="">
            <p className="avatar-title">Xin chào</p>
            <p className="avatar-title">Lê Quỳnh Ái Vân</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHeader;