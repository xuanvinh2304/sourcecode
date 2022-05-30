import React, { FC } from "react";
// import { RadialBar } from '@antv/g2plot';
import "./RightBar.css";
import { BellOutlined } from '@ant-design/icons';
import avatar from "../../../../assets/images/avatar.png";
import { RadialBar } from '@ant-design/plots';

const RightBar: FC = () => {

  const data = [
    {
      name: 'G6',
      star: 7100,
    },
    {
      name: 'F2',
      star: 7346,
    }
  ];

  const config = {
    data,
    xField: 'name',
    yField: 'star',
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      
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
          <RadialBar {...config} />
        </div>
      </div>
    </>
  );
}

export default RightBar;