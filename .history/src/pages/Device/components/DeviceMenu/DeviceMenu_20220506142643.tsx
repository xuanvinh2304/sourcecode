import React, { FC } from "react";
// import { Table } from 'antd';
import "./DeviceMenu.css";
import { Menu, MenuProps } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, RightOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>[][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
];

const DeviceMenu: FC = () => {
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
  };

  return (
    <>
      <div className="devicemenu-container">
        <div className="devicemenu-title">
          <p>Thiết bị</p> <RightOutlined /> <p>Danh sách thiết bị</p>
        </div>
        <p>Danh sách thiết bị</p> 

        <div className="devicemenu-menu">
          <div className="menu--active-state">
            <Menu onClick={onClick} 
                  style={{ width: 256 }} 
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
            />
          </div>
        </div>
      </div> 

    </>
  );
}

export default DeviceMenu;