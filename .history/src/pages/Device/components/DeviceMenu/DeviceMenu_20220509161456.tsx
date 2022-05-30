import React, { FC } from "react";
// import { Table } from 'antd';
import "./DeviceMenu.css";
import { Menu, MenuProps, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined, RightOutlined, AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import MenuItem from "antd/lib/menu/MenuItem";

// function handleButtonClick(e: any) {
//   message.info('Click on left button.');
//   console.log('click left button', e);
// }

// function handleMenuClick(e: any) {
//   message.info('Click on menu item.');
//   console.log('click', e);
// }

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as unknown as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
];

const DeviceMenu: FC = () => {

  const [openKeys, setOpenKeys] = React.useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    // const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    // if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
    //   setOpenKeys(keys);
    // } else {
    //   setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    // }
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
            <Menu
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              style={{ width: 256 }}
            />
          </div>
        </div>
      </div> 

    </>
  );
}

export default DeviceMenu;