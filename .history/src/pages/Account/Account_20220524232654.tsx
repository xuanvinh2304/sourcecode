import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Message from '../../components/UI/Message';
// import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import AccountHeader from '../Account/components/AccountHeader/AccountHeader';
import AccountTable from '../Account/components/AccountTable/AccountTable';
import "./Account.css";
import { LoadDuLieu } from '../../store/actions/quanLiTaiKhoanAction';


const Account: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(LoadDuLieu());
    }, [])

  const {quanLiTaiKhoanList} = useSelector((state: RootState) => state.quanLiTaiKhoan);

  return(
    <>
      <div className="account-container">
        <SideBar />
        <div className="account-container-child">
          <AccountHeader />
          <div className="">
            <AccountTable quanLiTaiKhoanList={quanLiTaiKhoanList} />
          </div>
        </div>

      </div>
      
    </>
  );
}

export default Account;