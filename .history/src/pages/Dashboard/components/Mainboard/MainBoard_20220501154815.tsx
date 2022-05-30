import React, { FC, useState, useEffect } from "react";
import "./MainBoard.css";
import ReactDOM from 'react-dom';
import { TinyArea } from '@ant-design/plots';

const MainBoard: FC = () => {

  return (
    <>
      <div className="mainboard-container">
        <p>DashBroad</p>

        <div className="featured">
          <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,415</span>
              <span className="featuredMoneyRate">
                {/* -11.4 <ArrowDownward  className="featuredIcon negative"/> */}
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$4,415</span>
              <span className="featuredMoneyRate">
                {/* -1.4 <ArrowDownward className="featuredIcon negative"/> */}
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,225</span>
              <span className="featuredMoneyRate">
                {/* +2.4 <ArrowUpward className="featuredIcon"/> */}
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
        </div>
      </div>
    </>
  );

  const DemoTinyArea = () => {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
  ];
  const config = {
    height: 60,
    autoFit: false,
    data,
    smooth: true,
    areaStyle: {
      fill: '#d6e3fd',
    },
  };
  return <TinyArea {...config} />;
};

ReactDOM.render(<DemoTinyArea />, document.getElementById('container'));
}

export default MainBoard;