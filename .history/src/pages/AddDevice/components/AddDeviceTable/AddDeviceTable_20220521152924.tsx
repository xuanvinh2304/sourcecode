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
            <p>Mã thiết bị</p>
            <Input placeholder="Nhập mã thiết bị" />
            <p>Mã thiết bị</p>
            <Input placeholder="Nhập mã thiết bị" />
          </div>
          <div>
            <p>Mã thiết bị</p>
            <Input placeholder="Nhập mã thiết bị" />
            <p>Mã thiết bị</p>
            <Input placeholder="Nhập mã thiết bị" />
            <p>Mã thiết bị</p>
            <Input placeholder="Nhập mã thiết bị" />
          </div>
        </div>
      </div> 
    </>
  );
}

export default AddDeviceTable;