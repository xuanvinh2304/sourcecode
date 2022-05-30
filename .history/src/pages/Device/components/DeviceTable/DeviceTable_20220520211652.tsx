import React, { FC, useEffect } from "react";
import { Table, Tag, Space } from 'antd';  
import "./DeviceTable.css";
import {  } from '@ant-design/icons';
import { db } from "../../../../firebase/config";
import {collection} from 'firebase/firestore';
import { useDispatch } from "react-redux";
import { LoadDuLieu } from "../../../../store/actions/thietBiAction";
import { Link } from "react-router-dom";

type deviceTableProps = {
  thietBiList:any,
}

const DeviceTable: FC<deviceTableProps> = ({thietBiList}) => {

  // useEffect(()=> {
  //   const a:any = collection(db, 'thietBi');
  //   console.log('test',a);
  // }, []);


  const columns = [
    {
      title: 'Mã thiết bị',
      dataIndex: 'maThietBi',
      key: 'name',
      render: (text: boolean | React.ReactPortal | React.ReactChild | React.ReactFragment | null | undefined) => <a>{text}</a>,
    },
    {
      title: 'Tên thiết bị',
      dataIndex: 'tenThietBi',
      key: 'age',
    },
    {
      title: 'Địa chỉ IP',
      dataIndex: 'diaChiIP',
      key: 'address',
    },
    {
      title: 'Trạng thái kết nối',
      dataIndex: 'trangThaiKetNoi',
      key: 'address',
    },
    {
      title: 'Trạng thái hoạt động',
      dataIndex: 'trangThaiHoatDong',
      key: 'address',
    },
    {
      title: 'Tags',
      key: '',
      dataIndex: '',
      render: () => (
        <>
          <Link to="">Cập nhật</Link>
        </>
      ),
    },
    {
      title: 'Action',
      key: '',
      dataIndex: '',
      render: () => (
        <>
          <Link to="">Chi tiết</Link>
        </>
      ),
    },
  ];
  
  return (
    <>
      <div className="devicetable-container">
        <Table columns={columns} dataSource={thietBiList} />
      </div> 
    </>
  );
}

export default DeviceTable;