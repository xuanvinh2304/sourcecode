import React, { FC } from "react";
// import { Table } from 'antd';
import "./DeviceMenu.css";
import avatar from "../../../../assets/images/avatar.png";
import { Select, Input, Space } from 'antd';
import {  RightOutlined, BellOutlined, AudioOutlined, MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined, LinkOutlined } from '@ant-design/icons';

const { Option } = Select;
function handleChange(value: any) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value: any) => console.log(value);

const DeviceMenu: FC = () => {

  return (
    <>
      <div className="devicemenu-container">
        <div className="devicemenu-title">
          <p className="devicemenu-title--1">Thiết bị</p> <RightOutlined /> 
          <p className="devicemenu-title--2">Danh sách thiết bị</p>

          <div className="avatar-device">
            <BellOutlined className="avatar-device-icon"/>
            <img src={avatar} alt="avatar-device-img" />
            <div className="">
              <p className="avatar-title">Xin chào</p>
              <p className="avatar-title">Lê Quỳnh Ái Vân</p>
            </div>
          </div>
        </div>
        <p className="devicemenu-title--2">Danh sách thiết bị</p> 

        <div className="devicemenu-option">
          <div className="menu--active-state-1">
            <p className="devicemenu-option-sub">Trạng thái hoạt động</p>
            <Select
              labelInValue
              defaultValue={{ value: 'all' }}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="all">Tất cả</Option>
              <Option value="on">Hoạt động</Option>
              <Option value="off">Ngưng hoạt động</Option>
            </Select>
          </div>

          <div className="menu--active-state-2">
            <p>Trạng thái kết nối</p>
            <Select
              labelInValue
              defaultValue={{ value: 'all' }}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="all">Tất cả</Option>
              <Option value="connect">Kết nối</Option>
              <Option value="Disconnected">Mất kết nối</Option>
            </Select>
          </div>

          <div className="menu--active-search">
            <p>Từ khóa</p>
            <Space direction="vertical">
              <Search placeholder="Nhập từ khóa" onSearch={onSearch} style={{ width: 200 }} />
            </Space>
          </div>

        </div>
      </div> 

    </>
  );
}

export default DeviceMenu;