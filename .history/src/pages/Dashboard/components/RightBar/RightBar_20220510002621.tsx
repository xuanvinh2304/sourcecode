import React, { FC, useState } from "react";
import "./RightBar.css";
import { BellOutlined } from '@ant-design/icons';
import avatar from "../../../../assets/images/avatar.png";
import { RadialBar } from '@ant-design/plots';
import { TableOutlined, DesktopOutlined, WechatOutlined } from '@ant-design/icons';
import Calendar from 'react-calendar';

const RightBar: FC = () => {
  const [value, onChange] = useState(new Date());

  const data = [
    // {
    //   name: 'G',
    //   star: 506,
    // },
    // {
    //   name: 'AVA',
    //   star: 805,
    // },
    // {
    //   name: 'G2Plot',
    //   star: 1478,
    // },
    // {
    //   name: 'L7',
    //   star: 2029,
    // },
    // {
    //   name: 'G6',
    //   star: 7100,
    // },
    {
      name: 'F2',
      star: 7346,
    },
    {
      name: 'G2',
      star: 10178,
    },
  ];

  const config: any = {
    data,
    xField: 'name',
    yField: 'star',
    maxAngle: 350,
    radius: 0.4,
    innerRadius: 0.8,
    tooltip: {
      formatter: () => {
        return {
          name: 'star',
        };
      },
    },
    colorField: 'star',
    // eslint-disable-next-line no-empty-pattern
    color: ({ }) => {
      return '#FF7506';
    },
    barBackground: {},
    barStyle: {
      lineCap: 'round',
    },
    annotations: [
      {
        type: 'html',
        position: ['50%', '50%'],
      },
    ],
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
          <RadialBar {...config} style={{ width: '80px', height: '80px' }} />
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
          <RadialBar {...config} style={{ width: '80px', height: '80px' }} />
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
          <RadialBar {...config} style={{ width: '80px', height: '80px' }} />
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