import React from 'react'
import { useSelector } from 'react-redux'

import { MenuItemCard, MenuItem, menusSelector } from '../../menu'

import EmptyResult from '../EmptyResult'
import { BoxProps } from '../../../components'

import { ItemsBox } from './RestaurantPageContainer.style'

import { searchService } from '../../search'

export type SearchResultBoxProps = BoxProps & {
  restaurantId: number
  searchText: string
  onMenuItemClick: (value: MenuItem) => void
  onMenuItemAdd: (value: MenuItem) => void
  onReset?: () => void
}

const SearchResultBox = (props: SearchResultBoxProps) => {
  const {
    searchText,
    onMenuItemClick,
    onMenuItemAdd,
    onReset,
    restaurantId,
    ...other
  } = props

  const { menusByRestaurant } = useSelector(menusSelector)
  const restaurantMenus = menusByRestaurant[restaurantId]

  const searchResult =
    restaurantMenus &&
    searchService.searchRestaurantMenus(searchText, restaurantMenus)

  const handleMenuItemClick = (value: MenuItem) => () => {
    onMenuItemClick(value)
  }

  const handleMenuItemAdd = (value: MenuItem) => () => {
    onMenuItemAdd(value)
  }

  if (!searchResult || searchResult.length === 0) {
    return <EmptyResult {...other} onReset={onReset} />
  }

  return (
    <ItemsBox {...other}>
      {searchResult.map((menu) => (
        <MenuItemCard
          key={menu.id}
          title={menu.name}
          image={menu.image}
          price={menu.price}
          description={menu.description}
          onClick={handleMenuItemClick(menu)}
          onAdd={handleMenuItemAdd(menu)}
        />
      ))}
    </ItemsBox>
  )
}

export { SearchResultBox }
export default SearchResultBox
