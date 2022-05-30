import React, { FC, useEffect, useState } from "react";
import "./DeviceUpdateTable.css";
import { Input, Select } from 'antd';
import Button from '../../../../components/UI/Button';
import { useHistory, useParams } from "react-router-dom";
import { MyParam } from "../../../../Interface/MyParm";
import { useDispatch } from "react-redux";
import { LayDuLieu } from "../../../../store/actions/thietBiAction";
import { useFormik } from "formik";

const { Option } = Select;
function handleChange(value: any) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

type initialValuesType = {
  maThietBi:string,
  tenThietBi:string,
  loaiThietBi:string,
  dichVuSuDung: [],
  tenDangNhap:string, 
  matKhau: string,
  diChiIP: string, 
}

const DeviceUpdateTable: FC = () => {
  const history = useHistory();

  const {id} = useParams<keyof MyParam>() as MyParam;

  const [infoThietBi, setInfoThietBi] = useState({

  });

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(LayDuLieu(id));
  })

  initialValues: 

  const formik = useFormik({
    initialValues,
  });

  return (
    <>
      <div className="add-device-table">
        <p className="add-device-table--title">Thông tin thiết bị</p>
        <div className="add-device-table__all">
          <div className="add-device-table__all-1">
            <p>Mã thiết bị: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover" placeholder="Nhập mã thiết bị" />
            <p>Tên thiết bị: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover" placeholder="Nhập tên thiết bị" />
            <p>Địa chỉ IP: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover" placeholder="Nhập địa chỉ IP" />
          </div> 

          <div className="add-device-table__all-2">
            <p>Loại thiết bị: 
              <span className="color-red">*</span>
            </p> 
            <Select
              labelInValue
              defaultValue={{ value: 'all' }}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="all">Kiosk</Option>
              <Option value="on">Display counter</Option>
            </Select>
            <p>Tên đăng nhập: 
              <span className="color-red">*</span>
            </p>
            <Input className="add-device__input-hover" placeholder="Nhập tài khoải" />
            <p>Mật khẩu: 
              <span className="color-red">*</span>
            </p> 
            <Input className="add-device__input-hover"  placeholder="Nhập mật khẩu" />
          </div>
        </div>
        <div className="add-device-table__child">
          <p>Dịch vụ sử dụng: 
            <span className="color-red">*</span>
          </p>
          <Input className="input-last add-device__input-hover" placeholder="Nhập dịch vụ sử dụng" />
          <span className="color-red">*</span>Là trường thông tin bắt buộc 
        </div>
      </div>

      <div className="add-device-table-btn">
        <Button text={"Hủy bỏ"} className="mt-5 add-device-cancel" type="submit" onClick={() => history.push('/device')} />
        <Button text={"Cập nhật"} className="btn-signin mt-5" type="submit" />
      </div> 
    </>
  );
}

export default DeviceUpdateTable;