import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewNumberTable.css";
import Button from '../../../../components/UI/Button';
import { Select, Input, Space, Modal } from 'antd';

const { Option } = Select;
function handleChange(value: any) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

const NewNumberTable: FC = () => {
  const history = useHistory();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  return (
    <>
      <div className="reporttable-container">
        <div className="newnumber-table">
          <div>
            <div className="newnumber-table-child">
              <p className="newnumber-table-title__1">Cấp số mới</p>
              <p className="newnumber-table-title__2">Dịch vụ khách hàng lựa chọn</p>
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
            </div> 
            <div className="new-number-table-btn">
              <Button text={"Hủy bỏ"} className="mt-5 add-device-cancel" type="submit" onClick={() => history.push('/numberlevel')} />
              <Button type="submit" onClick={showModal} text={"In số"} className="btn-signin mt-5 btncapnhatngaysudung" />
              <Modal title="Số thứ tự được cấp" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} width={550}>
                <p style={{ fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: 800, fontSize: '56px', lineHeight: '60px', color: '#FF7506' }}>2001201</p>
                <p>DV: Khám răng hàm mặt(tại quầy số 1)</p>
                <div style={{ background: '#FF9138'}}>
                  <p>Thời gian cấp: 09:30 11/10/2021</p>
                  <p>Hạn sử dụng: 17:30 11/10/2021</p>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default NewNumberTable;