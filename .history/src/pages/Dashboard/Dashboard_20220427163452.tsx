import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Message from '../../components/UI/Message';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import Sidebar from '../../pages/';

const Dashboard: FC = () => {
  const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <>
      <section className="section">
        <div className="container">
          {needVerification && <Message type="success" msg="Please verify your email address." />}
          <h1 className="is-size-1">Welcome {user?.firstName}</h1>
        </div>
      </section>

      <div>
        <Sidebar />
      </div>
      
    </>
  );
}

export default Dashboard;