import React, { FC } from "react";
// import { Table } from 'antd';
import "./DeviceTable.css";
import { RightOutlined } from '@ant-design/icons';

const DeviceTable: FC = () => {

  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'Mike',
  //     age: 32,
  //     address: '10 Downing Street',
  //   },
  //   {
  //     key: '2',
  //     name: 'John',
  //     age: 42,
  //     address: '10 Downing Street',
  //   },
  //   {
  //     key: '3',
  //     name: 'Jack',
  //     age: 52,
  //     address: '20 Downing Street',
  //   },
  // ];
  
  // const columns = [
  //   {
  //     title: 'Name',
  //     dataIndex: 'Mike',
  //     key: 'Mike',
  //   },
  //   {
  //     title: 'Age',
  //     dataIndex: '32',
  //     key: 32,
  //   },
  //   {
  //     title: 'Address',
  //     dataIndex: '10 Downing Street',
  //     key: '10 Downing Street',
  //   },
  // ];

  return (
    <>
      <div className="devicetable-container">
        <div className="devicetable-title">
          <p>Thiết bị</p> <RightOutlined /> <p>Danh sách thiết bị</p>
          <p>Danh sách thiết bị</p>
        </div>
      </div> 

      
      {/* <Table dataSource={dataSource} columns={columns} />; */}
      
  
    </>
  );
}

export default DeviceTable;