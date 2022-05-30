import React, { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  // menu active
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // submenu-active
  // const [activeSub, setActiveSub] = useState<number>(0);
  
  // lấy path truyền vào link
  // lấy pathname = useLocation
  const location = useLocation();
  console.log(location.pathname);

  // menu
  const menus = [
    {
      icons: <TableOutlined />,
      section: "dashboard",
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icons: <DesktopOutlined />,
      section: "device",
      name: "Thiết bị",
      path: "/device",
    },
    {
      icons: <WechatOutlined />,
      section: "serviced",
      name: "Dịch vụ",
      path: "/serviced",
    },
    {
      icons: <AreaChartOutlined />,
      section: "numberlevel",
      name: " Cấp số",
      path: "/numberlevel",
    },
    {
      icons: <SettingOutlined />,
      section: "report", 
      name: "Báo cáo",
      path: "/report",
    },
  ];

  // split
  // lấy menus find(i => i.path === pathname)
  const { pathname } = useLocation();
  const curPath = pathname.split("/")[1];
  const menu = menus.findIndex((item) => item.section === curPath);

  // sử dung useEffect setState cho pathname
  useEffect(() => {
    setActiveIndex(curPath.length === 0 ? 0 : menu);
  }, [curPath.length, menu]);

  // const handleActive = (index: number) => {
  //   setActiveIndex(index);
  // };
  // console.log(activeIndex);


  // submenu
  const submenus = [
    {
      section: "role", 
      name: "Quản lí vai trò",
      path: "/system/role",
    },
    {
      section: "account", 
      name: "Quản lí tài khoản",
      path: "/system/account",
    },
    {
      section: "diary", 
      name: "Nhật kí người dùng",
      path: "/system/diary",
    }
  ];
  const submenu = submenus.findIndex((item) => item.section === curPath);

  // sử dung useEffect setState cho pathname
  // useEffect(() => {
  //   setActiveSub(curPath.length === 0 ? 0 : submenu);
  // }, [curPath.length, submenu]);

  return (
    <>
      <div className="sidebar-container">
        <div className="logo-1">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu">
          <Menu>
            {menus.map((item, index) => (
              <Link key={index} to={item.path}>
                <Menu.Item
                  key={index}
                  // onClick={() => handleActive(index)}
                  className={`${
                    activeIndex === index ? "active-sidebar" : ""
                  } menuItem`}
                >
                  {item.icons} {item.name}
                </Menu.Item>
              </Link>
            ))}

            <Menu.SubMenu className="sub-menu" title="Cài đặt hệ thống">
              {submenus.map((item, index) => (
                <Link key={index} to={item.path}>
                  <Menu.Item
                    key={index}
                    // onClick={() => handleActive(index)}
                    className={`${
                      activeIndex === index ? "active-sidebar" : ""
                    } menuItem`}
                  >
                    {item.name}
                  </Menu.Item>
                </Link>
              ))}
            </Menu.SubMenu>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default SideBar;
