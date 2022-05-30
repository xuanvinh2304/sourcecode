import React, { FC } from "react";
// import { RadialBar } from '@antv/g2plot';
import "./RightBar.css";
import { BellOutlined } from '@ant-design/icons';
import avatar from "../../../../assets/images/avatar.png";


const RightBar: FC = () => {

  const data = [
    {
      name: 'X6',
      star: 297,
    },
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

  const config = {
    data,
    xField: 'name',
    yField: 'star',
    // maxAngle: 90, //最大旋转角度,
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      
      },
    },
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

        <div>

        </div>
      </div>
    </>
  );
}

export default RightBar;