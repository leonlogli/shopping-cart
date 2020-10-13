import { NextApiRequest, NextApiResponse } from 'next'

import { Restaurant } from '../../../modules/restaurant/state'

import { restaurants as restoData } from '../../../../data/restaurants'
import { cors } from '../cors'

// Fake resto data
export const restaurants = restoData as Omit<Restaurant, 'menus' | 'status'>[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req

  await cors(req, res)

  switch (method) {
    case 'GET': {
      return res.status(200).json(restaurants)
    }
    case 'POST': {
      const random = Math.floor(Math.random() * 3)

      return res.status(201).json({ ...restaurants[random], ...body })
    }
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
