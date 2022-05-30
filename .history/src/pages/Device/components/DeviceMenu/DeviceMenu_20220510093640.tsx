import React, { FC } from "react";
// import { Table } from 'antd';
import "./DeviceMenu.css";
import avatar from "../../../../assets/images/avatar.png";
import { Select } from 'antd';
import {  RightOutlined, BellOutlined, MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined, LinkOutlined } from '@ant-design/icons';

const { Option } = Select;

function handleChange(value) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}
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
          <div className="menu--active-state">
            <Select
              labelInValue
              defaultValue={{ value: 'lucy' }}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="jack">Jack (100)</Option>
              <Option value="lucy">Lucy (101)</Option>
            </Select>
          </div>
        </div>
      </div> 

    </>
  );
}

export default DeviceMenu;