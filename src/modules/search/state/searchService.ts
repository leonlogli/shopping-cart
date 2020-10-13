import apiClient, { Page, PageInput } from '../../../api'
import { MenuGroup, MenuItem } from '../../menu/state'
import { SearchMenuItem, SearchMenuPayload } from './searchSlice'

export type SearchRestaurantMenuItem = MenuItem & {
  group: string
}

export type SearchMenuItemInput = PageInput & {
  searchText: string
}

export const textSearch = (data: string[], keyword: string) => {
  return data
    .filter((item) => {
      // Filter results by doing case insensitive match on name here
      return item.toLowerCase().includes(keyword.toLowerCase())
    })
    .sort((a, b) => {
      // Sort results by matching name with keyword position in name
      if (
        a.toLowerCase().indexOf(keyword.toLowerCase()) >
        b.toLowerCase().indexOf(keyword.toLowerCase())
      ) {
        return 1
      }

      if (
        a.toLowerCase().indexOf(keyword.toLowerCase()) <
        b.toLowerCase().indexOf(keyword.toLowerCase())
      ) {
        return -1
      }

      if (a > b) return 1

      return -1
    })
}

const searchRestaurantMenus = (
  value: string,
  menus: MenuGroup[]
): SearchRestaurantMenuItem[] => {
  const values = value.toLowerCase().split(' ').filter(Boolean)

  return menus
    .map((menuGroup) =>
      menuGroup.items.map((item) => ({ ...item, group: menuGroup.name }))
    )
    .reduce((a, b) => a.concat(b), [])
    .filter(({ name, group }) => {
      const menuKeyWords = name
        .toLowerCase()
        .split(' ')
        .concat(group.toLowerCase().split(' '))

      return menuKeyWords.some((menuKeyWord) =>
        values.some((val) => menuKeyWord.startsWith(val))
      )
    })
    .sort((a, b) => {
      if (
        a.name.toLowerCase().indexOf(value.toLowerCase()) >
        b.name.toLowerCase().indexOf(value.toLowerCase())
      ) {
        return 1
      }
      if (
        a.name.toLowerCase().indexOf(value.toLowerCase()) <
        b.name.toLowerCase().indexOf(value.toLowerCase())
      ) {
        return -1
      }
      if (a.name > b.name) return 1

      return -1
    })
}

const searchMenus = async (input: SearchMenuItemInput) => {
  try {
    const { searchText, pageNumber, pageSize } = input
    const response = await apiClient.get<Page<SearchMenuItem>>(
      `/search?q=${searchText}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    )
    const searchResult = response.data

    searchResult.data.forEach((item) => {
      item.restaurantId = item.restaurant.id
    })
    const payload: SearchMenuPayload = { searchResult, searchText }

    return payload
  } catch (err) {
    return err
  }
}

export const commonSuggestions = [
  'Tacos',
  'Burgers',
  'Sandwich',
  'Pizza',
  'Salads',
  'Dishes',
  'Panini',
]

export const searchService = {
  searchRestaurantMenus,
  searchMenus,
}

export default searchService
