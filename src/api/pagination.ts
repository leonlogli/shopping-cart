export type PageInfo = {
  size: number
  totalElements: number
  totalPages: number
  number: number
}

export type PageInput = {
  pageSize?: number
  pageNumber?: number
}

type ApiData = {
  id: number
}

export type Page<T extends ApiData = ApiData> = {
  data: T[]
  page: PageInfo
}
