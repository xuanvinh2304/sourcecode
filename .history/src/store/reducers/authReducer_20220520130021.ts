import { ActionProps } from '../actionProps/authActionProps';
import { AuthAction, AuthState, SET_USER, SET_LOADING, SIGN_OUT, SET_ERROR, NEED_VERIFICATION, SET_SUCCESS } from '../types';

const initialState: any = {
  authList: [],
  statusLogin: false,
}

export default (state = initialState, action: ActionProps) => {
  switch(action.type) {
    // case SET_USER:
    //   return {
    //     ...state,
    //     user: action.payload,
    //     authenticated: true
    //   }
    // case SET_LOADING:
    //   return {
    //     ...state,
    //     loading: action.payload
    //   }
    // case SIGN_OUT:
    //   return {
    //     ...state,
    //     user: null,
    //     authenticated: false,
    //     loading: false
    //   }
    // case SET_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload
    //   }
    // case NEED_VERIFICATION:
    //   return {
    //     ...state,
    //     needVerification: true
    //   }
    // case SET_SUCCESS:
    //   return {
    //     ...state,
    //     success: action.payload
    //   }
    case 'LOAD_DU_LIEU': 
    {
      state.authList = action.payload;
      console.log(state);
      return {...state};
    }
    break;
    case 'DANG_NHAP': 
    {
      // Khi status === true thì đăng nhập thành công
    
      //Kiểm tra xem tên đăng nhập và mật khẩu nhập vào đúng không
      const tenDangNhap = action.payload.tenDangNhap;
      const matKhau = action.payload.matKhau;
    }
    default: 
      return state;
  }
}