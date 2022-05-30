import React, { FC } from 'react';
import "./Notification.css";

const Notification: FC = () => { 

  return(
    <>
      {/* <div className="avatar-device">
        <div className="avatar-device-div"> */}
          <div className="notification">
            <h2 className="notification-heading">Thông báo</h2>
              <ul className="notification-list-item">
                <li className="notification-item-title">
                  <div className="notification-item-info">
                    <div className="notification-item-head">
                      <h5 className="notification-item-name">Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử Thiết Bị Điện Tử</h5>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
        {/* </div>
      </div> */}
    </>
  );
}

export default Notification;