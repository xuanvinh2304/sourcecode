import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/images/logo.jpg';
import Button from 'antd';
import { RootState } from '../../store';
import { signout } from '../../store/actions/authActions';

const Home: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(signout());
  }

  return(
    <>
      <nav className="navbar is-spaced has-shadow">
        <div className="container"> 
          <div className="navbar-brand">
            <img src={logo} style={{ cursor: 'pointer', width: '120px' }} alt="#" onClick={() => history.push('/')} />
          </div>

          <div className="navbar-end">
            <div className="navbar-items">
              {!authenticated ? <div className="buttons">
                  <Button text="Sign up" onClick={() => history.push('/signup')} className="is-warning" />
                  <Button text="Sign in" onClick={() => history.push('/signin')} />
                </div>
                :
                <Button text="Sign out" onClick={logoutClickHandler} />
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Home;