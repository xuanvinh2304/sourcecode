import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Button from '../UI/Button';
import './Home.css';

const Home: FC = () => {
  const history = useHistory();

  return(
    <>
      <nav className="navbar is-spaced has-shadow">
        <div className="container"> 
          <div className="navbar-brand">
            <img src={logo} style={{ width: '120px', margin: '0 0 20px 100px'}} alt="#" />
          </div>

          <div className="navbar-end">
            <div className="navbar-items">
              <div className="buttons">
                <Button text="Sign up" onClick={() => history.push('/signup')} className="btn__home-signup" />
                <Button text="Sign in" onClick={() => history.push('/signin')} className="btn__home-signin" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Home;