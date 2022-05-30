import React, { FC, useState } from "react";
import { useHistory } from 'react-router-dom';
import logo from "../../../../assets/images/logo.jpg";
import "./Sidebar.css";
import DesktopOutlined

const Sidebar: FC = () => {
  const history = useHistory();
  const [] = useState(true)
  
  return (
    <>
      <div>
        <div className="">
          <img src={logo} className="img" alt="logo" onClick={() => history.push('/')} />
        </div>

        <div className="menu">
          <ul>
            <li><DesktopOutlined />Dashbroad</li>
            <li>Thiết bị</li>
            <li>Dịch vụ</li>
            <li>Cấp số</li>
            <li>Báo cáo</li>
            <li>Cài đặt hệ thống</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
