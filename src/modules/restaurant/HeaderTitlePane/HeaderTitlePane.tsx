import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import IconButton from '@material-ui/core/IconButton'
import LensIcon from '@material-ui/icons/Lens'
import { PaperProps } from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'

import {
  H6,
  Box,
  Text,
  ResponsiveDialog,
  ZoomTransition,
  BottomSheet,
} from '../../../components'

import { HeaderTitlePaneRoot, RestaurantInfo } from './HeaderTitlePane.style'

import { useModal } from '../../../hooks'
import { Restaurant } from '../state'

export type HeaderTitlePaneProps = PaperProps & {
  restaurant: Restaurant
}

const HeaderTitlePane = ({ restaurant, ...other }: HeaderTitlePaneProps) => {
  const { handleClose, open, handleOpen } = useModal()

  const RestoInfo = (
    <RestaurantInfo
      text={restaurant.description}
      category={restaurant.category}
      open={restaurant.status.isOpen}
      statusText={restaurant.status.statusText}
      schedules={restaurant.schedule}
    />
  )

  return (
    <HeaderTitlePaneRoot
      elevation={0}
      {...{ open: restaurant.status.isOpen }}
      {...other}
    >
      <Box>
        <H6>{restaurant.name}</H6>
        <Text>{restaurant.category}</Text>
        <Box className="subTitleBox" color="text.secondary">
          <Text className="Status">
            {restaurant.status.isOpen ? 'Open' : 'Closed'}
          </Text>
          <LensIcon />
          <Text>{restaurant.status.statusText}</Text>
        </Box>
      </Box>
      <IconButton
        aria-label="restaurant more info"
        edge="end"
        onClick={handleOpen}
      >
        <InfoIcon />
      </IconButton>
      <Hidden smDown>
        <ResponsiveDialog
          open={open}
          onClose={handleClose}
          title={`${restaurant.name}`}
          aria-labelledby="resto-info-dialog-title"
          windowedTransition={ZoomTransition}
          keepMounted
        >
          {RestoInfo}
        </ResponsiveDialog>
      </Hidden>
      <Hidden mdUp>
        <BottomSheet
          open={open}
          transitionDuration={{ enter: 375, exit: 200 }}
          onClose={handleClose}
          keepMounted
        >
          {RestoInfo}
        </BottomSheet>
      </Hidden>
    </HeaderTitlePaneRoot>
  )
}

export { HeaderTitlePane }
export default HeaderTitlePane
