import { cors } from './cors'

export function paginate(array, _pageSize, _pageNumber) {
  const pageNumber = Number(_pageNumber) || 1
  const pageSize = Number(_pageSize) || 20

  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  const data = array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)

  const page = {
    number: pageNumber,
    totalElements: array.length,
    size: pageSize,
    totalPages: Math.ceil(data.length / Number(pageSize)),
  }

  return { page, data }
}

export default async function handler(req, res) {
  await cors(req, res)

  res.status(200).json('Shopping Cart')
}
