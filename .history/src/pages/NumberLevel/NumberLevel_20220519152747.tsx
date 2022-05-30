import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import ServicedHeader from '../Serviced/components/ServicedHeader/ServicedHeader';
import ServicedTable from '../Serviced/components/ServicedTable/ServicedTable';
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
          <ServicedHeader />
          <div className="">
            <ServicedTable />
          </div>
        </div>

      </div>
      
    </>
  );
}

export default NumberLevel;