import { ActionProps } from '../actionProps/authActionProps';

const initialState: any = {
  authList: [],
  statusLogin: false,
}

export default (state = initialState, action: ActionProps) => {
  switch(action.type) {
    case 'LOAD_DU_LIEU': 
    {
      const data = action.payload;
      state.authList = data.docs.map((doc:any)=> ({...doc.data(), id: doc.id}));
      console.log('authList',state.authList);
      return {...state};
    }
    break;
    case 'DANG_NHAP': 
    {
      // Khi status === true thì đăng nhập thành công
    
      //Kiểm tra xem tên đăng nhập và mật khẩu nhập vào đúng không
      const tenDangNhap = action.payload.tenDangNhap;
      const matKhau = action.payload.matKhau;
      const result = state.authList.filter((account:any)=> (tenDangNhap === account.tenDangNhap && matKhau === account.matKhau));
      console.log(result)
      if(result[0].tenDangNhap !== undefined) {
        state.statusLogin = true; 
      }
      return {...state};
    }
    default: 
      return state;
  }
}