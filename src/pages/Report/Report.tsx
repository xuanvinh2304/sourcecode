import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import ReportHeader from '../Report/components/ReportHeader/ReportHeader';
import ReportTable from '../Report/components/ReportTable/ReportTable';
import "./Report.css";
import { LoadDuLieu } from '../../store/actions/baoCaoAction';


const Report: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(LoadDuLieu());
    }, [])

  const {baoCaoList} = useSelector((state: RootState) => state.baoCao);

  return(
    <>
      <div className="report-container">
        <SideBar />
        <div className="report-container-child">
          <ReportHeader />
          <div className="">
            <ReportTable baoCaoList={baoCaoList} />
          </div>
        </div>

      </div>
      
    </>
  );
}

export default Report;