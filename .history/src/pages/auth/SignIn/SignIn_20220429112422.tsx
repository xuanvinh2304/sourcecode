import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import Message from '../../../components/UI/Message';
import { signin, setError } from '../../../store/actions/authActions';
import { RootState } from '../../../store';
import logo from '../../../assets/images/logo.jpg';
import image1 from '../../../assets/images/image1.jpg';
import './SignIn.css';

const SignIn: FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if(error) {
        dispatch(setError(''));
      }
    }
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if(error) {
      dispatch(setError(''));
    }
    setLoading(true);
    dispatch(signin({ email, password }, () => setLoading(false)));
  }

  const [state, setstate] = useState(false);

  const toggleBtn = () => {
    setstate(prevState => !prevState);
  }

  return(
    <>
      <div className="container">
        <div className="signin">
          <img src={logo} className="logo" alt="logo" onClick={() => history.push('/')} />
          <form className="form-size" onSubmit={submitHandler}>
            {error && <Message type="danger" msg={error} />}
            <Input 
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Email address"
              label="Email address"
            />
            <div className="btn">
              <Input 
                type={state ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                placeholder="Password"
                label="Password"
              />
              <i className="password-icon" onClick={toggleBtn}>
                { state ? <AiOutlineEyeInvisible /> :
                  <AiOutlineEye />  
                }
              </i>
            </div>
            <p><Link to="/forgot-password" style={{color: '#E73F3F'}}>Quên mật khẩu ?</Link></p>
            <Button text={loading ? "Loading..." : "Sign In"} className="btn-color mt-5" disabled={loading} />
          </form>
        </div>

        <div className="image">
          <img src={image1} alt="" style={{ width: '500px' }} />
        </div>
      </div>  
    </>
  );
}

export default SignIn;