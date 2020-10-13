import { NextApiRequest, NextApiResponse } from 'next'

import { restaurants } from '..'
import { cors } from '../../cors'

export default async function restoHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    body,
    method,
  } = req

  await cors(req, res)

  switch (method) {
    case 'GET': {
      // Get data from your database
      const resto = restaurants.find((r) => r.id === Number(id))

      if (!resto) {
        return res.status(404).json({ message: 'Not Found' })
      }

      return res.status(200).json(resto)
    }
    case 'PUT': {
      const resto = restaurants.find((r) => r.id === Number(id))

      if (!resto) {
        return res.status(404).json({ message: 'Not Found' })
      }

      return res.status(200).json({ ...resto, ...body })
    }
    case 'DELETE': {
      const resto = restaurants.find((r) => r.id === Number(id))

      if (!resto) {
        return res.status(404).json({ message: 'Not Found' })
      }

      return res.status(200).json({ ...resto, ...body })
    }
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
