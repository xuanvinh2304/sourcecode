import React, { FC } from 'react';
import { useHistory, NavLink  } from 'react-router-dom';
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
          <NavLink to="#" className="menuItem" activeClassName="active"><TableOutlined /> DashBoard</NavLink>
          <NavLink onClick={() => history.push('/device')} to="/device" className="menuItem" activeClassName="active"><DesktopOutlined /> Thiết bị</NavLink>
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











// import { useHistory, NavLink  } from 'react-router-dom';
// import logo from "../../../../assets/images/logo.png";
// import "./SideBar.css";
// import { Menu, Button, MenuProps } from 'antd';
// import { AppstoreOutlined, MenuUnfoldOutlined, MenuFoldOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined } from '@ant-design/icons';
// import MenuItem from 'antd/lib/menu/MenuItem';

// type MenuItem = Required<MenuProps>['items'][number];
// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: 'group',
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   } as unknown as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('Option 3', '3', <ContainerOutlined />),
// ];

// const SideBar: FC = () => {
//   const [collapsed, setCollapsed] = React.useState(false);

//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <>
//       <div className="sidebar-container">
//         <div className="logo-1">
//           <img src={logo} alt="logo" />
//         </div>

//         <div className="menu">
//           <Menu
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['sub1']}
//           mode="inline"
//           theme="dark"
//           inlineCollapsed={collapsed}
//         />
//         </div>
//       </div>
//     </>
//   );
// }

// export default SideBar;