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
// import logo from '../../../assets/images/logo.png';
// import image from '../../../assets/images/image.png';
import './SignIn.css';
import { Image } from '../../../assets/variableImage';
import { bindActionCreators } from 'redux';

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
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="?????a ch??? Email"
              label="T??n ????ng nh???p *"
            />
            <div className="btn">
              <Input
                type={state ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                placeholder="M???t kh???u"
                label="M???t kh???u *"
              />
              <i className="password-icon" onClick={toggleBtn}>
                { state ? <AiOutlineEyeInvisible /> :
                  <AiOutlineEye />  
                }
              </i>
            </div>
            <p><Link to="/forgot-password" style={{ color: '#E73F3F' }}>Qu??n m???t kh???u ?</Link></p>
            <Button text={loading ? "Loading..." : "????ng nh???p"} className="btn-signin mt-5" disabled={loading} />
          </form>
        </div>

        <div className="image">
          <img src={Image.image} alt="" />
        </div>

        <div className="text">
          <p>H??? th???ng</p>
          <p className="text-sub">Qu???n l?? x???p h??ng</p>   
        </div>
      </div>  
    </>
  );
}

export default SignIn;