import React, { FC, useState } from 'react';
import { Image } from '../../assets/variableImage';
import { useHistory } from 'react-router-dom';
import "./UserHeader.css";
import { BellOutlined } from '@ant-design/icons';
import Notification from '../Notification/Notification';

const UserHeader: FC = () => {
  const history = useHistory();

  const [state, setstate] = useState(false);
  const toggleBtn = () => {
    setstate(prevState => !prevState);
  }

  return(
    <>
      <div className="avatar-device">
        <div className="avatar-device-div">
          <BellOutlined className={ state ? "avatar-device-icon" : "avatar-device-icon__toggle" } onClick={toggleBtn} />
          { state ? <Notification /> :
            ''  
          }
        </div>
        <div className="avatar-img-title" onClick={() => history.push('/userinformation')}>
          <img src={Image.avatar} alt="avatar-device-img" />
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