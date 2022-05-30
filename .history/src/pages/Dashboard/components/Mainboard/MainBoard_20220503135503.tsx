import React, { FC } from "react";
import "./MainBoard.css";
import { Line } from '@ant-design/charts';

const MainBoard: FC = () => {

  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  return (
    <>
      <div className="mainboard-container">
        <p>DashBroad</p>

        <div className="featured">
          <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">2,415</span>
              <span className="featuredMoneyRate">
                {/* -11.4 <ArrowDownward  className="featuredIcon negative"/> */}
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">4,415</span>
              <span className="featuredMoneyRate">
                {/* -1.4 <ArrowDownward className="featuredIcon negative"/> */}
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">2,225</span>
              <span className="featuredMoneyRate">
                {/* +2.4 <ArrowUpward className="featuredIcon"/> */}
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
          
        </div>

        <div>
          <Line {...config} />;
        </div>
        
      </div>
    </>
  );
}

export default MainBoard;