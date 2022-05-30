import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer
});

export const store = createStore (
  rootReducer,
  // composeWithDevTools(applyMiddleware(thunk))
  applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof rootReducer>;

// export default store;