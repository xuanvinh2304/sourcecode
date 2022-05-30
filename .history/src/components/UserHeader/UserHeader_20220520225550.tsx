import React, { FC } from 'react';
import { Image } from '../../assets/variableImage';
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
          <div className="notification">
            <h2 className="notification-heading">Thông báo</h2>
              <ul className="notification-list-item">
                {/* Cart item  */}
                <li className="notification-item">
                  <div className="notification-item-info">
                    <div className="notification-item-head">
                      <h5 className="notification-item-name">Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử</h5>
                      <div className="notification-item-price-wrap">
                        <span className="notification-item-price">2.000.000đ</span>
                        <span className="notification-item-multiply">x</span>
                        <span className="notification-item-qnt">2</span>
                      </div>
                    </div>
                    <div className="notification-item-body">
                      <span className="notification-item-description">SamSung</span>
                      <span className="notification-item-remove">Xóa</span>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
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