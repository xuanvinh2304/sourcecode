import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import Message from '../../../components/UI/Message';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
// import { signup, setError } from '../../../store/actions/authActions';
import { RootState } from '../../../store';
// import logo from '../../../assets/images/logo.png';
// import image from '../../../assets/images/image.png';
import './SignUp.css';

const SignUp: FC = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if(error) {
        // dispatch(setError(''));
      }
    }
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if(error) {
      // dispatch(setError(''));
    }
    setLoading(true);
    // dispatch(signup({ email, password, firstName }, () => setLoading(false)));
  }

  const [state, setstate] = useState(false);

  const toggleBtn = () => {
    setstate(prevState => !prevState);
  }

  return(
    <>
      <div className="container">
        <div className="signup">
          <img src='../../../assets/images/logo.png' className="logo" alt="logo" onClick={() => history.push('/')} />
          <form className="form-size" onSubmit={submitHandler}>
            {error && <Message type="danger" msg={error} />}
            <Input 
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.currentTarget.value)}
              placeholder="Tên đăng nhập"
              label="Tên đăng nhập"
            />
            <Input 
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Địa chỉ Email"
              label="Địa chỉ Email *"
            />
            <div className="btn">
              <Input 
                type={state ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                placeholder="Mật khẩu"
                label="Mật khẩu *"
              />
              <i className="password-icon" onClick={toggleBtn}>
                { state ? <AiOutlineEyeInvisible /> :
                  <AiOutlineEye />  
                }
              </i>
            </div>
            <Button text={loading ? "Loading..." : "Sign Up"} className="btn-signup mt-5" disabled={loading} />
          </form>
        </div>

        <div className="image">
          <img src='../../../assets/images/image.png' alt="" />
        </div>

        <div className="text">
          <p>Hệ thống</p>
          <p className="text-sub">Quản lí xếp hàng</p>   
        </div>
      </div>
    </>
  );
}

export default SignUp;