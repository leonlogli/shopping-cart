import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { MenuItemCard, MenuItem } from '../../menu'

import { LoadingBox, Text } from '../../../components'
import { ErrorPage } from '../../error'

import { ItemsBox } from './SearchResult.style'

import { searchMenus, searchResultSelector } from '../state'

export type ResultIemsBoxProps = {
  searchQuery?: string
  onMenuItemClick: (value: MenuItem) => void
  onMenuItemAdd: (value: MenuItem) => void
}

const ResultIemsBox = (props: ResultIemsBoxProps) => {
  const { searchQuery, onMenuItemClick, onMenuItemAdd } = props
  const { searchResult, loading, error } = useSelector(searchResultSelector)
  const dispatch = useDispatch()

  const handleSearch = (value: string) => {
    dispatch(searchMenus({ searchText: value }))
  }

  const handleMenuItemClick = (value: MenuItem) => () => {
    onMenuItemClick(value)
  }

  const handleMenuItemAdd = (value: MenuItem) => () => {
    onMenuItemAdd(value)
  }

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery)
    }
  }, [searchQuery])

  if (loading) return <LoadingBox height="200px" />

  if (error) return <ErrorPage error={error} />

  return (
    <>
      {searchResult.data.length > 0 && (
        <ItemsBox>
          {searchResult.data.map((menu) => {
            return (
              <MenuItemCard
                key={menu.id}
                title={menu.name}
                image={menu.image}
                price={menu.price}
                restaurant={menu.restaurant.name}
                description={menu.description}
                onClick={handleMenuItemClick(menu)}
                onAdd={handleMenuItemAdd(menu)}
              />
            )
          })}
        </ItemsBox>
      )}
      {searchResult.data.length === 0 && (
        <Text color="textSecondary">Aucun resultat trouvé.</Text>
      )}
    </>
  )
}

export { ResultIemsBox }
export default ResultIemsBox
