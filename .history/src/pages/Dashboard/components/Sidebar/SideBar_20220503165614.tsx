import React, { FC } from "react";
import { useHistory } from 'react-router-dom';
import logo from "../../../../assets/images/logo.png";
import "./SideBar.css";
import { TableOutlined, DesktopOutlined, WechatOutlined, ApartmentOutlined, AreaChartOutlined, SettingOutlined, MoreOutlined } from '@ant-design/icons';

const SideBar: FC = () => {
  const history = useHistory();

  return (
    <>
      <div className="sidebar-container">
        <div className="logo-1">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu">
          <ul>
            <li className="menuItem"><TableOutlined /> DashBroad</li>
            <li className="menuItem" onClick={() => history.push('/device')}><DesktopOutlined /> Thiết bị</li>
            <li className="menuItem"><WechatOutlined /> Dịch vụ</li>
            <li className="menuItem"><ApartmentOutlined /> Cấp số</li>
            <li className="menuItem"><AreaChartOutlined /> Báo cáo</li>
            <li className="menuItem"><SettingOutlined /> Cài đặt hệ thống <MoreOutlined /></li>
          </ul>

          <ul className="sub-menu">
            <li>Quản lí vai trò</li>
            <li>Quản lí tài khoản</li>
            <li>Nhật kí người dùng</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
