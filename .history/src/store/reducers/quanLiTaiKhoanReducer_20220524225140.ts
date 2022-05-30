import { ActionProps } from "../actionProps/quanLiTaiKhoanActionProps"

const initialState: any = {
  quanLiTaiKhoanList: [{}],
}

export default (state = initialState, action: ActionProps) => {
  switch(action.type) {
    case 'LOAD_DU_LIEU': 
    {
      const data = action.payload;
      state.quanLiTaiKhoanList = data.docs.map((doc:any)=> ({...doc.data(), id: doc.id}));
      console.log('quanLiTaiKhoanList',state.quanLiTaiKhoanList);
      return {...state};
    }
    break;
    default: return state;
  }
}