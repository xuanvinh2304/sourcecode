import React from 'react';
import { TableOutlined, DesktopOutlined, WechatOutlined, ApartmentOutlined, AreaChartOutlined, SettingOutlined, MoreOutlined } from '@ant-design/icons';

export const SideBarData = [
  {
    title: "DashBroad",
    icon: <TableOutlined />,
    link: '/dashboard'
  },
  {
    title: "Thiết bị",
    icon: <DesktopOutlined />,
    link: '/dashboard'
  },
  {
    title: "Dịch vụ",
    icon: <WechatOutlined />,
    link: '/device'
  },
  {
    title: "Cấp số",
    icon: <ApartmentOutlined />,
    link: '/'
  },
  {
    title: "Báo cáo",
    icon: <AreaChartOutlined />,
    link: '/'
  },
  {
    title: "Cài đặt hệ thống",
    icon: <SettingOutlined />,
    link: '/'
  }
]