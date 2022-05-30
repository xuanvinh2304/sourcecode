import React, { useState } from "react";
import logo from "../../assets/images/logo.jpg";
import "./Sidebar.css";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        
      </div>
   
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      <div className="menu">
          return (
            <div>
             
            </div>
          );
        )
        
        <div className="menuItem">
          
        </div>
      </div>
    </>
  );
};

export default Sidebar;
