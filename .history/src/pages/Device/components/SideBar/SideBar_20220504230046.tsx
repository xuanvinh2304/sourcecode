import React, { FC } from "react";
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../../../../components/UI/Button';
import { signout } from '../../../../store/actions/authActions';
import logo from "../../../../assets/images/logo.png";
import "./SideBar.css";
import { SideBarData } from '../../../DashBoard/components/SideBar/SideBarData';
import { TableOutlined, DesktopOutlined, WechatOutlined, ApartmentOutlined, AreaChartOutlined, SettingOutlined, MoreOutlined } from '@ant-design/icons';

const SideBar: FC = () => {
  const history = useHistory();
  
  const dispatch = useDispatch();
  const logoutClickHandler = () => {
    dispatch(signout());
  }

  return (
    <>
      <div className="sidebar-container">
        <div className="logo-1">
          <img src={logo} style={{ cursor: 'pointer' }} alt="logo"  onClick={() => history.push('/')} />
        </div>

        
        <ul className="menu">
          
          <li>
                <NavLink exact to="/" activeClassName="active-link">
                    Home
                </NavLink>
          </li>
            
          

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

      <div className="btn-signout">
        <Button text="Sign out" onClick={logoutClickHandler} />
      </div>
    </>
  );
}

export default SideBar;
