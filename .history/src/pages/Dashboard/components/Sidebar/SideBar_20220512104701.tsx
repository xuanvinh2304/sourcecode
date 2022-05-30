import React, { FC, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const menus = [
    {
      icons: <TableOutlined />,
      name: "Dashboard",
    },
    {
      icons: <DesktopOutlined />,
      name: "Thiết bị",
    },
    {
      icons: <WechatOutlined />,
      name: "Dịch vụ",
    },
    {
      icons: <AreaChartOutlined />,
      name: " Cấp số",
    },
    {
      icons: <SettingOutlined />,
      name: "Báo cáo",
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
            {menus.map((item, index) => (
              <Menu.Item key={index} className={`${activeIndex === index ? "menuItem active-sidebar" : 'menuItem' }  `} >
                {item.icons} {item.name}
              </Menu.Item>
            ))}

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
