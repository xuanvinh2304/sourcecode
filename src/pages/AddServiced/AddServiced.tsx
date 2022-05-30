import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import AddServicedHeader from './components/AddServicedHeader/AddServicedHeader';
import AddServicedTable from './components/AddServicedTable/AddServicedTable';
import "./AddServiced.css";

const AddServiced: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      // dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <>
      <div className="add-device-container">
        <SideBar />
        <div className="add-device-child">
          <AddServicedHeader />
          <div className="">
            <AddServicedTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddServiced;