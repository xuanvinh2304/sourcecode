import { ActionProps } from "../actionProps/thietBiActionProps"

const initialState: any = {
  thietBiList: [{}],
  thietBiInfo: {},
}

export default (state = initialState, action: ActionProps) => {
  switch(action.type) {
    case 'LOAD_DU_LIEU': 
    {
      const data = action.payload;
      state.thietBiList = data.docs.map((doc:any)=> ({...doc.data(), id: doc.id}));
      console.log('thietBiList',state.thietBiList);
      return {...state};
    }
    break;
    case 'LAY_DU_LIEU': {
      
    }
    break;
    default: return state;
  }
}