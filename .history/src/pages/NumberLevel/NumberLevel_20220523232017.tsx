import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import NumberLevelHeader from '../NumberLevel/components/NumberLevelHeader/NumberLevelHeader';
import NumberLevelTable from '../NumberLevel/components/NumberLevelTable/NumberLevelTable';
import "./NumberLevel.css";

const NumberLevel: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      // dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <>
      <div className="numberlevel-container">
        <SideBar />
        <div className="">
          <NumberLevelHeader />
          <div className="">
            {/* <NumberLevelTable /> */}
          </div>
        </div>

      </div>
      
    </>
  );
}

export default NumberLevel;