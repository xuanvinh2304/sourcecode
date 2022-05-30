import React, { FC, useState } from "react";
import "./RightBar.css";
import { BellOutlined } from '@ant-design/icons';
import avatar from "../../../../assets/images/avatar.png";
import ReactDOM from 'react-dom';
import { RingProgress } from '@ant-design/plots';
import { TableOutlined, DesktopOutlined, WechatOutlined } from '@ant-design/icons';
import Calendar from 'react-calendar';

const RightBar: FC = () => {
  const [value, onChange] = useState(new Date());

  const config = {
    height: 70,
    width: 70,
    autoFit: false,
    percent: 0.7,
    color: ['#5B8FF9', '#E8EDF3'],
  };

  return (
    <>
      <div className="rightbar-container">
        <div className="avatar">
          <BellOutlined className="avatar-icon"/>
          <img src={avatar} alt="avatar-img" />
          <div>
            <p className="avatar-title">Xin chào</p>
            <p className="avatar-title">Lê Quỳnh Ái Vân</p>
          </div>
        </div>

        <div>
          <p className="overview">Tổng quan</p>
        </div>

        <div className="table1">
          <RingProgress {...config} />
          <div className="table1__item-1">
            <p className="table1__item-1--number">4.221</p>
            <p className="table1__item-1--icon">
              <DesktopOutlined /> Thiết bị
            </p>
          </div>
          <div className="table1__item-2">
            <p>Đang hoạt động</p>
            <p>Ngưng hoạt động</p>
          </div>
          <div className="table1__item-3">
            <p>3.799</p>
            <p>422</p>
          </div>
        </div>

        <div className="table2">
          <RingProgress {...config} />
          <div className="table2__item-1">
            <p className="table2__item-1--number">276</p>
            <p className="table2__item-1--icon">
              <TableOutlined /> Dịch vụ
            </p>
          </div>
          <div className="table2__item-2">
            <p>Đang hoạt động</p>
            <p>Ngưng hoạt động</p>
          </div>
          <div className="table2__item-3">
            <p>210</p>
            <p>66</p>
          </div>
        </div>

        <div className="table3">
          <RingProgress {...config} />
          <div className="table3__item-1">
            <p className="table3__item-1--number">4.221</p>
            <p className="table3__item-1--icon">
              <WechatOutlined /> Cấp số
            </p>
          </div>
          <div className="table3__item-2">
            <p>Đã sử dụng</p>
            <p>Đang chờ</p>
            <p>Bỏ qua</p>
          </div>
          <div className="table3__item-3">
            <p>3.799</p>
            <p>422</p>
            <p>32</p>
          </div>
        </div>

        <div className="calendar">
          <Calendar onChange={onChange} value={value} />
        </div>

      </div>
    </>
  );
}

export default RightBar;