import React, { FC, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import { setSuccess } from '../../../../store/actions/authActions';
import Button from '../../../../components/UI/Button';
import { signout } from '../../../../store/actions/authActions';
import logo from "../../../../assets/images/logo.png";
import { Menu } from 'antd';
import "./SideBar.css";
import { TableOutlined, DesktopOutlined, WechatOutlined, AreaChartOutlined, SettingOutlined, MoreOutlined } from '@ant-design/icons';


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
    <>
      <div className="sidebar-container">
        <div className="logo-1">
          <img src={logo} style={{ cursor: 'pointer' }} alt="logo"  onClick={() => history.push('/')} />
        </div>

        <div className="menu">
          <Menu>
            <Menu.Item className="menuItem" onClick={() => history.push('/dashboard')}><TableOutlined /> Dashboard</Menu.Item>
            <Menu.Item className="menuItem"><DesktopOutlined  /> Thiết bị</Menu.Item>
            <Menu.Item className="menuItem"><WechatOutlined  /> Dịch vụ</Menu.Item>
            <Menu.Item className="menuItem"><AreaChartOutlined  /> Cấp số</Menu.Item>
            <Menu.Item className="menuItem"><SettingOutlined  /> Báo cáo</Menu.Item>
            <Menu.SubMenu title="Cài đặt hệ thống">
              <Menu.Item>item 3</Menu.Item>
              <Menu.Item>item 3</Menu.Item>
              <Menu.Item>item 3</Menu.Item>
            </Menu.SubMenu>
          </Menu>;
        </div>

        <div className="btn-signout">
          <Button text="Sign out" onClick={logoutClickHandler} />
        </div>
      </div>
    </>
  );
}

export default SideBar;











