import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import NewNumberHeader from '../NewNumber/components/NewNumberHeader/NewNumberHeader';
import NewNumberTable from '../NewNumber/components/NewNumberTable/NewNumberTable';
import "./NewNumber.css";
import { LoadDuLieu } from '../../store/actions/nhatKiNguoiDungAction';


const NewNumber: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(LoadDuLieu());
    }, [])

  return(
    <>
      <div className="newnumber-container">
        <SideBar />
        <div className="newnumber-container-child">
          <NewNumberHeader />
          <div className="">
            <NewNumberTable />
          </div>
        </div>

      </div>
    </>
  );
}

export default NewNumber;