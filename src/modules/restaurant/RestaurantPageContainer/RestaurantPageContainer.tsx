import React, { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'

import MenuIemsBox, { MenuIemsBoxProps } from './MenuIemsBox'
import { HeaderTitlePane } from '../HeaderTitlePane'
import ShoppingCartSideBox from '../../cart/ShoppingCartSideBox'

import {
  RestaurantPageContainerRoot,
  ContentBox,
} from './RestaurantPageContainer.style'

import { restaurantEntriesSelector } from '../state'
import { SearchBox } from '../../search'
import { menusSelector } from '../../menu'
import SearchResultBox from './SearchResultBox'

export type RestaurantPageContainerProps = MenuIemsBoxProps & {
  restaurantId: number
}

const RestaurantPageContainer = (props: RestaurantPageContainerProps) => {
  const { restaurantId, onMenuItemAdd, onMenuItemClick, ...other } = props

  const { restaurants } = useSelector(restaurantEntriesSelector)
  const { menusByRestaurant } = useSelector(menusSelector)

  const restaurant = restaurants[restaurantId]
  const restaurantMenus = menusByRestaurant[restaurantId]

  const [searchText, setSearchText] = useState('')
  const hasSearch = searchText && searchText.trim()

  const handleSearch = (value: string) => {
    setSearchText(value)
  }

  const handleReset = () => {
    setSearchText('')
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  return (
    <RestaurantPageContainerRoot {...other}>
      <ContentBox {...{ hasSearch }}>
        <HeaderTitlePane restaurant={restaurant} />
        <SearchBox
          disableAutocomplete
          suggestions={restaurantMenus?.map((m) => m.name)}
          onSearch={handleSearch}
          onChange={handleSearchChange}
          naked
          elevation={1}
        />
        <SearchResultBox
          className="SearchResultBox"
          onMenuItemAdd={onMenuItemAdd}
          onMenuItemClick={onMenuItemClick}
          onReset={handleReset}
          restaurantId={restaurantId}
          searchText={searchText}
        />
        <MenuIemsBox
          className="MenuIemsBox"
          onMenuItemAdd={onMenuItemAdd}
          onMenuItemClick={onMenuItemClick}
          restaurantId={restaurantId}
        />
      </ContentBox>
      <ShoppingCartSideBox />
    </RestaurantPageContainerRoot>
  )
}

export { RestaurantPageContainer }
export default RestaurantPageContainer
