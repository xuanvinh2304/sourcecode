import React, { FC } from "react";
// import { RadialBar } from '@antv/g2plot';
import "./RightBar.css";

const RightBar: FC = () => {

  // const data = [
  //   { name: 'F2', star: 7346 },
  //   { name: 'G2', star: 10178 },
  // ];

  // const bar = new RadialBar('container', {
  //   data,
  //   xField: 'name',
  //   yField: 'star',
  //   // maxAngle: 90,
  //   radius: 0.8,
  //   innerRadius: 0.2,
  //   tooltip: {
  //     formatter: (datum) => {
  //       return { name: 'start', value: datum.star };
  //     },
  //   },
  // });
  // bar.render();

  return (
    <>
      <div className="rightbar-container">
        <div>

        </div>

        <div>
          <p className="overview">Tổng quan</p>
        </div>
      </div>
    </>
  );
}

export default RightBar;