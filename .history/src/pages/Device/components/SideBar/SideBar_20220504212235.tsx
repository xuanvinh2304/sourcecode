import React, { FC, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import { setSuccess } from '../../../../store/actions/authActions';
import Button from '../../../../components/UI/Button';
import { signout } from '../../../../store/actions/authActions';
import logo from "../../../../assets/images/logo.png";
import "./SideBar.css";
import { TableOutlined, DesktopOutlined, WechatOutlined, ApartmentOutlined, AreaChartOutlined, SettingOutlined, MoreOutlined } from '@ant-design/icons';

const SideBar: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const history = useHistory();
  
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
    
      <div className="sidebar-container">
        <div className="logo-1">
          <img src={logo} style={{ cursor: 'pointer' }} alt="logo"  onClick={() => history.push('/')} />
        </div>

        <div className="menu">
          <ul>
            <li onClick={() => history.push('/')} className="menuItem"><TableOutlined /> DashBroad</li>
            <li className="menuItem"><DesktopOutlined /> Thiết bị</li>
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
          </ul>
        </div>

        <div className="btn-signout">
          <Button text="Sign out" onClick={logoutClickHandler} />
        </div>
      </div>
    
  );
}

export default SideBar;
