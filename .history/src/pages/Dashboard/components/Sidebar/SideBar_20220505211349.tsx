import React, { FC } from 'react';
import { useHistory, NavLink  } from 'react-router-dom';
import logo from "../../../../assets/images/logo.png";
import "./SideBar.css";
import { TableOutlined, DesktopOutlined, WechatOutlined, ApartmentOutlined, AreaChartOutlined, SettingOutlined, MoreOutlined } from '@ant-design/icons';

const SideBar: FC = () => {
  const history = useHistory();

  // const [collapsed, setCollapsed] = React.useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

  return (
    <>
      <div className="sidebar-container">
        <div className="logo-1">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu">
          <NavLink to="#" className="menuItem" activeClassName="active"><TableOutlined /> DashBoard</NavLink>
            
          <NavLink to="/device" className="menuItem" activeClassName="active" onClick={() => history.push('/device')}><DesktopOutlined /> Thiết bị</NavLink>
          <li className="menuItem"><WechatOutlined /> Dịch vụ</li>
          <li className="menuItem"><ApartmentOutlined /> Cấp số</li>
          <li className="menuItem"><AreaChartOutlined /> Báo cáo</li>
          <div className="menuItem-hover">
            <li className="menuItem"><SettingOutlined /> Cài đặt hệ thống <MoreOutlined /></li>
            <ul className="sub-menu">   
              <li className="sub-menuItem">Quản lí vai trò</li>
              <li className="sub-menuItem">Quản lí tài khoản</li>
              <li className="sub-menuItem">Nhật kí người dùng</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;