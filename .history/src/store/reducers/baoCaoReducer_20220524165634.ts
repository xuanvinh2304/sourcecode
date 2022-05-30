import { ActionProps } from "../actionProps/baoCaoActionProps"

const initialState: any = {
  baoCaoList: [{}],
}

export default (state = initialState, action: ActionProps) => {
  switch(action.type) {
    case 'LOAD_DU_LIEU': 
    {
      const data = action.payload;
      state.baoCaoList = data.docs.map((doc:any)=> ({...doc.data(), id: doc.id}));
      console.log('baoCaoList',state.baoCaoList);
      return {...state};
    }
    break;
    default: return state;
  }
}