import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import "./AddServicedHeader.css";
import UserHeader from "../../../../components/UserHeader/UserHeader";
import { Select, Input } from 'antd';
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

const AddServicedHeader: FC = () => {
  const history = useHistory();

  return (
    <>
      <div className="add-device-header">
        <div className="add-device-title">
          <p className="add-device-title--1">Thiết bị</p> <RightOutlined /> 
          <p onClick={() => history.push('/device')} className="add-device-title--2">Danh sách thiết bị</p> <RightOutlined /> 
          <p className="add-device-title--3">Thêm thiết bị</p>
          <UserHeader />
        </div>
        <p className="add-device-title--3">Quản lí thiết bị</p> 
      </div>
    </>
  );
}

export default AddServicedHeader;