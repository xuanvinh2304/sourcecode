import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import Message from '../../../components/UI/Message';
import { signup, setError } from '../../../store/actions/authActions';
import { RootState } from '../../../store';
import logo from '../../../assets/images/logo.jpg';
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
    dispatch(signup({ email, password, firstName }, () => setLoading(false)));
  }

  return(
    <>
      <div>
        <div className="container">
          {/* <h2 className="has-text-centered is-size-2 mb-3">Sign Up</h2> */}
          <img src={logo} className="img" alt="logo" onClick={() => history.push('/')} />
          <form className="form two" onSubmit={submitHandler}>
            {error && <Message type="danger" msg={error} />}
            <Input 
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.currentTarget.value)}
              placeholder="First name"
              label="First name"
            />
            <Input 
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Email address"
              label="Email address"
            />
            <Input 
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder="Password"
              label="Password"
            />
            <Button text={loading ? "Loading..." : "Sign Up"} className="is-warning is-fullwidth mt-5" disabled={loading} />
          </form>
        </div>
        </div>
    </>
  );
}

export default SignUp;