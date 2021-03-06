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
              placeholder="Email address"
              label="Email address"
            />
            <Button text={loading ? "Loading..." : "Send password reset email"} className="btn-forgot mt-5" disabled={loading} />
            <Button text="Cancel" onClick={() => history.push('/signin')} className=".container {
  display: flex;
  margin-left: 0!important;
}

.signin {
  width: 600px!important;
  background-color: #B1B1B1;
  height: 718px;
}

.logo {
  cursor: pointer; 
  width: 120px; 
  margin: 80px 0 80px 220px!important;
}

.form-size {
  width: 400px;
  margin-left: 80px;
}

.input, .select select, .textarea {
  background-color: #fff;
  border-color: #B1B1B1;
  border-radius: 6px!important;
}

.input:active, .input:focus, .is-active.input, .is-active.textarea, .is-focused.input, .is-focused.textarea, .select select.is-active, .select select.is-focused, .select select:active, .select select:focus, .textarea:active, .textarea:focus {
  border-color: #ff7e15!important;
  box-shadow: 0 0 0 0.125em rgba(247, 169, 35, 0.25);
}

.btn {
  position: relative;
}

.btn-signin {
  margin: 5px 0 0 120px;
  color: #fff!important;
  padding: 0 40px 0 40px!important;
  border-radius: 8px!important;
  background-color: #FF9138!important;
}

.password-icon {
  position: absolute;
  top: 22px;
  right: 8px;
  color: rgb(12, 12, 12);
  cursor: pointer;
  padding: 0.6rem;
  outline: none;
  font-size: 1.2rem;
  background-color: transparent;
  border: none;
}

.image {
  width: 500px!important;
  margin: 100px 0 0 150px;
}

.text {
  position: absolute;
  width: 142px;
  height: 54px;
  left: 1044px;
  top: 340px;
  /* 34/34 Reg */

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 51px;
  /* or 150% */

  text-align: center;

  /* Orange/$-Orange-500 */

  color: #FF7506;
}

.text-sub {
  /* 36/36 Xbold */
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 54px;
  text-transform: uppercase;
  width: 400px;
  margin: 0 0 0 -18px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Orange/$-Orange-500 */

  color: #FF7506;
}



 mt-5" />
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