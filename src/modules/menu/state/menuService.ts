import apiClient from '../../../api'
import { MenuGroup } from './menuSlice'

const getRestaurantMenus = async (restaurantId: number) => {
  return apiClient
    .get<MenuGroup[]>(`/restaurants/${restaurantId}/menu-groups`)
    .then((res) => {
      const menus = res.data

      menus.forEach((menuGroup) => {
        menuGroup.items.forEach((item) => {
          item.restaurantId = Number(restaurantId)
        })
      })

      return { menus, restaurantId }
    })
}

export const menuService = { getRestaurantMenus }

export default menuService
