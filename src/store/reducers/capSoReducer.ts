import { ActionProps } from "../actionProps/capSoActionProps"

const initialState: any = {
  capSoList: [{}],
}

export default (state = initialState, action: ActionProps) => {
  switch(action.type) {
    case 'LOAD_DU_LIEU': 
    {
      const data = action.payload;
      state.capSoList = data.docs.map((doc:any)=> ({...doc.data(), id: doc.id}));
      console.log('capSoList',state.capSoList);
      return {...state};
    }
    break;
    default: return state;
  }
}