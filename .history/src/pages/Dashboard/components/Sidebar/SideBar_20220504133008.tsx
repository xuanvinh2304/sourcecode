import React from "react";
import { Menu, Switch, MenuProps } from 'antd';
import { MailOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>[number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  theme?: 'light' | 'dark',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    theme,
  } as MenuItem;
}

const SubMenuTheme = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [current, setCurrent] = React.useState('1');

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
  };

  const items: MenuItem[] = [
    getItem(
      'Navigation One',
      'sub1',
      <MailOutlined />,
      [getItem('Option 1', '1'), getItem('Option 2', '2'), getItem('Option 3', '3')],
      theme,
    ),
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
  ];

  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="vertical"
        theme="dark"
      />
    </>
  );
};

export default () => <SubMenuTheme />;
















// import { NavLink, useHistory } from 'react-router-dom';
// import logo from "../../../../assets/images/logo.png";
// import "./SideBar.css";
// import { TableOutlined, DesktopOutlined, WechatOutlined, ApartmentOutlined, AreaChartOutlined, SettingOutlined, MoreOutlined } from '@ant-design/icons';

// const SideBar: FC = () => {
//   const history = useHistory();

//   return (
//     <>
//       <div className="sidebar-container">
//         <div className="logo-1">
//           <img src={logo} alt="logo" />
//         </div>

//         <div className="menu">
//           <ul>
//             <li className="menuItem"><TableOutlined /> 
//               <NavLink to="/" className="active-link">
//                 DashBroad
//               </NavLink>
//             </li>
//             <li className="menuItem" onClick={() => history.push('/device')}><DesktopOutlined /> Thi???t b???</li>
//             <li className="menuItem"><WechatOutlined /> D???ch v???</li>
//             <li className="menuItem"><ApartmentOutlined /> C???p s???</li>
//             <li className="menuItem"><AreaChartOutlined /> B??o c??o</li>
//             <div className="menuItem-hover">
//               <li className="menuItem"><SettingOutlined /> C??i ?????t h??? th???ng <MoreOutlined /></li>
//               <ul className="sub-menu">   
//                 <li className="sub-menuItem">Qu???n l?? vai tr??</li>
//                 <li className="sub-menuItem">Qu???n l?? t??i kho???n</li>
//                 <li className="sub-menuItem">Nh???t k?? ng?????i d??ng</li>
//               </ul>
//             </div>
//           </ul>

//         </div>
//       </div>
//     </>
//   );
// }

// export default SideBar;
