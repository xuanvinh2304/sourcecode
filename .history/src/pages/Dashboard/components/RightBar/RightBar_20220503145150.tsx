import React, { FC } from "react";
import { RingProgress } from '@antv/g2plot';
import "./RightBar.css";

const RightBar: FC = () => {

  const ringProgress = new RingProgress('container', {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.7,
    color: ['#5B8FF9', '#E8EDF3'],
  });
  
  ringProgress.render();

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