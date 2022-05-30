import React, { FC, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Table } from 'antd';  
import "./DiaryTable.css";
import { PlusOutlined  } from '@ant-design/icons';
import Button from '../../../../components/UI/Button';
import { Image } from "../../../../assets/variableImage";


type diaryTableProps = {
  nhatKiNguoiDungList:any,
}


const DiaryTable: FC<diaryTableProps> = ({nhatKiNguoiDungList}) => {
  const history = useHistory();

  const columns = [
    {
      title: 'Tên đăng nhập',
      dataIndex: 'tenDangNhap',
      key: '',
      // render: (text: boolean | React.ReactPortal | React.ReactChild | React.ReactFragment | null | undefined) => <a>{text}</a>,
    },
    {
      title: 'Thời gian tác động',
      dataIndex: 'thoiGianTacDong',
      key: 'name',
    },
    {
      title: 'IP thực hiện',
      dataIndex: 'ipThucHien',
      key: 'address',
    },
    {
      title: 'Thao tác thực hiện',
      dataIndex: 'thaoTacThucHien',
      key: 'address',
    },
  ];
  
  return (
    <>
      <div className="reporttable-container">
        <div onClick={() => history.push('/')} className="btn-add">
          <div className="btn-add__icon"><PlusOutlined /> </div>
          <Button className="btn-add__text" text="Tải về" />
        </div>  
        <Table columns={columns} dataSource={nhatKiNguoiDungList} />;
      </div> 
    </>
  );
}

export default DiaryTable;