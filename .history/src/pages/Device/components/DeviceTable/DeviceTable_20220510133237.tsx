import React, { FC } from "react";
import { Table, Tag, Space } from 'antd';  
import "./DeviceTable.css";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const DeviceTable: FC = () => {

  const columns = [
    {
      title: 'Mã thiết bị',
      dataIndex: 'name',
      key: 'name',
      render: (text: boolean | React.ReactPortal | React.ReactChild | React.ReactFragment | null | undefined) => <a>{text}</a>,
    },
    {
      title: 'Tên thiết bị',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Địa chỉ IP',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Trạng thái kết nối',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Trạng thái hoạt động',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any[]) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: { name: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; }) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <>
      <div className="devicetable-container">
        <Table columns={columns} dataSource={data} />;
      </div> 
    </>
  );
}

export default DeviceTable;