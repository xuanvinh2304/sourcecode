import React, { FC } from "react";
import "./AddDeviceTable.css";
import { Input, Select } from 'antd';
import Button from '../../../../components/UI/Button';
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebase/config";

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

const AddDeviceTable: FC = () => {
  const history = useHistory();

  const initialValues:initialValuesType = {
    maThietBi: '',
    tenThietBi: '',
    loaiThietBi: '',
    dichVuSuDung: '',
    tenDangNhap: '', 
    matKhau:  '',
    diaChiIP:  '', 
  }


  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (e:any) => {
      console.log(e);
      const add = async () => {
        const docRef = await addDoc(collection(db, "thietBi"), {
          maThietBi: `${formik.values.maThietBi}`,
          tenThietBi: `${formik.values.tenThietBi}`,
          loaiThietBi: `${formik.values.loaiThietBi}`,
          dichVuSuDung: `${formik.values.dichVuSuDung}`,
          tenDangNhap: `${formik.values.tenDangNhap}`, 
          matKhau:  `${formik.values.matKhau}`,
          diaChiIP:  `${formik.values.diaChiIP}`, 
        });
      }
      add();
    }
  });

  function handleChange(value: any) {
    console.log(value); 
    formik.setFieldValue('loaiThietBi', value.value);
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
            <Input className="add-device__input-hover" name="maThietBi" onChange={formik.handleChange} placeholder="Nhập mã thiết bị" />
            <p>Tên thiết bị: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover" name="tenThietBi" placeholder="Nhập tên thiết bị" onChange={formik.handleChange} />
            <p>Địa chỉ IP: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover" onChange={formik.handleChange} name="diaChiIP" placeholder="Nhập địa chỉ IP" />
          </div> 

          <div className="add-device-table__all-2">
            <p>Loại thiết bị: 
              <span className="color-red">*</span>
            </p> 
            <Select
              labelInValue
              value={{ value: 'Kiosk' }}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="Kiosk">Kiosk</Option>
              <Option value="Display counter">Display counter</Option>
            </Select>
            <p>Tên đăng nhập: 
              <span className="color-red">*</span>
            </p>
            <Input className="add-device__input-hover" name="tenDangNhap" onChange={formik.handleChange} placeholder="Nhập tài khoải" />
            <p>Mật khẩu: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover" name="matKhau"  onChange={formik.handleChange} placeholder="Nhập mật khẩu" />
          </div>
        </div>
        <div className="add-device-table__child">
          <p>Dịch vụ sử dụng: 
            <span className="color-red">*</span>
          </p>
          <Input className="input-last add-device__input-hover" onChange={formik.handleChange} name="dichVuSuDung" placeholder="Nhập dịch vụ sử dụng" />
          <span className="color-red">*</span>Là trường thông tin bắt buộc 
        </div>
      </div>

      <div className="add-device-table-btn">
        <Button text={"Hủy bỏ"} className="mt-5 add-device-cancel" type="submit" onClick={() => history.push('/device')} />
        <Button text={"Thêm thiết bị"} className="btn-signin mt-5" type="submit" />
      </div> 
    </form>
  );
}

export default AddDeviceTable;