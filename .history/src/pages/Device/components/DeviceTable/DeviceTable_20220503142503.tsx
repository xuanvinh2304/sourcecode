import React, { FC } from "react";
// import { Table } from 'antd';
import "./DeviceTable.css";

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
  // ];
  
  // const columns = [
  //   {
  //     title: 'Name',
  //     dataIndex: 'Mike',
  //     key: 'name',
  //   },
  //   {
  //     title: 'Age',
  //     dataIndex: '32',
  //     key: 'age',
  //   },
  //   {
  //     title: 'Address',
  //     dataIndex: '10 Downing Street',
  //     key: 'address',
  //   },
  // ];

  return (
    <>
      <div className="devicetable-container">
        <p>Thiết bị</p>
      </div> 

      <div>
        {/* <Table dataSource={dataSource} columns={columns} />; */}
      </div>
  
    </>
  );
}

export default DeviceTable;