import React, { FC } from "react";
import "./AddDeviceTable.css";
import { Input, Select } from 'antd';
import Button from '../../../../components/UI/Button';

const { Option } = Select;
function handleChange(value: any) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

const AddDeviceTable: FC = () => {

  return (
    <>
      <div className="add-device-table">
        <p className="add-device-table--title">Thông tin thiết bị</p>
        <div className="add-device-table__all">
          <div className="add-device-table__all-1">
            <p>Mã thiết bị *</p>
            <Input placeholder="Nhập mã thiết bị" />
            <p>Tên thiết bị *</p>
            <Input placeholder="Nhập tên thiết bị" />
            <p>Địa chỉ IP *</p>
            <Input placeholder="Nhập địa chỉ IP" />
          </div>

          <div className="add-device-table__all-2">
            <p>Loại thiết bị *</p>
            <Select 
              labelInValue
              defaultValue={{ value: 'all' }}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="all">Kiosk</Option>
              <Option value="on">Display counter</Option>
            </Select>
            <p>Tên đăng nhập *</p>
            <Input placeholder="Nhập tài khoải" />
            <p>Mật khẩu *</p>
            <Input placeholder="Nhập mật khẩu" />
          </div>
        </div>
        <div className="add-device-table__child">
          <p>Dịch vụ sử dụng *</p>
          <Input placeholder="Nhập dịch vụ sử dụng" />
          * Là trường thông tin bắt buộc 
        </div>
      </div>

      <div className="add-device-table-btn">
        <Button text={"Hủy bỏ"} className="mt-5" type="submit" />
        <Button text={"Thêm thiết bị"} className="btn-signin mt-5" type="submit" />
      </div> 
    </>
  );
}

export default AddDeviceTable;