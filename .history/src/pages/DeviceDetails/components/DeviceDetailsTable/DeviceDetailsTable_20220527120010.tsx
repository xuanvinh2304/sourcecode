import React, { FC, useEffect, useState } from "react";
import "./DeviceDetailsTable.css";
import { Select } from 'antd';
import { useHistory, useParams } from "react-router-dom";
import { MyParam } from "../../../../Interface/MyParm";
import { useDispatch, useSelector } from "react-redux";
import { LayDuLieu } from "../../../../store/actions/thietBiAction";
import { RootState } from "../../../../store";

const { Option } = Select;

type initialValuesType = {
  maThietBi:string,
  tenThietBi:string,
  loaiThietBi:string,
  dichVuSuDung: string,
  tenDangNhap:string, 
  matKhau: string,
  diaChiIP: string, 
}

const DeviceDetailsTable: FC = () => {
  const history = useHistory();

  const {id} = useParams<keyof MyParam>() as MyParam;

  const [infoThietBi, setInfoThietBi] = useState({
    maThietBi: '',
    tenThietBi: '',
    loaiThietBi: '',
    dichVuSuDung: '',
    tenDangNhap: '', 
    matKhau:  '',
    diaChiIP:  '', 
  });

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(LayDuLieu(id));
  }, []);

  const {thietBiInfo} = useSelector((state:RootState) => state.thietBi);

  useEffect(()=> {
    console.log('thiết bị',thietBiInfo);
    setInfoThietBi({
      maThietBi: `${thietBiInfo[0].maThietBi}`,
      tenThietBi: `${thietBiInfo[0].tenThietBi}`,
      loaiThietBi: `${thietBiInfo[0].loaiThietBi}`,
      dichVuSuDung: `${thietBiInfo[0].dichVuSuDung}`,
      tenDangNhap: `${thietBiInfo[0].tenDangNhap}`, 
      matKhau:  `${thietBiInfo[0].matKhau}`,
      diaChiIP:  `${thietBiInfo[0].diaChiIP}`, 
    })
  }, [thietBiInfo]);

  return (
    <>
      <div className="add-device-table">
        <p className="add-device-table--title">Thông tin thiết bị</p>
        <div className="add-device-table__all">
          <div className="add-device-table__all-1">
            <p className="details-margin">Mã thiết bị: {infoThietBi.maThietBi}</p> 
            <p className="details-margin">Tên thiết bị: {infoThietBi.tenThietBi}</p> 
            <p className="details-margin">Địa chỉ IP: {infoThietBi.diaChiIP}</p> 
          </div> 

          <div className="add-device-table__all-2">
            <p className="details-margin">Loại thiết bị: {infoThietBi.loaiThietBi}</p> 
            <p className="details-margin">Tên đăng nhập: {infoThietBi.tenDangNhap}</p>
            <p className="details-margin">Mật khẩu: {infoThietBi.matKhau}</p> 
          </div>
        </div>

        <div className="add-device-table__child">
          <p className="details-margin">Dịch vụ sử dụng: {infoThietBi.dichVuSuDung}</p> 
        </div>
      </div>
    </>
  );
}

export default DeviceDetailsTable;