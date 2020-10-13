import { NextApiRequest, NextApiResponse } from 'next'

import { restaurants } from '..'
import { cors } from '../../cors'

import menuGroupsByRestoData from '../../../../../data/menuGroupsByResto.json'
import { MenuGroup, MenuItem } from '../../../../modules/menu/state'

export type Menu = Omit<MenuGroup, 'items'> & {
  items: Omit<MenuItem, 'restaurantId'>[]
}

// Fake resto menu data
export const menuGroupsByResto = menuGroupsByRestoData as Record<number, Menu[]>

export default async function restoHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req

  await cors(req, res)

  switch (method) {
    case 'GET': {
      const resto = restaurants.find((r) => r.id === Number(id))

      if (!resto) {
        return res.status(404).json({ message: 'Not Found' })
      }
      const menus = menuGroupsByResto[resto.id] || []

      return res.status(200).json(menus)
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
