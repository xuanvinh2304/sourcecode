import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import "./SideBar.css";
import { Menu } from "antd";
import {
  TableOutlined,
  DesktopOutlined,
  WechatOutlined,
  AreaChartOutlined,
  SettingOutlined,
  MoreOutlined,
} from "@ant-design/icons";

const SideBar: FC = () => {
  const history = useHistory();

  const menus = [
    {
      icons: <TableOutlined />,
      name: "Dashboard",
    },
  ];
  return (
    <>
      <div className="sidebar-container">
        <div className="logo-1">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu">
          <Menu>
            <Menu.Item className="menuItem">
              <TableOutlined /> Dashboard
            </Menu.Item>
            <Menu.Item
              className="menuItem"
              onClick={() => history.push("/device")}
            >
              <DesktopOutlined /> Thiết bị
            </Menu.Item>
            <Menu.Item className="menuItem">
              <WechatOutlined /> Dịch vụ
            </Menu.Item>
            <Menu.Item className="menuItem">
              <AreaChartOutlined /> Cấp số
            </Menu.Item>
            <Menu.Item className="menuItem">
              <SettingOutlined /> Báo cáo
            </Menu.Item>
            <Menu.SubMenu className="sub-menu" title="Cài đặt hệ thống">
              <Menu.Item className="sub-menuItem">Quản lí vai trò</Menu.Item>
              <Menu.Item className="sub-menuItem">Quản lí tài khoản</Menu.Item>
              <Menu.Item className="sub-menuItem">Nhật kí người dùng</Menu.Item>
            </Menu.SubMenu>
          </Menu>
          ;<div></div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
