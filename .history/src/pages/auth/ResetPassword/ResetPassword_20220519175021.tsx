import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import Message from '../../../components/UI/Message';
import { RootState } from '../../../store';
import './ResetPassword.css';
import { Image } from '../../../assets/variableImage';

const ResetPassword: FC = () => {
  const history = useHistory();
  const { error } = useSelector((state: RootState) => state.auth);

  const [password, setPassword] = useState('');
  const [state, setstate] = useState(false);

  const [resetpassword, resetPassword] = useState('');
  const [retypestate, retypesetstate] = useState(false);

  const toggleBtn = () => {
    setstate(prevState => !prevState);
  }

  const retoggleBtn = () => {
    retypesetstate(prevState => !prevState);
  }

  return(
    <>
      <div className="container">
        <div className="resetpassword">
          <img src={Image.logo} className="logo" alt="logo" onClick={() => history.push('/')} />
          <form className="form-size">
            {error && <Message type="danger" msg={error} />}
            <p className="sub-title">Đặt lại mật khẩu mới</p>
            <div className="btn">
              <Input
                type={state ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                placeholder="Mật khẩu"
                label="Mật khẩu"
              />
              <i className="password-icon" onClick={toggleBtn}>
                { state ? <AiOutlineEyeInvisible /> :
                  <AiOutlineEye />  
                }
              </i>
            </div>

            <div className="btn">
              <Input
                type={retypestate ? "text" : "password"}
                name="password"
                value={resetpassword}
                onChange={(e) => setPassword(e.currentTarget.value)}
                placeholder="Nhập lại mật khẩu"
                label="Nhập lại mật khẩu"
              />
              <i className="password-icon" onClick={retoggleBtn}>
                { retypestate ? <AiOutlineEyeInvisible /> :
                  <AiOutlineEye />  
                }
              </i>
            </div>
            <Button text="Xác nhận" className="btn-signin mt-5" />
          </form>
        </div>

        <div className="image">
          <img src={Image.image1} alt="" />
        </div>

      </div>  
    </>
  );
}

export default ResetPassword;