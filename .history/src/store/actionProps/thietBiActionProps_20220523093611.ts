type LoadDuLieu = {
  type: 'LOAD_DU_LIEU',
  payload: any
}

type LayDuLieu = {
  type: 'LAY_DU_LIEU',
  payload: string
}

export type ActionProps = LoadDuLieu | LayDuLieu;