import React, { FC, useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import { setSuccess } from '../../../../store/actions/authActions';
import Button from '../../../../components/UI/Button';
import { signout } from '../../../../store/actions/authActions';
import logo from "../../../../assets/images/logo.png";
import { Menu } from 'antd';
import "./SideBar.css";
import {
  TableOutlined,
  DesktopOutlined,
  WechatOutlined,
  AreaChartOutlined,
  SettingOutlined,
  RollbackOutlined
} from "@ant-design/icons";


const SideBar: FC = () => {
  const history = useHistory();
  const { success } = useSelector((state: RootState) => state.auth);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const location = useLocation();
  console.log(location.pathname);

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
      section: "",
      name: " Cấp số",
      path: "/",
    },
    {
      icons: <SettingOutlined />,
      section: "", 
      name: "Báo cáo",
      path: "/",
    },
  ];

  const { pathname } = useLocation();
  const curPath = pathname.split("/")[1];
  const menu = menus.findIndex((item) => item.section === curPath);

  useEffect(() => {
    setActiveIndex(curPath.length === 0 ? 0 : menu);
  }, [curPath.length, menu]);
  const handleActive = (index: number) => {
    setActiveIndex(index);
  };

  const dispatch = useDispatch();
  const logoutClickHandler = () => {
    dispatch(signout());
  }

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);
  
  return (
    <>
      <div className="sidebar-container">
        <div className="logo-1">
          <img src={logo} alt="logo" style={{ cursor: 'pointer' }} onClick={() => history.push('/dashboard')} />
        </div>

        <div className="menu">
          <Menu>
            {menus.map((item, index) => (
              <Link key={index} to={item.path}>
                <Menu.Item
                  key={index}
                  onClick={() => handleActive(index)}
                  className={`${
                    activeIndex === index ? "active-sidebar" : ""
                  } menuItem`}
                >
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
        </div>

        <div className="btn-signout">
          <div className="btn-icon">
            <RollbackOutlined />
            <Button className="btn-button" text="Sign out" onClick={logoutClickHandler}  />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;











