import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reducers/authReducer';
import thietBiReducer from './reducers/thietBiReducer';
import dichVuReducer from './reducers/dichVuReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  thietBi: thietBiReducer,
  dichVu: dichVuReducer,
});

export const store = createStore (
  rootReducer,
  // composeWithDevTools(applyMiddleware(thunk))
  applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof rootReducer>;

// export default store;