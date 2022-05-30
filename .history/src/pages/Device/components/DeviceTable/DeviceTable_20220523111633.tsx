import React, { FC, Fragment, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Table } from 'antd';  
import "./DeviceTable.css";
import { PlusOutlined  } from '@ant-design/icons';
import Button from '../../../../components/UI/Button';
import { db } from "../../../../firebase/config";
import { collection } from 'firebase/firestore';
import { useDispatch } from "react-redux";
import { LoadDuLieu } from "../../../../store/actions/thietBiAction";

type deviceTableProps = {
  thietBiList:any,
}

const DeviceTable: FC<deviceTableProps> = ({thietBiList}) => {
  const history = useHistory();
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
      render: (dataIndex:string) => {
        <>
          {dataIndex === 'Đang hoạt động' ? 
            <Fragment>
              fdsf
            </Fragment>
            :
            <Fragment>fdsafdf</Fragment>
          }          
        </>
      }
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
      dataIndex: 'id',
      render: (dataIndex:any) => (
        <>
          <Link to={`/device/device-update/${dataIndex}`}>Cập nhật</Link>
        </>
      ),
    },
    {
      title: '',
      key: '',
      dataIndex: 'id',
      render: (dataIndex:string) => (
        <>
          <Link to={`/device/device-details/${dataIndex}`}>Chi tiết</Link>
        </>
      ),
    },
  ];
  
  return (
    <>
      <div className="devicetable-container">
        <div onClick={() => history.push('/device/add-device')} className="btn-add">
          <div className="btn-add__icon"><PlusOutlined /> </div>
          <Button className="btn-add__text" text="Thêm thiết bị" />
        </div>  
        <Table columns={columns} dataSource={thietBiList} />
      </div> 
    </>
  );
}

export default DeviceTable;