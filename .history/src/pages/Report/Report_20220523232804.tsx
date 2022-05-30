import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import ReportHeader from '../Report/components/ReportHeader/ReportHeader';
import ReportTable from '../Report/components/ReportTable/ReportTable';
import "./Report.css";

const Report: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      // dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <>
      <div className="report-container">
        <SideBar />
        <div className="report-container-child">
          <ReportHeader />
          <div className="">
            {/* <ReportTable /> */}
          </div>
        </div>

      </div>
      
    </>
  );
}

export default Report;