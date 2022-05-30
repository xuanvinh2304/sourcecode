import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import Message from '../../../components/UI/Message';
import { sendPasswordResetEmail, setError, setSuccess } from '../../../store/actions/authActions';
import { RootState } from '../../../store';
import logo from '../../../assets/images/logo.png';
import image from '../../../assets/images/image1.png';
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
      <div className="container">
        <div className="forgot">
          <img src={logo} className="logo" alt="logo" onClick={() => history.push('/')} />
          <form className="form-size" onSubmit={submitHandler}>
            {error && <Message type="danger" msg={error} />}
            {success && <Message type="success" msg={success} />}
            <Input 
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Email"
              label="Vui lòng nhập  Email"
            />
            <Button text={loading ? "Loading..." : "Send"} className="btn-forgot mt-5" disabled={loading} />
            <Button text="Cancel" onClick={() => history.push('/signin')} className="btn__cancel-forgot mt-5" />
          </form>
        </div>

        <div className="image">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;