import React, { FC, useState, useEffect } from "react";
import "./MainBoard.css";
import { Area } from '@ant-design/plots';
import { Select } from 'antd';
import { CreditCardOutlined ,ScheduleOutlined, PhoneOutlined, StarOutlined } from '@ant-design/icons';

const { Option } = Select;
function handleChange(value: any) {
  console.log(value);
}

const MainBoard: FC = () => {

  const data = [
    {
      "timePeriod": "2006 Q3",
      "value": 1
    },
    {
      "timePeriod": "2006 Q4",
      "value": 1.08
    },
    {
      "timePeriod": "2007 Q1",
      "value": 1.17
    },
    {
      "timePeriod": "2007 Q2",
      "value": 1.26
    },
    {
      "timePeriod": "2007 Q3",
      "value": 1.34
    },
    {
      "timePeriod": "2007 Q4",
      "value": 1.41
    },
    {
      "timePeriod": "2008 Q1",
      "value": 1.52
    },
    {
      "timePeriod": "2008 Q2",
      "value": 1.67
    },
    {
      "timePeriod": "2008 Q3",
      "value": 1.84
    },
    {
      "timePeriod": "2008 Q4",
      "value": 2.07
    },
    {
      "timePeriod": "2009 Q1",
      "value": 2.39
    },
    {
      "timePeriod": "2009 Q2",
      "value": 2.71
    },
    {
      "timePeriod": "2009 Q3",
      "value": 3.03
    },
    {
      "timePeriod": "2009 Q4",
      "value": 3.33
    },
    {
      "timePeriod": "2010 Q1",
      "value": 3.5
    },
    {
      "timePeriod": "2010 Q2",
      "value": 3.37
    },
    {
      "timePeriod": "2010 Q3",
      "value": 3.15
    },
  ]

  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };

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
              <span className="featuredMoneyRate">
                -11.4 
              </span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              <ScheduleOutlined className="featuredIcon-2 negative"/> Số thứ tự đã sử dụng
            </span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">4,415</span>
              <span className="featuredMoneyRate">
                -1.4 
              </span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              <PhoneOutlined className="featuredIcon-3 negative"/> Số thứ tự đang chờ
            </span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">2,225</span>
              <span className="featuredMoneyRate">
                +2.4 
              </span>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              <StarOutlined className="featuredIcon-4 negative"/> Số thứ tự đã bỏ qua
            </span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">2,225</span>
              <span className="featuredMoneyRate">
                +2.4 
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
              <Select
                labelInValue
                defaultValue={{ value: 'all' }}
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="all">Ngày</Option>
                <Option value="connect">Tuần</Option>
                <Option value="Disconnected">Tháng</Option>
              </Select>
            </div>
          </div>
          
          <Area {...config} />
        </div>
      </div>
    </>
  );
}

export default MainBoard;

function asyncFetch() {
  throw new Error("Function not implemented.");
}
