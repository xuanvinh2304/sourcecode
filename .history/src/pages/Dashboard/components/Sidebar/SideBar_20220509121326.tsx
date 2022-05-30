import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from "../../../../assets/images/logo.png";
import "./SideBar.css";
import { Menu } from 'antd';
import { TableOutlined, DesktopOutlined, WechatOutlined, AreaChartOutlined, SettingOutlined, MoreOutlined } from '@ant-design/icons';


const SideBar: FC = () => {
  const [active, setActive] = useState("FirstCard");

  const history = useHistory();
  
  return (
    <>
      <div className="sidebar-container">
        <div className="logo-1">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu">
          <Menu>
            <Menu.Item className="menuItem"><TableOutlined />Dashboard</Menu.Item>
            <Menu.Item className="menuItem" onClick={() => history.push('/device')}><DesktopOutlined  />Thiết bị</Menu.Item>
            <Menu.Item className="menuItem" onClick={() => history.push('/dashboard')}><WechatOutlined  />Dịch vụ</Menu.Item>
            <Menu.Item className="menuItem" onClick={() => history.push('/dashboard')}><AreaChartOutlined  />Cấp số</Menu.Item>
            <Menu.Item className="menuItem" onClick={() => history.push('/dashboard')}><SettingOutlined  />Báo cáo</Menu.Item>
            <Menu.SubMenu title="Cài đặt hệ thống"> <MoreOutlined   />
              <Menu.Item>item 3</Menu.Item>
              <Menu.Item>item 3</Menu.Item>
              <Menu.Item>item 3</Menu.Item>
            </Menu.SubMenu>
          </Menu>;
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;











