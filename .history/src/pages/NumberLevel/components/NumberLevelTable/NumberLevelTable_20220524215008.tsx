import React, { FC, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { Table } from 'antd';  
import "./NumberLevelTable.css";
import { PlusOutlined  } from '@ant-design/icons';
import Button from '../../../../components/UI/Button';
import { Image } from "../../../../assets/variableImage";


type servicedTableProps = {
  capSoList:any,
}


const NumberLevelTable: FC<servicedTableProps> = ({capSoList}) => {
  const history = useHistory();

  const columns = [
    {
      title: 'STT',
      dataIndex: 'soThuTu',
      key: '',
      // render: (text: boolean | React.ReactPortal | React.ReactChild | React.ReactFragment | null | undefined) => <a>{text}</a>,
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'tenKhachHang',
      key: 'name',
    },
    {
      title: 'Tên dịch vụ',
      dataIndex: 'tenDichVu',
      key: 'address',
    },
    {
      title: 'Thời gian cấp',
      dataIndex: 'thoiGianCap',
      key: 'address',
    },
    {
      title: 'Hạn sử dụng',
      dataIndex: 'hanSuDung',
      key: 'address',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'trangThai',
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
      title: 'Nguồn cấp',
      dataIndex: 'nguonCap',
      key: 'address',
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
      <div className="numberleveltable-container">
        <div onClick={() => history.push('/')} className="btn-add">
          <div className="btn-add__icon"><PlusOutlined /> </div>
          <Button className="btn-add__text" text="Cấp số mới" />
        </div>  
        <Table columns={columns} dataSource={capSoList} />;
      </div> 
    </>
  );
}

export default NumberLevelTable;