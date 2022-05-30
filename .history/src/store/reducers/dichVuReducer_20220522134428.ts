import { ActionProps } from "../actionProps/dichVuActionProps"

const initialState: any = {
  dichVuList: [{}],
}

export default (state = initialState, action: ActionProps) => {
  switch(action.type) {
    case 'LOAD_DU_LIEU': 
    {
      const data = action.payload;
      state.dichVuList = data.docs.map((doc:any)=> ({...doc.data(), id: doc.id}));
      console.log('dichVuList',state.dichVuList);
      return {...state};
    }
    break;
    default: return state;
  }
}