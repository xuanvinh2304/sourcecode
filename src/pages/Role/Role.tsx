import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import RoleHeader from '../Role/components/RoleHeader/RoleHeader';
import RoleTable from '../Role/components/RoleTable/RoleTable';
import "./Role.css";
import { LoadDuLieu } from '../../store/actions/quanLiVaiTroAction';


const Role: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(LoadDuLieu());
    }, [])

  const {quanLiVaiTroList} = useSelector((state: RootState) => state.quanLiVaiTro);

  return(
    <>
      <div className="role-container">
        <SideBar />
        <div className="report-container-child">
          <RoleHeader />
          <div className="">
            <RoleTable quanLiVaiTroList={quanLiVaiTroList} />
          </div>
        </div>

      </div>
      
    </>
  );
}

export default Role;