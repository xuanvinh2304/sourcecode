import React, { FC } from "react";
import { RadialBar } from '@antv/g2plot';
import "./RightBar.css";

const RightBar: FC = () => {

  const data = [
    { name: 'X6', star: 297 },
    { name: 'G', star: 506 },
    { name: 'AVA', star: 805 },
    { name: 'G2Plot', star: 1478 },
    { name: 'L7', star: 2029 },
    { name: 'G6', star: 7100 },
    { name: 'F2', star: 7346 },
    { name: 'G2', star: 10178 },
  ];

  const bar = new RadialBar('container', {
    data,
    xField: 'name',
    yField: 'star',
    maxAngle: 350,
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      formatter: (datum) => {
        return { name: 'star数', value: datum.star };
      },
    },
    colorField: 'star',
    color: ({ star }) => {
      if (star > 10000) {
        return '#6349ec';
      } else if (star > 1000) {
        return '#ff9300';
      }
      return '#ff93a7';
    },
    barBackground: {},
    barStyle: { lineCap: 'round' },
  });
    bar.render();

  
  return (
    <>
      <div className="rightbar-container">
        <div>

        </div>

        <div>
          <p>Tổng quan</p>

        </div>
      </div>
    </>
  );
}

export default RightBar;