import React, { FC } from "react";
import "./DeviceDetailsTable.css";
import { Input, Select } from 'antd';
import Button from '../../../../components/UI/Button';
import { useHistory } from "react-router-dom";

const { Option } = Select;
function handleChange(value: any) {
  console.log(value); 
}

const DeviceDetailsTable: FC = () => {
  const history = useHistory();

  return (
    <>
      <div className="add-device-table">
        <p className="add-device-table--title">Thông tin thiết bị</p>
        <div className="add-device-table__all">
          <div className="add-device-table__all-1">
            <p className="details-margin">Mã thiết bị:</p> 
            <p className="details-margin">Tên thiết bị:</p> 
            <p className="details-margin">Địa chỉ IP:</p> 
          </div> 

          <div className="add-device-table__all-2">
            <p className="details-margin">Loại thiết bị:</p> 
            <p className="details-margin">Tên đăng nhập:</p>
            <p className="details-margin">Mật khẩu:</p> 
          </div>
        </div>

        <div className="add-device-table__child">
          <p className="details-margin">Dịch vụ sử dụng:</p> 
        </div>
      </div>
    </>
  );
}

export default DeviceDetailsTable;