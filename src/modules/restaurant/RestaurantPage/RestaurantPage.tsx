import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BoxProps } from '../../../components'
import RestaurantPageContainer from '../RestaurantPageContainer'
import { MenuItem, MenuItemDialog } from '../../menu'

import { RestaurantPageRoot, ImageContainer } from './RestaurantPage.style'

import { getRestaurant, restaurantEntriesSelector } from '../state'
import { addCartItem } from '../../cart'
import { useModal } from '../../../hooks'
import { ErrorPage } from '../../error'

export type RestaurantPageProps = BoxProps & {
  restaurantId: number
}

const RestaurantPage = ({ restaurantId, ...other }: RestaurantPageProps) => {
  const { restaurants, error } = useSelector(restaurantEntriesSelector)
  const dispatch = useDispatch()

  const { handleClose, open, handleOpen } = useModal()
  const [menuItem, setMenuItem] = useState<MenuItem>()

  const restaurant = restaurants[restaurantId]

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

  useEffect(() => {
    if (restaurantId) {
      dispatch(getRestaurant(restaurantId))
    }
  }, [dispatch])

  if (error) return <ErrorPage error={error} />

  return (
    <RestaurantPageRoot fullWidth {...other}>
      <ImageContainer {...({ image: restaurant.image } as any)} />
      <RestaurantPageContainer
        restaurantId={restaurantId}
        onMenuItemAdd={handleMenuItemAdd}
        onMenuItemClick={handleMenuItemClick}
      />
      <MenuItemDialog
        open={open}
        onClose={handleClose}
        item={menuItem as MenuItem}
      />
    </RestaurantPageRoot>
  )
}

export { RestaurantPage }
export default RestaurantPage
