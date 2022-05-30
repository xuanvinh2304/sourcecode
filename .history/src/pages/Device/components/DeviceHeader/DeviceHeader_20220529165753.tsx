import React, { FC, useEffect, useState } from "react";
import "./DeviceHeader.css";
import { Select, Input, Space } from 'antd';
import UserHeader from "../../../../components/UserHeader/UserHeader";
import {  RightOutlined, AudioOutlined } from '@ant-design/icons';
import { MyParam } from "../../../../Interface/MyParm";
import { LayDuLieu } from "../../../../store/actions/thietBiAction";
import { RootState } from "../../../../store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { map } from "@firebase/util";

const { Option } = Select;
function handleChange(value: any) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value: any) => console.log(value);

type deviceTableProps = {
  thietBiList:any,
}

const DeviceHeader: FC<deviceTableProps> = ({thietBiList}) => {

  // const {id} = useParams<keyof MyParam>() as MyParam;

  const [thietBi, setThietBi] = useState([
    {maThietBi: ''},
    {tenThietBi: ''},
    {loaiThietBi: ''},
    {dichVuSuDung: ''},
    {tenDangNhap: ''}, 
    {matKhau:  ''},
    {diaChiIP: ''}
  ]);

  // const dispatch = useDispatch();
  // useEffect(()=> {
  //   dispatch(LayDuLieu(id));
  // }, []);

  const {thietBiInfo} = useSelector((state:RootState) => state.thietBi);

  // useEffect(()=> {
  //   // console.log('thiết bị',thietBiInfo);
  //   setThietBi({
  //     maThietBi: `${thietBiInfo[0].maThietBi}`,
  //     tenThietBi: `${thietBiInfo[0].tenThietBi}`,
  //     loaiThietBi: `${thietBiInfo[0].loaiThietBi}`,
  //     dichVuSuDung: `${thietBiInfo[0].dichVuSuDung}`,
  //     tenDangNhap: `${thietBiInfo[0].tenDangNhap}`, 
  //     matKhau:  `${thietBiInfo[0].matKhau}`,
  //     diaChiIP:  `${thietBiInfo[0].diaChiIP}`, 
  //   }) 
  // }, [thietBiInfo]);

  // Search
  const onChange = (value: any) => {
    const values = value.target.value;
    console.log('value: ', values);

    console.log('thietBiList', thietBiList);

    if(values !== '') {
      const result = thietBiList.filter((item: any) => item.tenThietBi === values || item.tenDangNhap === values || item.loaiThietBi === values || item.maThietBi === values || item.diaChi === values);
      console.log(result);
      if(result[0] !== undefined) {
        setThietBi(result);
      } else {
        const getThietBi = async () => {
          setThietBi(thietBiInfo.doc.map((doc:any) =>({...doc.data(), id: doc.id})));
        }
        getThietBi();
      }
    } else {
      const getThietBi = async () => {
        setThietBi(thietBiInfo.doc.map((doc:any) =>({...doc.data(), id: doc.id})));
      }
      getThietBi();
    }
  };

  return (
    <>
      <div className="deviceheader-container">
        <div className="deviceheader-title">
          <p className="deviceheader-title--1">Thiết bị</p> <RightOutlined /> 
          <p className="deviceheader-title--2">Danh sách thiết bị</p>
          <UserHeader />
        </div>
        
        <p className="deviceheader-title--2">Danh sách thiết bị</p> 
        <div className="deviceheader-option">
          <div className="menu--active-state-1">
            <p className="deviceheader-option-sub">Trạng thái hoạt động</p>
            <Select 
              labelInValue
              defaultValue={{ value: 'all' }}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="all">Tất cả</Option>
              <Option value="on">Hoạt động</Option>
              <Option value="off">Ngưng hoạt động</Option>
            </Select>
          </div>

          <div className="menu--active-state-2">
            <p className="deviceheader-option-sub">Trạng thái kết nối</p>
            <Select
              labelInValue
              defaultValue={{ value: 'all' }}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="all">Tất cả</Option>
              <Option value="connect">Kết nối</Option>
              <Option value="Disconnected">Mất kết nối</Option>
            </Select>
          </div>

          <div className="menu--active-search">
            <p className="deviceheader-option-sub">Từ khóa</p>
            <Space onChange={onChange} direction="vertical">
              <Search placeholder="Nhập từ khóa" onSearch={onSearch} style={{ width: 200 }} />
            </Space>
          </div>

        </div>
      </div> 
    </>
  );
}

export default DeviceHeader;