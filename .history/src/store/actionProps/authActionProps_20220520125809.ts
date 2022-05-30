type LoadDuLieu = {
  type: 'LOAD_DU_LIEU',
  payload: any
}

type DangNhap = {
  type: 'DANG_NHAP',
  payload:  {
    tenDangNhap: string,
    matKhau: string
  }
}


export type ActionProps = LoadDuLieu | DangNhap;