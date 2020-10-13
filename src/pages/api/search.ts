import { NextApiRequest, NextApiResponse } from 'next'
import { paginate } from '.'
import { searchService } from '../../modules/search/state'

import { restaurants } from './restaurants'
import { cors } from './cors'
import { menuGroupsByResto, Menu } from './restaurants/[id]/menu-groups'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { q, pageNumber, pageSize },
  } = req

  await cors(req, res)

  switch (method) {
    case 'GET': {
      try {
        const data: Menu[] = []

        Object.entries(menuGroupsByResto).forEach(
          ([restaurantId, menuGroups]) => {
            const resto = restaurants.find((r) => r.id === Number(restaurantId))
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const { id, name, image } = resto!

            menuGroups.forEach((group) => {
              group.items.forEach((item: any) => {
                item.restaurant = { id, name, image }
              })
            })

            data.push(...[...data, ...menuGroups])
          }
        )

        const result = searchService.searchRestaurantMenus(
          q as string,
          data as any
        )

        return res.status(200).json({
          ...paginate(result, pageSize, pageNumber),
        })
      } catch (error) {
        return res.status(500).end()
      }
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
