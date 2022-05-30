import React, { FC, Fragment } from "react";
import { useHistory } from "react-router-dom";
import "./NewNumberTable.css";
import Button from '../../../../components/UI/Button';
import { Select, Input, Space } from 'antd';

const { Option } = Select;
function handleChange(value: any) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

const NewNumberTable: FC = () => {
  const history = useHistory();
  
  return (
    <>
      <div className="reporttable-container">
        <div className="newnumber-table">
          <div>
            <p>Cấp số mới</p>
            <p>Dịch vụ khách hàng lựa chọn</p>
            <Select 
              labelInValue
              defaultValue=""
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="" disabled selected hidden>Chọn loại dịch vụ</Option>
              <Option value="all">Khám tim mạch</Option>
              <Option value="on">Khám sản - Phụ khoa</Option>
              <Option value="off">Khám răng hàm mặt</Option>
              <Option value="off">Khám tai mũi họng</Option>
            </Select>
            <div className="add-device-table-btn">
            <Button text={"Hủy bỏ"} className="mt-5 add-device-cancel" type="submit" onClick={() => history.push('/device')} />
            <Button text={"Thêm thiết bị"} className="btn-signin mt-5" type="submit" />
      </div> 
          </div>
        </div>
      </div> 
    </>
  );
}

export default NewNumberTable;