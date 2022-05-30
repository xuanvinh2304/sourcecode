import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components';
// import Message from '../../components/UI/Message';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar';

const Dashboard: FC = () => {
  const { success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const logoutClickHandler = () => {
    dispatch(signout());
  }

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <>
      <section className="section">
        <div className="container">
        <Button text="Sign out" onClick={logoutClickHandler} />
        </div>
        
        <div>
          <Sidebar />
        </div>
      </section>
    </>
  );
}

export default Dashboard;