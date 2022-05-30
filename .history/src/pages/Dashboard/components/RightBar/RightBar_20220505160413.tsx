import React, { FC } from "react";
import "./RightBar.css";
import { BellOutlined } from '@ant-design/icons';
import avatar from "../../../../assets/images/avatar.png";

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
    maxAngle: 270,
    radius: 0.8,
    innerRadius: 0.2,
    barStyle: {
      lineCap: 'round',
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