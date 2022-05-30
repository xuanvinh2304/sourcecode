import React, { FC } from "react";
import "./AddDeviceTable.css";
import { Select, Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const AddDeviceTable: FC = () => {

  return (
    <>
      <div className="add-device-table">
        <p className="add-device-table--title">Thông tin thiết bị</p>
        <div className="add-device-table__all">
          <div>
            <p>Mã thiết bị</p>
            <Input placeholder="Nhập mã thiết bị" />
            <p>Tên thiết bị</p>
            <Input placeholder="Nhập tên thiết bị" />
            <p>Địa chỉ IP</p>
            <Input placeholder="Nhập địa chỉ IP" />
          </div>
          <div>
            <p>Loại thiết bị</p>
            <Input placeholder="Chọn loại thiết bị" />
            <p>Tên đăng nhập</p>
            <Input placeholder="Nhập tài khoải" />
            <p>Mật khẩu</p>
            <Input placeholder="Nhập mật khẩu" />
          </div>
        </div>
        <p>Dịch vụ sử dụng</p>
        <Input placeholder="Nhập dịch vụ sử dụng" />
        * Là trường thông tin bắt buộc 
      </div> 
    </>
  );
}

export default AddDeviceTable;