import React, { FC } from "react";
// import { Table } from 'antd';
import "./AddDeviceTable.css";
import UserHeader from "../../../../components/UserHeader/UserHeader";
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

const AddDeviceTable: FC = () => {

  return (
    <>
      <div className="add-device-table">
        
      </div> 
    </>
  );
}

export default AddDeviceTable;