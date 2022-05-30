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
                <li className="notification-item-title"></li>
                <li className="notification-item-sub"></li>
              </ul>
          </div>
        {/* </div>
      </div> */}
    </>
  );
}

export default Notification;