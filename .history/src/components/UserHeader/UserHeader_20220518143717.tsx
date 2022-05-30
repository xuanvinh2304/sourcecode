import React, { FC } from 'react';
import avatar from "../../assets/images/avatar.png";
import { useHistory } from 'react-router-dom';
import "./UserHeader.css";
import { BellOutlined } from '@ant-design/icons';

const UserHeader: FC = () => {
  const history = useHistory();

  return(
    <>
      <div className="avatar-device">
        <div className="avatar-device-div">
          <BellOutlined className="avatar-device-icon" />
        </div>
        <div className="avatar-img-title" onClick={() => history.push('/userinformation')}>
          <img src={avatar} alt="avatar-device-img" />
          <div>
            <p className="avatar-title">Xin chào</p>
            <p className="avatar-title">Lê Quỳnh Ái Vân</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHeader;