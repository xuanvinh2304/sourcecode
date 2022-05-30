import React, { FC, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { Table } from 'antd';  
import "./NumberLevelTable.css";
import { PlusOutlined  } from '@ant-design/icons';
import Button from '../../../../components/UI/Button';
import { Image } from "../../../../assets/variableImage";


type servicedTableProps = {
  dichVuList:any,
}


const NumberLevelTable: FC<servicedTableProps> = ({dichVuList}) => {
  const history = useHistory();

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
        <div onClick={() => history.push('/')} className="btn-add">
          <div className="btn-add__icon"><PlusOutlined /> </div>
          <Button className="btn-add__text" text="Thêm dịch vụ" />
        </div>  
        <Table columns={columns} dataSource={dichVuList} />;
      </div> 
    </>
  );
}

export default NumberLevelTable;