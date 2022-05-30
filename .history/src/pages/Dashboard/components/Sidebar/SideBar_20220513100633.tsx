import React, { FC, useState, useEffect  } from "react";
import { Link, useHistory, useLocation  } from "react-router-dom";
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

  // lấy pathname = useLocation
  // 
  const location = useLocation()
  console.log(location.pathname)
  //

  
  const menus = [
    {
      icons: <TableOutlined />,
      section:'dashboard',
      name: "Dashboard",
      path: '/dashboard'
    },
    {
      icons: <DesktopOutlined />,
      section:'device',
      name: "Thiết bị",
      path: '/device'
    },
    {
      icons: <WechatOutlined />,
      section:'',
      name: "Dịch vụ",
      path: '/'
    },
    {
      icons: <AreaChartOutlined />,
      section:'',
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
  const {pathname} = useLocation()
  const curPath = pathname.split('/')
  const menu = menus.findIndex((item) => item.section === cruPath );
 

  // split

  // sử dung useEf setState cho pathname

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
          <Menu /*selectedKeys={[selectedKey]}*/>
            {menus.map((item, index) => (
              <Link key={index} to={item.path}>
                <Menu.Item key={index}
                onClick={() => handleActive(index)}
                className={`${ activeIndex === index ? "active-sidebar" : "" } menuItem`}>
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
