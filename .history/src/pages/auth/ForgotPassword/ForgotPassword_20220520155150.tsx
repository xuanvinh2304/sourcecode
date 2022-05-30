import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import Message from '../../../components/UI/Message';
// import { sendPasswordResetEmail, setError, setSuccess } from '../../../store/actions/authActions';
import { RootState } from '../../../store';
import {Image} from '../../../assets/variableImage';
import './ForgotPassword.css';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
// import { toast } from 'react-toastify'

const ForgotPassword: FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error, success } = useSelector((state: RootState) => state.auth);

  // const onChange = (e) => {setEmail(e.target.value)
   
  // const onSubmit = async (e) => {
  //   e.preventDefault()

  //   try {
  //       const auth = getAuth()
  //       await sendPasswordResetEmail(auth, email)
  //       toast.success('Email đã được gửi')
  //   } catch (error) {
  //       toast.error('Email không tồn tại')
  //   }
  // }

  return(
    <>
      <div className="container">
        <div className="forgot">
          <img src={Image.logo} className="logo" alt="logo" onClick={() => history.push('/')} />
          <form className="form-size">
            {error && <Message type="danger" msg={error} />}
            {success && <Message type="success" msg={success} />}
            <p className="sub-title">Đặt lại mật khẩu</p>
            <Input 
              type="email"
              name="email"
              id='email'
              value={email}
              // onChange={onChange}
              placeholder="Email" 
              label="Vui lòng nhập email để đặt lại mật khẩu của bạn *"
            />
            <Button text="Hủy" onClick={() => history.push('/signin')} className="btn__cancel-forgot mt-5" />
            <Button text={loading ? "Loading..." : "Tiếp tục"} className="btn-forgot mt-5" disabled={loading} />
          </form>
        </div>

        <div className="image">
          <img src={Image.image1} alt="" />
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;