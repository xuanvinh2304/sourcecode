import React, { FC, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { Table } from 'antd';  
import "./AccountTable.css";
import { PlusOutlined  } from '@ant-design/icons';
import Button from '../../../../components/UI/Button';
import { Image } from "../../../../assets/variableImage";


type accountTableProps = {
  quanLiTaiKhoanList:any,
}


const AccountTable: FC<accountTableProps> = ({quanLiTaiKhoanList}) => {
  const history = useHistory();

  const columns = [
    {
      title: 'Tên đăng nhập',
      dataIndex: 'tenDangNhap',
      key: '',
      // render: (text: boolean | React.ReactPortal | React.ReactChild | React.ReactFragment | null | undefined) => <a>{text}</a>,
    },
    {
      title: 'Họ tên',
      dataIndex: 'hoTen',
      key: 'name',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'soDienThoai',
      key: 'address',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'address',
    },
    {
      title: 'Vai trò',
      dataIndex: 'vaiTro',
      key: 'address',
    },
    {
      title: 'Trạng thái hoạt động',
      dataIndex: 'trangThaiHoatDong',
      key: '',
      render: (dataIndex:string) => {
        if(dataIndex === 'Hoạt động') {
          return (
            <Fragment>
              <img src={Image.hoatdong}/>
              {dataIndex}
            </Fragment>
          )
        }else {
          return (
            <Fragment>
              <img src={Image.ngunghoatdong}/>
              {dataIndex}
            </Fragment>
          )
        }
      }
    },
    {
      title: '',
      key: '',
      dataIndex: 'id',
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
        <Table columns={columns} dataSource={quanLiTaiKhoanList} />;
      </div> 
    </>
  );
}

export default AccountTable;