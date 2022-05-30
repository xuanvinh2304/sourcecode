import React, { FC } from "react";
import "./DeviceDetailsTable.css";
import { Input, Select } from 'antd';
import Button from '../../../../components/UI/Button';
import { useHistory } from "react-router-dom";

const { Option } = Select;
function handleChange(value: any) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

const DeviceDetailsTable: FC = () => {
  const history = useHistory();

  return (
    <>
      <div className="add-device-table">
        <p className="add-device-table--title">Thông tin thiết bị</p>
        <div className="add-device-table__all">
          <div className="add-device-table__all-1">
            <p>Mã thiết bị:</p> 
            <p>Tên thiết bị:</p> 
            <p>Địa chỉ IP:</p> 
          </div> 

          <div className="add-device-table__all-2">
            <p>Loại thiết bị:</p> 
            <p>Tên đăng nhập:</p>
            <p>Mật khẩu:</p> 
          </div>
        </div>
        
        <div className="add-device-table__child">
          <p>Dịch vụ sử dụng:</p> 
        </div>
      </div>
    </>
  );
}

export default DeviceDetailsTable;