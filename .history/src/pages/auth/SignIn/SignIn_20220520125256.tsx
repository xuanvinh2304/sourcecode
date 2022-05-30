import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import Message from '../../../components/UI/Message';
// import { signin, setError } from '../../../store/actions/authActions';
import { RootState } from '../../../store';
import './SignIn.css';
import { Image } from '../../../assets/variableImage';
import { bindActionCreators } from 'redux';
import { authCreator } from '../../../store/actions';
import { DangNhap, LoadDuLieu } from '../../../store/actions/authActions';

const SignIn: FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  // const {LoadDuLieu} = bindActionCreators(authCreator, dispatch);

  // useEffect(() => {
  //   return () => {
  //     if(error) {
  //       // dispatch(setError(''));
  //     }
  //   }
  // }, [error, dispatch]);

  // Load dữ liệu
  useEffect(()=> {
      // LoadDuLieu();
      const action = LoadDuLieu();
      dispatch(action);
  },[]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    // if(error) {
    //   // dispatch(setError(''));
    // }
    console.log(e.target);
    setLoading(true);
    // dispatch(DangNhap())
    // dispatch(signin({ email, password }, () => setLoading(false)));
  }

  const [state, setstate] = useState(false);

  const toggleBtn = () => {
    setstate(prevState => !prevState);
  }

  return(
    <>
      <div className="container">
        <div className="signin">
          <img src={Image.logo} className="logo" alt="logo" onClick={() => history.push('/')} />
          <form className="form-size" onSubmit={submitHandler}>
            {error && <Message type="danger" msg={error} />}
            <Input
              type="name"
              name="tenDangNhap"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Tên đăng nhập"
              label="Tên đăng nhập *"
            />
            <div className="btn">
              <Input
                type={state ? "text" : "password"}
                name="matKhau"
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
            <p><Link to="/forgot-password" style={{ color: '#E73F3F' }}>Quên mật khẩu ?</Link></p>
            {/* <Button text={loading ? "Loading..." : "Đăng nhập"} className="btn-signin mt-5" disabled={loading} /> */}
            <Button text={"Đăng nhập"} className="btn-signin mt-5" type="submit" />
          </form>
        </div>

        <div className="image">
          <img src={Image.image} alt="" />
        </div>

        <div className="text">
          <p>Hệ thống</p>
          <p className="text-sub">Quản lí xếp hàng</p>   
        </div>
      </div>  
    </>
  );
}

export default SignIn;