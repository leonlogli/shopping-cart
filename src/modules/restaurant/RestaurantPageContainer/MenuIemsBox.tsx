import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box, BoxProps, H6, LoadingBox, Text } from '../../../components'
import { ErrorPage } from '../../error'
import {
  MenuItemCard,
  MenuItem,
  menusSelector,
  getRestaurantMenus,
} from '../../menu'

import { ItemsBox } from './RestaurantPageContainer.style'

export type MenuIemsBoxProps = BoxProps & {
  restaurantId: number
  onMenuItemClick: (value: MenuItem) => void
  onMenuItemAdd: (value: MenuItem) => void
}

const MenuIemsBox = (props: MenuIemsBoxProps) => {
  const { onMenuItemClick, onMenuItemAdd, restaurantId, ...other } = props
  const dispatch = useDispatch()
  const { menusByRestaurant, loading, error } = useSelector(menusSelector)
  const restaurantMenus = menusByRestaurant[restaurantId]

  const handleMenuItemClick = (value: MenuItem) => () => {
    onMenuItemClick(value)
  }

  const handleMenuItemAdd = (value: MenuItem) => () => {
    onMenuItemAdd(value)
  }

  useEffect(() => {
    if (restaurantId) {
      dispatch(getRestaurantMenus(restaurantId))
    }
  }, [restaurantId, dispatch])

  if (error) return <ErrorPage error={error} />

  if (loading) return <LoadingBox height="100px" />

  if (!restaurantMenus || restaurantMenus.length === 0) {
    return (
      <Box {...other}>
        <Text>Ce restaurant ne dispose encore d'aucun menu</Text>
      </Box>
    )
  }

  return (
    <Box {...other}>
      {restaurantMenus.map((menuGroup) => (
        <Fragment key={menuGroup.name}>
          {menuGroup.name && <H6>{menuGroup.name}</H6>}
          <ItemsBox>
            {menuGroup.items.map((item) => (
              <MenuItemCard
                key={item.id}
                title={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
                onClick={handleMenuItemClick(item)}
                onAdd={handleMenuItemAdd(item)}
              />
            ))}
          </ItemsBox>
        </Fragment>
      ))}
    </Box>
  )
}

export { MenuIemsBox }
export default MenuIemsBox
