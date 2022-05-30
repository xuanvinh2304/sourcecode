import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import Button from '../UI/Button';
import './Home.css';

const Home: FC = () => {
  const history = useHistory();

  return(
    <>
      <nav className="navbar is-spaced has-shadow">
        <div className="container"> 
          <div className="navbar-brand">
            <img src={logo} style={{ cursor: 'pointer', width: '120px' }} alt="#" onClick={() => history.push('/')} />
          </div>

          <div className="navbar-end">
            <div className="navbar-items">
              <div className="buttons">
                <Button text="Sign up" onClick={() => history.push('/signup')} className="has-background-warning" />
                <Button text="Sign in" onClick={() => history.push('/signin')} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Home;