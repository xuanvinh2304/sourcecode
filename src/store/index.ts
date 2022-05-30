import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reducers/authReducer';
import thietBiReducer from './reducers/thietBiReducer';
import dichVuReducer from './reducers/dichVuReducer';
import capSoReducer from './reducers/capSoReducer';
import baoCaoReducer from './reducers/baoCaoReducer';
import quanLiVaiTroReducer from './reducers/quanLiVaiTroReducer';
import quanLiTaiKhoanReducer from './reducers/quanLiTaiKhoanReducer';
import nhatKiNguoiDungReducer from './reducers/nhatKiNguoiDungReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  thietBi: thietBiReducer,
  dichVu: dichVuReducer,
  capSo: capSoReducer,
  baoCao: baoCaoReducer,
  quanLiVaiTro: quanLiVaiTroReducer,
  quanLiTaiKhoan: quanLiTaiKhoanReducer,
  nhatKiNguoiDung: nhatKiNguoiDungReducer,
});

export const store = createStore (
  rootReducer,
  // composeWithDevTools(applyMiddleware(thunk))
  applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof rootReducer>;

// export default store;