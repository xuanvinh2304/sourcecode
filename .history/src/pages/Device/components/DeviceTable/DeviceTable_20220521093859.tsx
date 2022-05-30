import React, { FC, useEffect } from "react";
import { Table } from 'antd';  
import "./DeviceTable.css";
import { PlusOutlined  } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { db } from "../../../../firebase/config";
import { collection } from 'firebase/firestore';
import { useDispatch } from "react-redux";
import { LoadDuLieu } from "../../../../store/actions/thietBiAction";

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
      key: '',
      // render: (text: boolean | React.ReactPortal | React.ReactChild | React.ReactFragment | null | undefined) => <a>{text}</a>,
    },
    {
      title: 'Tên thiết bị',
      dataIndex: 'tenThietBi',
      key: 'name',
    },
    {
      title: 'Địa chỉ IP',
      dataIndex: 'diaChiIP',
      key: 'address',
    },
    {
      title: 'Trạng thái hoạt động',
      dataIndex: 'trangThaiHoatDong',
      key: '',
    },
    {
      title: 'Trạng thái kết nối',
      dataIndex: 'trangThaiKetNoi',
      key: '',
    },
    {
      title: 'Dịch vụ sử dụng',
      dataIndex: 'dichVuSuDung',
      key: '',
    },
    {
      title: '',
      key: '',
      dataIndex: '',
      render: () => (
        <>
          <Link to="">Cập nhật</Link>
        </>
      ),
    },
    {
      title: '',
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
        <PlusOutlined />    
        <Table columns={columns} dataSource={thietBiList} />
      </div> 
    </>
  );
}

export default DeviceTable;