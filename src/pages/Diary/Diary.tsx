import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import SideBar from '../Device/components/SideBar/SideBar';
import DiaryHeader from '../Diary/components/DiaryHeader/DiaryHeader';
import DiaryTable from '../Diary/components/DiaryTable/DiaryTable';
import "./Diary.css";
import { LoadDuLieu } from '../../store/actions/nhatKiNguoiDungAction';


const Diary: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(LoadDuLieu());
    }, [])

  const {nhatKiNguoiDungList} = useSelector((state: RootState) => state.nhatKiNguoiDung);

  return(
    <>
      <div className="diary-container">
        <SideBar />
        <div className="diary-container-child">
          <DiaryHeader />
          <div className="">
            <DiaryTable nhatKiNguoiDungList={nhatKiNguoiDungList} />
          </div>
        </div>

      </div>
      
    </>
  );
}

export default Diary;