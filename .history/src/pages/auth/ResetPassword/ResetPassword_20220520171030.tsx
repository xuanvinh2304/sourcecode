import React, { FC, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import Message from '../../../components/UI/Message';
import { RootState } from '../../../store';
import './ResetPassword.css';
import { Image } from '../../../assets/variableImage';
import { MyParam } from '../../../Interface/MyParm';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';

const ResetPassword: FC = () => {
  const history = useHistory();
  const { error } = useSelector((state: RootState) => state.auth);

  const {id} = useParams<keyof MyParam>() as MyParam;

  console.log(id);

  // toggleBtn
  const [password, setPassword] = useState('');
  const [state, setstate] = useState(false);
  const [retypepassword, retypePassword] = useState('');
  const [retypestate, retypesetstate] = useState(false);
  const toggleBtn = () => {
    setstate(prevState => !prevState);
  }
  const retoggleBtn = () => {
    retypesetstate(prevState => !prevState);
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(e.target.matKhau.value);
    const taiKhoanRef = doc(db, "taiKhoan", `${id}`);

    // Set the "capital" field of the city 'DC'
    const updateTaikhoan = async () => {
      await updateDoc(taiKhoanRef, {
        matKhau: e.target.matKhau.value
      });
    }
    updateTaikhoan();
  }
  
  const logoutClickHandler = () => {
    window.location.replace('/signin');
  }

  return(
    <>
      <div className="container">
        <div className="resetpassword">
          <img src={Image.logo} className="logo" alt="logo" onClick={() => history.push('/')} />
          <form className="form-size" onSubmit={handleSubmit}>
            {error && <Message type="danger" msg={error} />}
            <p className="sub-title">Đặt lại mật khẩu mới</p>
            <div className="btn">
              <Input
                type={state ? "text" : "password"}
                name="matKhau"
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
                name="confirmMatKhat"
                value={retypepassword}
                onChange={(e) => retypePassword(e.currentTarget.value)}
                placeholder="Nhập lại mật khẩu"
                label="Nhập lại mật khẩu"
              />
              <i className="password-icon" onClick={retoggleBtn}>
                { retypestate ? <AiOutlineEyeInvisible /> :
                  <AiOutlineEye />  
                }
              </i>
            </div>

            <Button text="Xác nhận" className="btn-signin mt-5" type="submit" onClick={logoutClickHandler} />
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