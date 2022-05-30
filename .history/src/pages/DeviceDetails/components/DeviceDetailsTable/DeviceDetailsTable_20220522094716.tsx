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
            <p>Mã thiết bị: </p> 
            <p>Tên thiết bị: </p> 
            <p>Địa chỉ IP: </p> 
          </div> 

          <div className="add-device-table__all-2">
            <p>Loại thiết bị: 
              <span className="color-red">*</span>
            </p> 
            <Select
              labelInValue
              defaultValue={{ value: 'all' }}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="all">Kiosk</Option>
              <Option value="on">Display counter</Option>
            </Select>
            <p>Tên đăng nhập: 
              <span className="color-red">*</span>
            </p>
            <Input className="add-device__input-hover" placeholder="Nhập tài khoải" />
            <p>Mật khẩu: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover"  placeholder="Nhập mật khẩu" />
          </div>
        </div>
        <div className="add-device-table__child">
          <p>Dịch vụ sử dụng: 
            <span className="color-red">*</span>
          </p>
          <Input className="input-last add-device__input-hover" placeholder="Nhập dịch vụ sử dụng" />
          <span className="color-red">*</span>Là trường thông tin bắt buộc 
        </div>
      </div>
    </>
  );
}

export default DeviceDetailsTable;