import React, { FC, useState, useEffect } from "react";
import "./MainBoard.css";
import { Area } from '@ant-design/plots';
import { Select } from 'antd';
import MenuChart from '../MenuChart/MenuChart';
import { ArrowDownOutlined, ArrowUpOutlined, CreditCardOutlined ,ScheduleOutlined, PhoneOutlined, StarOutlined } from '@ant-design/icons';

const { Option } = Select;
function handleChange(value: any) {
  console.log(value); 
}  

const MainBoard: FC = () => {

  return (
    <>
      <div className="mainboard-container">
        <p className="mainboard-title">DashBroad</p>
        <p className="mainboard-subtitle">Biểu đồ cấp số</p>

        <div className="featured">
          <div className="featuredItem">
            <span className="featuredTitle">
              <CreditCardOutlined className="featuredIcon-1 negative"/> Số thự tự đã cấp
            </span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">2,415</span>
              <span className="featuredMoneyRate featuredMoneyRate-yellow">
                <span className="featuredMoneyRate-icon"><ArrowUpOutlined /></span>32.41%
              </span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              <ScheduleOutlined className="featuredIcon-2 negative"/> Số thứ tự đã sử dụng
            </span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">4,415</span>
              <span className="featuredMoneyRate featuredMoneyRate-pink">
                <span className="featuredMoneyRate-icon"><ArrowDownOutlined /></span>32.41% 
              </span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              <PhoneOutlined className="featuredIcon-3 negative"/> Số thứ tự đang chờ
            </span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">2,225</span>
              <span className="featuredMoneyRate featuredMoneyRate-yellow">
                <span className="featuredMoneyRate-icon"><ArrowUpOutlined /></span>56.41% 
              </span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              <StarOutlined className="featuredIcon-4 negative"/> Số thứ tự đã bỏ qua
            </span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">2,225</span>
              <span className="featuredMoneyRate featuredMoneyRate-pink">
                <span className="featuredMoneyRate-icon"><ArrowDownOutlined /></span>22.41%
              </span>
            </div>
          </div>
        </div>

        <div className="mainboard-table">
          <div className="mainboard-table__header">
            <div>
              <p className="mainboard-table--title">Bảng đồ thống kê theo ngày</p>
              <p className="mainboard-table--subtitle">Tháng 11/2021</p>
            </div>

            <div className="mainboard-table--right">
              <p className="mainboard-table--right-title">Xem theo</p>
              {/* <Select
                labelInValue
                defaultValue="Ngày"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="all">Ngày</Option>
                <Option value="connect">Tuần</Option>
                <Option value="Disconnected">Tháng</Option>
              </Select> */}
              <MenuChart />

            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default MainBoard;

function asyncFetch() {
  throw new Error("Function not implemented.");
}
