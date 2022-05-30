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
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase/config";

const { Option } = Select;
type initialValuesType = {
  maThietBi: string,
  tenThietBi: string,
  loaiThietBi: string,
  dichVuSuDung: string,
  tenDangNhap: string, 
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
    // console.log('thiết bị',thietBiInfo);
    // if(`${thietBiInfo[0].maThietBi}` === undefined) {
      setInfoThietBi({  
        maThietBi: `${thietBiInfo['0'].maThietBi}`,
        tenThietBi: `${thietBiInfo.tenThietBi}`,
        loaiThietBi: `${thietBiInfo.loaiThietBi}`,
        dichVuSuDung: `${thietBiInfo.dichVuSuDung}`,
        tenDangNhap: `${thietBiInfo.tenDangNhap}`, 
        matKhau:  `${thietBiInfo.matKhau}`,
        diaChiIP:  `${thietBiInfo.diaChiIP}`, 
      })
    // }
  }, [thietBiInfo]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (e:any) => {
      console.log(e);
      const thietBiRef = doc(db, "thietBi", `${id}`);

      const update = async () => {
        // Set the "capital" field of the city 'DC'
        await updateDoc(thietBiRef, {
          maThietBi: `${formik.values.maThietBi}`,
          tenThietBi: `${formik.values.tenThietBi}`,
          loaiThietBi: `${formik.values.loaiThietBi}`,
          dichVuSuDung: `${formik.values.dichVuSuDung}`,
          tenDangNhap: `${formik.values.tenDangNhap}`, 
          matKhau:  `${formik.values.matKhau}`,
          diaChiIP:  `${formik.values.diaChiIP}`, 
        });
        history.push('/device')
      }
      update();
    }
  });

  function handleChange(value: any) {
    console.log(value); 
    formik.setFieldValue('loaiThietBi',value.value);
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="add-device-table">
        <p className="add-device-table--title">Thông tin thiết bị</p>
        <div className="add-device-table__all">
          <div className="add-device-table__all-1">
            <p>Mã thiết bị: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover" value={formik.values.maThietBi} name="maThietBi" onChange={formik.handleChange} placeholder="Nhập mã thiết bị" />
            <p>Tên thiết bị: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover" value={formik.values.tenThietBi} name="tenThietBi" onChange={formik.handleChange} placeholder="Nhập tên thiết bị" />
            <p>Địa chỉ IP: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover" value={formik.values.diaChiIP} name="diaChiIP" onChange={formik.handleChange}  placeholder="Nhập địa chỉ IP" />
          </div> 

          <div className="add-device-table__all-2">
            <p>Loại thiết bị: 
              <span className="color-red">*</span>
            </p> 
            <Select
              labelInValue
              // defaultValue={{ value: 'all' }}
              value = {{value: `${formik.values.loaiThietBi}`}}
              style={{ width: 120 }}
              onChange={handleChange} 
            >
              <Option value="kiosk">Kiosk</Option>
              <Option value="display counter">Display counter</Option>
            </Select>
            <p>Tên đăng nhập: 
              <span className="color-red">*</span>
            </p>
            <Input className="add-device__input-hover" value={formik.values.tenDangNhap} name="tenDangNhap" onChange={formik.handleChange}  placeholder="Nhập tài khoải" />
            <p>Mật khẩu: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover" value={formik.values.matKhau} name="matKhau" onChange={formik.handleChange}   placeholder="Nhập mật khẩu" />
          </div>
        </div>
        <div className="add-device-table__child">
          <p>Dịch vụ sử dụng: 
            <span className="color-red">*</span>
          </p>
          <Input className="input-last add-device__input-hover" value={formik.values.dichVuSuDung} name="dichVuSuDung" onChange={formik.handleChange}  placeholder="Nhập dịch vụ sử dụng" />
          <span className="color-red">*</span>Là trường thông tin bắt buộc 
        </div>
      </div>

      <div className="add-device-table-btn">
        <Button text={"Hủy bỏ"} className="mt-5 add-device-cancel" onClick={()=> {
          history.goBack();
        }}/>
        <Button text={"Cập nhật"} className="btn-signin mt-5" type="submit" />
      </div> 
    </form>
  );
}

export default DeviceUpdateTable;