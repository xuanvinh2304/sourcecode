import React, { FC, useState } from "react";
import { useHistory } from 'react-router-dom';
import logo from "../../../../assets/images/logo.jpg";
import "./Sidebar.css";

const Sidebar: FC = () => {
  const history = useHistory();
  const [] = useState(true)
  
  return (
    <>
      <div>
        <div className="logo">
          <img src={logo} className="img" alt="logo" onClick={() => history.push('/')} />
        </div>

        <div className="menu">
          <ul>
            <li className="menuItem">Dashbroad</li>
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
