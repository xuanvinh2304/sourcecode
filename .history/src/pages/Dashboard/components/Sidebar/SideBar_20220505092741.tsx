import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import logo from "../../../../assets/images/logo.png";
import "./SideBar.css";
import { Menu, Button, MenuProps } from 'antd';
import {PieChartOutlined, DesktopOutlined, ContainerOutlined } from '@ant-design/icons';

  
const MenuItem = [
    'Option 1', '1', <PieChartOutlined />,
    'Option 2', '2', <DesktopOutlined />,
    'Option 3', '3', <ContainerOutlined />
];

const SideBar: FC = () => {
  const history = useHistory();

  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {collapsed ? <PieChartOutlined /> : <DesktopOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        />
      </div>
    </>
  );
}

export default SideBar;