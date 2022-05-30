import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import NumberLevelHeader from '../NumberLevel/components/NumberLevelHeader/NumberLevelHeader';
import NumberLevelTable from '../NumberLevel/components/NumberLevelTable/NumberLevelTable';
import "./NumberLevel.css";
import { LoadDuLieu } from '../../store/actions/capSoAction';


const NumberLevel: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(LoadDuLieu());
    }, [])

  const {capSoList} = useSelector((state: RootState) => state.capSo);

  return(
    <>
      <div className="numberlevel-container">
        <SideBar />
        <div className="numberlevel-container-child">
          <NumberLevelHeader />
          <div className="">
            <NumberLevelTable capSoList={capSoList} />
          </div>
        </div>

      </div>
      
    </>
  );
}

export default NumberLevel;