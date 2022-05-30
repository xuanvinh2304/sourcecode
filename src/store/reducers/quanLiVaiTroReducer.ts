import { ActionProps } from "../actionProps/quanLiVaiTroActionProps"

const initialState: any = {
  quanLiVaiTroList: [{}],
}

export default (state = initialState, action: ActionProps) => {
  switch(action.type) {
    case 'LOAD_DU_LIEU': 
    {
      const data = action.payload;
      state.quanLiVaiTroList = data.docs.map((doc:any)=> ({...doc.data(), id: doc.id}));
      console.log('quanLiVaiTroList',state.quanLiVaiTroList);
      return {...state};
    }
    break;
    default: return state;
  }
}