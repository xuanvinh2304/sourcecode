import React, { FC, Fragment } from "react";
import { useHistory } from "react-router-dom";
import "./NewNumberTable.css";
import { PlusOutlined  } from '@ant-design/icons';
import Button from '../../../../components/UI/Button';
import { Image } from "../../../../assets/variableImage";

const NewNumberTable: FC = () => {
  const history = useHistory();
  
  return (
    <>
      <div className="reporttable-container">
        <div onClick={() => history.push('/')} className="btn-add">
          <div className="btn-add__icon"><PlusOutlined /> </div>
          <Button className="btn-add__text" text="Tải về" />
        </div>  
      </div> 
    </>
  );
}

export default NewNumberTable;