import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import RoleHeader from '../Device/components/RoleHeader/RoleHeader';
import RoleTable from '../Device/components/RoleTable/RoleTable';
import "./Role.css";

const Role: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      // dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <>
      <div className="role-container">
        <SideBar />
        <div className="report-container-child">
          <RoleHeader />
          <div className="">
            <RoleTable />
          </div>
        </div>

      </div>
      
    </>
  );
}

export default Role;