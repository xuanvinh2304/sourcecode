import React, { FC } from 'react';
import avatar from "../../assets/images/avatar.png";
import { useHistory } from 'react-router-dom';
import "./UserHeader.css";
import {  RightOutlined, BellOutlined } from '@ant-design/icons';

const UserHeader: FC = () => {
  const history = useHistory();

  return(
    <>
      <div className="deviceheader-title">
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