import { collection, getDocs } from "firebase/firestore";
import { Dispatch } from "redux";
import { db } from "../../firebase/config";
import { ActionProps } from "../actionProps/thietBiActionProps";

export const LoadDuLieu = () => async (dispatch: Dispatch<ActionProps>) => {
  try {
    // const accountRef = collection(db, 'taiKhoan');
    const result = await getDocs(collection(db,'thietBi'));
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

// Lấy dữ liệu
export const LayDuLieu = (id:string) => async (dispatch: Dispatch<ActionProps>) => {
  try {
    dispatch({
      type: 'LAY_DU_LIEU',
      payload: id
    })
  }
  catch(error) {
    console.log('Lỗi rồi');
  }
}