import React, { FC } from "react";
import { Link, useHistory } from "react-router-dom";
import { Table } from 'antd';  
import "./ServicedTable.css";
import { PlusOutlined  } from '@ant-design/icons';
import Button from '../../../../components/UI/Button';

type servicedTableProps = {
  dichVuList:any,
}


const ServicedTable: FC<servicedTableProps> = ({dichVuList}) => {

  const columns = [
    {
      title: 'Mã dịch vụ',
      dataIndex: 'maDichVu',
      key: '',
      // render: (text: boolean | React.ReactPortal | React.ReactChild | React.ReactFragment | null | undefined) => <a>{text}</a>,
    },
    {
      title: 'Tên dịch vụ',
      dataIndex: 'tenDichVu',
      key: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      key: 'address',
    },
    {
      title: 'Trạng thái hoạt động',
      dataIndex: 'trangThaiHoatDong',
      key: '',
    },
    {
      title: '',
      key: '',
      dataIndex: '',
      render: () => (
        <>
          <Link to="/">Cập nhật</Link>
        </>
      ),
    },
    {
      title: '',
      key: '',
      dataIndex: '',
      render: () => (
        <>
          <Link to="/">Chi tiết</Link>
        </>
      ),
    },
  ];
  
  return (
    <>
      <div className="servicedtable-container">
        <Table columns={columns} dataSource={dichVuList} />;
      </div> 
    </>
  );
}

export default ServicedTable;