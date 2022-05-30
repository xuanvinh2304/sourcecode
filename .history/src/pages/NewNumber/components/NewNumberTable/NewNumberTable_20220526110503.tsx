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
              <Option value="" disabled selected hidden>Dịch vụ</Option>
              <Option value="all">Khám tim mạch</Option>
              <Option value="on">Khám sản - Phụ khoa</Option>
              <Option value="off">Khám răng hàm mặt</Option>
              <Option value="off">Khám tai mũi họng</Option>
            </Select> 
            <div className="new-number-table-btn">
              <Button text={"Hủy bỏ"} className="mt-5 add-device-cancel" type="submit" onClick={() => history.push('/numberlevel')} />
              <Button text={"In số"} className="btn-signin mt-5" type="submit" />
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default NewNumberTable;