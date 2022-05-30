import React, { FC, Fragment } from "react";
import { useHistory } from "react-router-dom";
import "./NewNumberTable.css";
import { Select, Input, Space } from 'antd';
import { PlusOutlined  } from '@ant-design/icons';
import Button from '../../../../components/UI/Button';
import { Image } from "../../../../assets/variableImage";

const { Option } = Select;
function handleChange(value: any) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

const NewNumberTable: FC = () => {
  const history = useHistory();
  
  return (
    <>
      <div className="reporttable-container">
        <div>
          <p>Cấp số mới</p>
          <p>Dịch vụ khách hàng lựa chọn</p>
          <Select 
              labelInValue
              defaultValue={{ value: 'all' }}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="" disabled selected hidden>Chọn loại thiết bị</Option>
              <Option value="all">Tất cả</Option>
              <Option value="on">Hoạt động</Option>
              <Option value="off">Ngưng hoạt động</Option>
            </Select>
        </div>
      </div> 
    </>
  );
}

export default NewNumberTable;