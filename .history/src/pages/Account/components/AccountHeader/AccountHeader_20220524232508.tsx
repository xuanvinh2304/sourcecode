import React, { FC } from "react";
import "./AccountHeader.css";
import { Select, Input, Space } from 'antd';
import UserHeader from "../../../../components/UserHeader/UserHeader";
import {  RightOutlined, AudioOutlined } from '@ant-design/icons';

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

const AccountHeader: FC = () => {

  return (
    <>
      <div className="deviceheader-container">
        <div className="deviceheader-title">
          <p className="deviceheader-title--1">Thiết bị</p> <RightOutlined /> 
          <p className="deviceheader-title--2">Danh sách thiết bị</p>
          <UserHeader />
        </div>
        
        <p className="deviceheader-title--2">Danh sách thiết bị</p> 
        <div className="deviceheader-option">
          <div className="menu--active-state-1">
            <p className="deviceheader-option-sub">Trạng thái hoạt động</p>
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
            <p className="deviceheader-option-sub">Trạng thái kết nối</p>
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
            <p className="deviceheader-option-sub">Từ khóa</p>
            <Space direction="vertical">
              <Search placeholder="Nhập từ khóa" onSearch={onSearch} style={{ width: 200 }} />
            </Space>
          </div>

        </div>
      </div> 
    </>
  );
}

export default AccountHeader;