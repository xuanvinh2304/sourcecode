type LoadDuLieu = {
  type: 'LOAD_DU_LIEU',
  payload: any
}

type DangNhap = {
  type: 'DANG_NHAP',
  payload: any
}


export type ActionProps = LoadDuLieu | DangNhap;