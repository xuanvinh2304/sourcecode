import React, { FC } from "react";
// import { Table } from 'antd';
import "./DeviceMenu.css";
import type { MenuProps } from 'antd';
import avatar from "../../../../assets/images/avatar.png";
import { Menu, Switch, Divider } from 'antd';
import {  RightOutlined, BellOutlined, MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined, LinkOutlined } from '@ant-design/icons';
import MenuItem from "antd/lib/menu/MenuItem";

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as unknown as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation Three', 'sub2', <SettingOutlined />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
];

const DeviceMenu: FC = () => {

  

  return (
    <>
      <div className="devicemenu-container">
        <div className="devicemenu-title">
          <p>Thiết bị</p> <RightOutlined /> <p>Danh sách thiết bị</p>
          
          <div className="avatar-device">
          <BellOutlined className="avatar-device-icon"/>
          <img src={avatar} alt="avatar-device-img" />
          <div>
            <p className="avatar-title">Xin chào</p>
            <p className="avatar-title">Lê Quỳnh Ái Vân</p>
          </div>
        </div>
        </div>
        <p>Danh sách thiết bị</p> 

        <div className="devicemenu-menu">
          <div className="menu--active-state">
            <Menu
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub2']}
            />
          </div>
        </div>
      </div> 

    </>
  );
}

export default DeviceMenu;