import React, { FC } from 'react';
import { useHistory, NavLink  } from 'react-router-dom';
import logo from "../../../../assets/images/logo.png";
import "./SideBar.css";
import { Menu, Button, MenuProps } from 'antd';
import { AppstoreOutlined, MenuUnfoldOutlined, MenuFoldOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined } from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';

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
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
];

const SideBar: FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div className="sidebar-container">
        <div className="logo-1">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu">
          <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        />
        </div>
      </div>
    </>
  );
}

export default SideBar;