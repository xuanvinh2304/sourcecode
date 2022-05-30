import { ActionProps } from "../actionProps/nhatKiNguoiDungActionProps"

const initialState: any = {
  nhatKiNguoiDungList: [{}],
}

export default (state = initialState, action: ActionProps) => {
  switch(action.type) {
    case 'LOAD_DU_LIEU': 
    {
      const data = action.payload;
      state.nhatKiNguoiDungList = data.docs.map((doc:any)=> ({...doc.data(), id: doc.id}));
      console.log('nhatKiNguoiDungList',state.nhatKiNguoiDungList);
      return {...state};
    }
    break;
    default: return state;
  }
}