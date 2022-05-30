import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { Dispatch } from 'redux';
import { ActionProps } from '../actionProps/authActionProps';

export const LoadDuLieu = () => async (dispatch: Dispatch<ActionProps>) => {
    try {
      // const accountRef = collection(db, 'taiKhoan');
      const result = await getDocs(collection(db,'taiKhoan'));
      console.log(result);
      dispatch({
        type: 'LOAD_DU_LIEU',
        payload: result
      })
    }
    catch(error) {
      console.log('Lỗi rồi!');
    }
}

// Đăng nhập
export const DangNhap = (tenDangNhap: string, matKhau: string) => async (dispatch: Dispatch<ActionProps>) => {
  try {
      dispatch({
        type: 'DANG_NHAP',
        payload: {
          tenDangNhap: tenDangNhap,
          matKhau: matKhau,
        }
      })
  }
  catch(error) {
    console.log('Lỗi rồi')
  }
}