import React, { FC, useEffect, useState } from "react";
import "./DeviceUpdateTable.css";
import { Input, Select } from 'antd';
import Button from '../../../../components/UI/Button';
import { useHistory, useParams } from "react-router-dom";
import { MyParam } from "../../../../Interface/MyParm";
import { useDispatch, useSelector } from "react-redux";
import { LayDuLieu } from "../../../../store/actions/thietBiAction";
import { useFormik } from "formik";
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

const DeviceUpdateTable: FC = () => {
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

  const initialValues:initialValuesType = {
    maThietBi: `${infoThietBi.maThietBi}`,
    tenThietBi: `${infoThietBi.tenThietBi}`,
    loaiThietBi: `${infoThietBi.loaiThietBi}`,
    dichVuSuDung: `${infoThietBi.dichVuSuDung}`,
    tenDangNhap: `${infoThietBi.tenDangNhap}`, 
    matKhau:  `${infoThietBi.matKhau}`,
    diaChiIP:  `${infoThietBi.diaChiIP}`, 
  }

  useEffect(()=> {
    setInfoThietBi({
      maThietBi: `${thietBiInfo.maThietBi}`,
      tenThietBi: `${thietBiInfo.tenThietBi}`,
      loaiThietBi: `${thietBiInfo.loaiThietBi}`,
      dichVuSuDung: `${thietBiInfo.dichVuSuDung}`,
      tenDangNhap: `${thietBiInfo.tenDangNhap}`, 
      matKhau:  `${thietBiInfo.matKhau}`,
      diaChiIP:  `${thietBiInfo.diaChiIP}`, 
    })
  }, [thietBiInfo]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (e:any) => {
      console.log(e)
    }
  });

  function handleChange(value: any) {
    console.log(value); 
    formik.setFieldValue('loaiThietBi',value.value);
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="add-device-table">
        <p className="add-device-table--title">Th??ng tin thi???t b???</p>
        <div className="add-device-table__all">
          <div className="add-device-table__all-1">
            <p>M?? thi???t b???: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover" value={formik.values.maThietBi} name="maThietBi" onChange={formik.handleChange} placeholder="Nh???p m?? thi???t b???" />
            <p>T??n thi???t b???: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover" value={formik.values.tenThietBi} name="tenThietBi" onChange={formik.handleChange} placeholder="Nh???p t??n thi???t b???" />
            <p>?????a ch??? IP: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover" value={formik.values.diaChiIP} name="diaChiIP" onChange={formik.handleChange}  placeholder="Nh???p ?????a ch??? IP" />
          </div> 

          <div className="add-device-table__all-2">
            <p>Lo???i thi???t b???: 
              <span className="color-red">*</span>
            </p> 
            <Select
              labelInValue
              // defaultValue={{ value: 'all' }}
              value = {formik.values.loaiThietBi}
              style={{ width: 120 }}
              onChange={handleChange} 
            >
              <Option value="kiosk">Kiosk</Option>
              <Option value="display counter">Display counter</Option>
            </Select>
            <p>T??n ????ng nh???p: 
              <span className="color-red">*</span>
            </p>
            <Input className="add-device__input-hover" value={formik.values.tenDangNhap} name="tenDangNhap" onChange={formik.handleChange}  placeholder="Nh???p t??i kho???i" />
            <p>M???t kh???u: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover" value={formik.values.matKhau} name="matKhau" onChange={formik.handleChange}   placeholder="Nh???p m???t kh???u" />
          </div>
        </div>
        <div className="add-device-table__child">
          <p>D???ch v??? s??? d???ng: 
            <span className="color-red">*</span>
          </p>
          <Input className="input-last add-device__input-hover" value={formik.values.dichVuSuDung} name="dichVuSuDung" onChange={formik.handleChange}  placeholder="Nh???p d???ch v??? s??? d???ng" />
          <span className="color-red">*</span>L?? tr?????ng th??ng tin b???t bu???c 
        </div>
      </div>

      <div className="add-device-table-btn">
        <Button text={"H???y b???"} className="mt-5 add-device-cancel" type="submit"/>
        <Button text={"C???p nh???t"} className="btn-signin mt-5" type="submit" />
      </div> 
    </form>
  );
}

export default DeviceUpdateTable;