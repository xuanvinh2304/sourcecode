import React, { FC } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../UI/Button';
import { RootState } from '../../store';
import { signout } from '../../store/actions/authActions';

const Header: FC = () => {
  
  const { authenticated } = useSelector((state: RootState) => state.auth);

  

  return(
    <nav className="navbar is-spaced has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to={!authenticated ? "/" : "/dashboard"}>Alta Media</Link>
        </div>

        
      </div>
    </nav>
  );
}

export default Header;