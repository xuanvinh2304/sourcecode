import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import Message from '../../UI/Message';
import { sendPasswordResetEmail, setError, setSuccess } from '../../../store/actions/authActions';
import { RootState } from '../../../store';
import logo from '../../../assets/images/logo.jpg';
import './ForgotPassword.css';

const ForgotPassword: FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error, success } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if(error) {
        dispatch(setError(''));
      }
      if(success) {
        dispatch(setSuccess(''));
      }
    }
  }, [error, dispatch, success]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if(success) {
      dispatch(setSuccess(''));
    }
    if(error) {
      dispatch(setError(''));
    }
    setLoading(true);
    await dispatch(sendPasswordResetEmail(email, "Email sent!"));
    setLoading(false);
  }

  return(
    <>
      <section className="section">
        <div className="container">
          {/* <h2 className="has-text-centered is-size-2 mb-3">Reset password</h2> */}
          <img src={logo} className="img" alt="#" onClick={() => history.push('/')} />
          <form className="form two" onSubmit={submitHandler}>
            {error && <Message type="danger" msg={error} />}
            {success && <Message type="success" msg={success} />}
            <Input 
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Email address"
              label="Email address"
            />
            <Button text={loading ? "Loading..." : "Send password reset email"} className="is-warning is-fullwidth mt-5" disabled={loading} />
            <Button text="Cancel" onClick={() => history.push('/signin')} className="is-fullwidth mt-5" />
          </form>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;