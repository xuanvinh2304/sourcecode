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
          <p>Thiết bị</p> <RightOutlined /> <p>Danh sách thiết bị</p>

          <div className="avatar-device">
          <BellOutlined className="avatar-device-icon"/>
          <img src={avatar} alt="avatar-device-img" />
          <div className="">
            <p className="avatar-title">Xin chào</p>
            <p className="avatar-title">Lê Quỳnh Ái Vân</p>
          </div>
        </div>
        </div>
        <p>Danh sách thiết bị</p> 

        <div className="devicemenu-menu">
          <div className="menu--active-state-1">
            <p>Trạng thái hoạt động</p>
            <Select
              labelInValue
              defaultValue={{ value: 'lucy' }}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="jack">Tất cả</Option>
              <Option value="lucy">Hoạt động</Option>
              <Option value="lucy">Ngưng hoạt động</Option>
            </Select>
          </div>

          <div className="menu--active-state-2">
            <p>Trạng thái hoạt động</p>
            <Select
              labelInValue
              defaultValue={{ value: 'lucy' }}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="jack">Jack (100)</Option>
              <Option value="lucy">Lucy (101)</Option>
              <Option value="lucy">Lucy (101)</Option>
            </Select>
          </div>

          <div className="menu--active-search">
            <p>Trạng thái hoạt động</p>
            <Space direction="vertical">
              <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
            </Space>
          </div>

        </div>
      </div> 

    </>
  );
}

export default DeviceMenu;