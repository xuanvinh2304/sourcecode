import React, { FC } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import logo from "../../../../assets/images/logo.png";
import "./SideBar.css";
import { TableOutlined, DesktopOutlined, WechatOutlined, ApartmentOutlined, AreaChartOutlined, SettingOutlined, MoreOutlined } from '@ant-design/icons';
import { SideBarData } from './SideBarData.js';

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
            {SideBarData.map((val, key) => {
              return (
                <li 
                  key={key} 
                  className="menuItem"
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div>{val.icon}</div> <div>{val.title}</div>
                </li>
              );
            })}
            
            <div className="menuItem-hover">
              <li className="menuItem"><SettingOutlined /> Cài đặt hệ thống <MoreOutlined /></li>
              <ul className="sub-menu">   
                <li className="sub-menuItem">Quản lí vai trò</li>
                <li className="sub-menuItem">Quản lí tài khoản</li>
                <li className="sub-menuItem">Nhật kí người dùng</li>
              </ul>
            </div>
          </ul>

        </div>
      </div>
    </>
  );
}

export default SideBar;