import React, { FC, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { Table } from 'antd';  
import "./ReportTable.css";
import { PlusOutlined  } from '@ant-design/icons';
import Button from '../../../../components/UI/Button';
import { Image } from "../../../../assets/variableImage";


type reportTableProps = {
  baoCaoList:any,
}


const ReportTable: FC<reportTableProps> = ({baoCaoList}) => {
  const history = useHistory();

  const columns = [
    {
      title: 'Số thứ tự',
      dataIndex: 'soThuTu',
      key: '',
      // render: (text: boolean | React.ReactPortal | React.ReactChild | React.ReactFragment | null | undefined) => <a>{text}</a>,
    },
    {
      title: 'Tên dịch vụ',
      dataIndex: 'tenDichVu',
      key: 'name',
    },
    {
      title: 'Thời gian cấp',
      dataIndex: 'thoiGianCap',
      key: 'address',
    },
    {
      title: 'Tình trạng',
      dataIndex: 'tinhTrang',
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
  ];
  
  return (
    <>
      <div className="reporttable-container">
        <div onClick={() => history.push('/')} className="btn-add">
          <div className="btn-add__icon"><PlusOutlined /> </div>
          <Button className="btn-add__text" text="Tải về" />
        </div>  
        <Table columns={columns} dataSource={baoCaoList} />;
      </div> 
    </>
  );
}

export default ReportTable;