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
  // lấy pathname = useHistory(v5)
  const location = useLocation()
  const history = useHistory()

  // lấy menus find(i => i.path === pathname)
  // const [selectedKey, setSelectedKey] = useState(items.find((_item: { path: string; }) => location.pathname.startsWith(_item.path)).key)
  // const onClickMenu = (item: { key: any; }) => {
  //   const clicked = item.find((_item: { key: any; }) => _item.key === item.key)
  //   history.push(clicked.path)
  // }

  // split

  // sử dung useEf setState cho pathname
  // useEffect(() => {
  //   setSelectedKey(items.find(_item => location.pathname.startsWith(_item.path)).key)
  // }, [location])

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
              <Link to={item.path}>
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
