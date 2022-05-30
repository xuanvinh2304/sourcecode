import React, { FC, useState } from "react";
import { useHistory } from 'react-router-dom';
import logo from "../../../../assets/images/logo.jpg";
import "./Sidebar.css";

const Sidebar: FC = () => {
  const history = useHistory();
  const [expanded, setExpaned] = useState(true)
  
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        
      </div>
   
      <div className="">
      <img src={logo} className="img" alt="logo" onClick={() => history.push('/')} />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      <div className="menu">
        <div className="menuItem">
          
        </div>
      </div>
    </>
  );
}

export default Sidebar;
