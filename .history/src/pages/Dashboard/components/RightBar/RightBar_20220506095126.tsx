import React, { FC } from "react";
import "./RightBar.css";
import { BellOutlined } from '@ant-design/icons';
import avatar from "../../../../assets/images/avatar.png";
import { RadialBar } from '@ant-design/plots';
import { TableOutlined, DesktopOutlined, WechatOutlined } from '@ant-design/icons';
// import { Calendar } from 'antd';

const RightBar: FC = () => {

  const data = [

    {
      name: 'G',
      star: 506,
    },
    {
      name: 'AVA',
      star: 805,
    },
    {
      name: 'G2Plot',
      star: 1478,
    },
    {
      name: 'L7',
      star: 2029,
    },
    {
      name: 'G6',
      star: 7100,
    },
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
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      formatter: () => {
        return {
          name: 'star',
        };
      },
    },
    colorField: 'star',
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

  // function onPanelChange(value: any, mode: any) {
  //   console.log(value, mode);
  // }
  
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

        <div className="rightbar-table">
          <RadialBar {...config} style={{ width: '80px', height: '80px' }} />
          <div className="table-item">
            <p className="table-item__text">4.221</p>
            <p className="table-item__icon">
              <DesktopOutlined /> Thiết bị
            </p>
          </div>
          <div>
            <p>Đang hoạt động</p>
            <p>Ngưng hoạt động</p>
          </div>
          <div>
            <p>3.799</p>
            <p>422</p>
          </div>
        </div>

        {/* <div className="rightbar-table">
          <RadialBar {...config} />
          <p>4.221</p>
          <TableOutlined /> <p>Dịch vụ</p>
        </div>

        <div className="rightbar-table">
          <RadialBar {...config} />
          <p>4.221</p>
          <WechatOutlined /> <p>Cấp số</p>
        </div> */}

        {/* <div className="site-calendar-demo-card">
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div> */}

      </div>
    </>
  );
}

export default RightBar;