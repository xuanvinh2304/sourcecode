import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import logo from "../../../../assets/images/logo.png";
import "./SideBar.css";
import { Menu } from 'antd';
import { TableOutlined, MenuUnfoldOutlined, MenuFoldOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined } from '@ant-design/icons';


const SideBar: FC = () => {
  const history = useHistory();
  
  return (
    <>
      <div className="sidebar-container">
        <div className="logo-1">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu">
        <Menu>
          <Menu.Item className="menuItem" onClick={() => history.push('/dashboard')}><TableOutlined />Dashboard</Menu.Item>
          <Menu.Item>item 2</Menu.Item>
          <Menu.Item>item 1</Menu.Item>
          <Menu.Item>item 1</Menu.Item>
          <Menu.Item>item 1</Menu.Item>
          <Menu.SubMenu title="sub menu">
            <Menu.Item>item 3</Menu.Item>
          </Menu.SubMenu>
        </Menu>;
        </div>
      </div>
    </>
  );
}

export default SideBar;











