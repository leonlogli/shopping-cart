import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { BoxProps } from '../../../components'
import { addCartItem, ShoppingCartSideBox } from '../../cart'
import SearchBox from '../SearchBox'
import ResultIemsBox from './ResultItemsBox'

import { ContentBox, SearchResultRoot } from './SearchResult.style'

import { commonSuggestions, searchMenus } from '../state'
import { MenuItem, MenuItemDialog } from '../../menu'
import { useModal } from '../../../hooks'

export type SearchResultProps = BoxProps & {
  searchQuery?: string
}

const SearchResult = (props: SearchResultProps) => {
  const { searchQuery, ...other } = props
  const dispatch = useDispatch()

  const { handleClose, open, handleOpen } = useModal()
  const [menuItem, setMenuItem] = useState<MenuItem>()

  const handleSearch = (value: string) => {
    dispatch(searchMenus({ searchText: value }))
  }

  const handleMenuItemClick = (value: MenuItem) => {
    setMenuItem(value)
    handleOpen()
  }

  const handleMenuItemAdd = (item: MenuItem) => {
    const { options, ...value } = item

    if (options) {
      handleMenuItemClick(item)
    } else dispatch(addCartItem({ menuItem: value }))
  }

  return (
    <SearchResultRoot fullWidth {...other}>
      <ContentBox>
        <SearchBox
          suggestions={commonSuggestions}
          onSearch={handleSearch}
          naked
          elevation={1}
        />
        <ResultIemsBox
          searchQuery={searchQuery}
          onMenuItemAdd={handleMenuItemAdd}
          onMenuItemClick={handleMenuItemClick}
        />
      </ContentBox>
      <ShoppingCartSideBox />
      <MenuItemDialog
        open={open}
        onClose={handleClose}
        item={menuItem as MenuItem}
      />
    </SearchResultRoot>
  )
}

export { SearchResult }
export default SearchResult
