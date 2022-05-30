import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Button from '../UI/Button';
import './Home.css';

const Home: FC = () => {
  const history = useNavigate();

  return(
    <>
      <nav className="navbar is-spaced has-shadow">
        <div className="container"> 
          <div className="navbar-brand">
            <img src={logo} style={{ cursor: 'pointer', width: '120px', margin: '0 0 20px 100px'}} alt="#" onClick={() => history.push('/')} />
          </div>

          <div className="navbar-end">
            <div className="navbar-items">
              <div className="buttons">
                <Button text="Sign up" onClick={() => history('/signup')} className="btn__home-signup" />
                <Button text="Sign in" onClick={() => history('/signin')} className="btn__home-signin" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Home;