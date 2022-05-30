import React, { FC } from 'react';
import avatar from "../../assets/images/avatar.png";
import { useHistory } from 'react-router-dom';
import {  RightOutlined, BellOutlined } from '@ant-design/icons';

const UserHeader: FC = () => {
  const history = useHistory();

  return(
    <>
      <div className="deviceheader-title">
        <p className="deviceheader-title--1">Thiết bị</p> <RightOutlined /> 
        <p className="deviceheader-title--2">Danh sách thiết bị</p>

        <div className="avatar-device">
          <BellOutlined className="avatar-device-icon"/>
          <div className="avatar-img-title" onClick={() => history.push('/userinformation')}>
            <img src={avatar} alt="avatar-device-img" />
            <div>
              <p className="avatar-title">Xin chào</p>
              <p className="avatar-title">Lê Quỳnh Ái Vân</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHeader;