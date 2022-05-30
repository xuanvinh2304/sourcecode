import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import ServicedHeader from '../Serviced/components/ServicedHeader/ServicedHeader';
import ServicedTable from '../Serviced/components/ServicedTable/ServicedTable';
import "./Serviced.css";
import { LoadDuLieu } from '../../store/actions/dichVuAction';

const Serviced: FC = () => {

  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(LoadDuLieu());
    }, [])

    const {dichVuList} = useSelector((state: RootState) => state.dichVu);

  return(
    <>
      <div className="serviced-container">
        <SideBar />
        <div className="serviced-container-child">
          <ServicedHeader />
          <div className="serviced-container-table">
            <ServicedTable dichVuList={dichVuList}/>
          </div>
        </div>

      </div>
      
    </>
  );
}

export default Serviced;