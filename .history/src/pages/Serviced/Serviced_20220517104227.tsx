import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import ServicedMenu from '../Serviced/components/ServicedMenu/ServicedMenu';
import ServicedTable from '../Serviced/components/ServicedTable/ServicedTable';
import "./Serviced.css";

const Serviced: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <>
      <div className="serviced-container">
        <SideBar />
        <div className="">
          <ServicedMenu />
          <div className="">
            <ServicedTable />
          </div>
        </div>

      </div>
      
    </>
  );
}

export default Serviced;