import React, { FC, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import "./SideBar.css";
import { Menu } from "antd";
import {
  TableOutlined,
  DesktopOutlined,
  WechatOutlined,
  AreaChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const SideBar: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  // lấy path truyền vào link
  
  // lấy pathname = useHistory(v5)
  const pathname = useHistory();

  // split

  // sử dung useEf setState cho pathname

  const menus = [
    {
      icons: <TableOutlined />,
      name: "Dashboard",
      path: '/dashboard'
    },
    {
      icons: <DesktopOutlined />,
      name: "Thiết bị",
      path: '/device'
    },
    {
      icons: <WechatOutlined />,
      name: "Dịch vụ",
      path: '/'
    },
    {
      icons: <AreaChartOutlined />,
      name: " Cấp số",
      path: '/'
    },
    {
      icons: <SettingOutlined />,
      name: "Báo cáo",
      path: '/'
    },
  ];

  // lấy menus find(i => i.path === pathname)
  // const found = menus.find(index => index.path === pathname);

  const handleActive = (index:number) => {
    setActiveIndex(index)
  }
   
  console.log(activeIndex)
  
  return (
    <>
      <div className="sidebar-container">
        <div className="logo-1">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu">
          <Menu>
            {menus.map((item, index) => (
              <Link to="/dashboard">
                <Menu.Item key={index}
                onClick={() => handleActive(index)}
                className={`${ activeIndex === index ? "active-sidebar" : "" } `}>
                  {item.icons} {item.name}
                </Menu.Item>
              </Link>
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
