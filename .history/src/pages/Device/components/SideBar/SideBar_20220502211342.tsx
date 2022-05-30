import React, { FC } from "react";
import { useHistory } from 'react-router-dom';
import logo from "../../../../assets/images/logo.png";
import { TableOutlined, DesktopOutlined, WechatOutlined, ApartmentOutlined, AreaChartOutlined, SettingOutlined, MoreOutlined } from '@ant-design/icons';

const SideBar: FC = () => {
  const history = useHistory();

  return (
    <>
      <div className="sidebar-container">
        <div className="">
          <img src={logo} style={{ cursor: 'pointer' }} className="img" alt="logo"  onClick={() => history.push('/')} />
        </div>

        <div className="menu">
          <ul>
            <li onClick={() => history.push('/')} className="menuItem"><TableOutlined /> DashBroad</li>
            <li className="menuItem"><DesktopOutlined /> Thiết bị</li>
            <li className="menuItem"><WechatOutlined /> Dịch vụ</li>
            <li className="menuItem"><ApartmentOutlined /> Cấp số</li>
            <li className="menuItem"><AreaChartOutlined /> Báo cáo</li>
            <li className="menuItem"><SettingOutlined /> Cài đặt hệ thống <MoreOutlined /></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
