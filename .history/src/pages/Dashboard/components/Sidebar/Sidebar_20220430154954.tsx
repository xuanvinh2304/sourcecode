import React, { FC } from "react";
import logo from "../../../../assets/images/logo.png";
import "./Sidebar.css";
import Icon, { HomeOutlined } from '@ant-design/icons';

const Sidebar: FC = () => {

  return (
    <>
      <div>
        <div className="logo1">
          <img src={logo} className="img" alt="logo" />
        </div>

        <div className="menu">
          <ul>
            <DesktopOutlined /><li className="menuItem">Dashbroad</li>
            <li className="menuItem">Thiết bị</li>
            <li className="menuItem">Dịch vụ</li>
            <li className="menuItem">Cấp số</li>
            <li className="menuItem">Báo cáo</li>
            <li className="menuItem">Cài đặt hệ thống</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
