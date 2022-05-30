import React, { FC } from "react";
// import { Table } from 'antd';
import "./DeviceMenu.css";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const DeviceMenu: FC = () => {

  return (
    <>
      <div className="devicemenu-container">
        <div className="devicemenu-title">
          <p>Thiết bị</p> <RightOutlined /> <p>Danh sách thiết bị</p>
        </div>
        <p>Danh sách thiết bị</p>

        <div className="devicemenu-menu">
          <div className="menu--active-state">

          </div>
        </div>
      </div> 

    </>
  );
}

export default DeviceMenu;