import React, { FC } from "react";
import "./DeviceTable.css";

const DeviceTable: FC = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  
  <Table dataSource={dataSource} columns={columns} />;

  return (
    <>
      <div className="devicetable-container">
        <p>Thiết bị</p>
        
      </div>
    </>
  );
}

export default DeviceTable;