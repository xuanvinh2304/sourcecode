import React, { FC, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { Table } from 'antd';  
import "./RoleTable.css";
import { PlusOutlined  } from '@ant-design/icons';
import Button from '../../../../components/UI/Button';
import { Image } from "../../../../assets/variableImage";


type roleTableProps = {
  quanLiVaiTroList:any,
}


const RoleTable: FC<roleTableProps> = ({quanLiVaiTroList}) => {
  const history = useHistory();

  const columns = [
    {
      title: 'Tên vai trò',
      dataIndex: 'tenVaiTro',
      key: '',
      // render: (text: boolean | React.ReactPortal | React.ReactChild | React.ReactFragment | null | undefined) => <a>{text}</a>,
    },
    {
      title: 'Số người dùng',
      dataIndex: 'soNguoiDung',
      key: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      key: 'address',
    },
    {
      title: '',
      key: '',
      dataIndex: '',
      render: (dataIndex:any) => (
        <>
          <Link to="/">Cập nhật</Link>
        </>
      ),
    },
  ];
  
  return (
    <>
      <div className="reporttable-container">
        <div onClick={() => history.push('/')} className="btn-add">
          <div className="btn-add__icon"><PlusOutlined /> </div>
          <Button className="btn-add__text" text="Tải về" />
        </div>  
        <Table columns={columns} dataSource={quanLiVaiTroList} />;
      </div> 
    </>
  );
}

export default RoleTable;