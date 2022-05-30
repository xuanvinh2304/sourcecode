import React, { FC, useState } from "react";
import { useHistory } from 'react-router-dom';
import logo from "../../../../assets/images/logo.jpg";
import "./Sidebar.css";

const Sidebar: FC = () => {
  const history = useHistory();
  const [] = useState(true)
  
  return (
    <>
      <div>
        <div className="">
          <img src={logo} className="img" alt="logo" onClick={() => history.push('/')} />
        </div>

        <div className="menu">
          
        </div>
      </div>
    </>
  );
}

export default Sidebar;
