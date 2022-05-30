import React, { FC } from "react";
// import { Table } from 'antd';
import "./DeviceMenu.css";
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined, RightOutlined } from '@ant-design/icons';

function handleButtonClick(e: any) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e: any) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu
    onClick={handleMenuClick}
  />
);

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
            <Space>
              <Dropdown overlay={menu}>
                <Button>
                  <Space>
                    Button
                    1
                    2
                    3
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Space>
          </div>
        </div>
      </div> 

    </>
  );
}

export default DeviceMenu;