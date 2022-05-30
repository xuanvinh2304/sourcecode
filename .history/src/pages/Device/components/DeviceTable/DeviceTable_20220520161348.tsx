import React, { FC, useEffect } from "react";
import { Table, Tag, Space } from 'antd';  
import "./DeviceTable.css";
import {  } from '@ant-design/icons';
import { db } from "../../../../firebase/config";
import {collection} from 'firebase/firestore';
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
          <a></a>
        </>
      ),
    },
    {
      title: 'Action',
      key: '',
      render: (text: any, record: { name: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; }) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ];

  return (
    <>
      <div className="devicetable-container">
        <Table columns={columns} dataSource={thietBiList} />;
      </div> 
    </>
  );
}

export default DeviceTable;