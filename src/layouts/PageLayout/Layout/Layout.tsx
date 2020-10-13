import React, { useEffect } from 'react'
import Hidden from '@material-ui/core/Hidden'
import { useDispatch, useSelector } from 'react-redux'

import { PageLayoutRoot, Main } from './Layout.style'

import NavBar from '../NavBar'
import BottomNavBar from '../BottomNavBar'
import { Box, BoxProps, Logo } from '../../../components'
import Copyright from '../Copyright'

import { ErrorPage } from '../../../modules/error'
import {
  getRestaurants,
  restaurantsSelector,
} from '../../../modules/restaurant'

export type PageLayoutProps = BoxProps

/**
 * Base pages layout
 */
const PageLayout = ({ children, ...other }: PageLayoutProps) => {
  const dispatch = useDispatch()

  const { error, restaurants } = useSelector(restaurantsSelector)
  const hasRestoList = restaurants.length !== 0

  useEffect(() => {
    if (!hasRestoList) {
      dispatch(getRestaurants())
    }
  }, [])

  if (!hasRestoList) {
    return (
      <PageLayoutRoot {...other}>
        <Logo size="56" className="LoadingLogo" fill="gainsboro" />
      </PageLayoutRoot>
    )
  }

  if (error) {
    return <ErrorPage error={error} />
  }

  return (
    <PageLayoutRoot {...other}>
      <NavBar />
      <Main>{children}</Main>
      <Hidden smDown>
        <Box bgcolor="action.focus" padding={2} textAlign="center">
          <Copyright variant="body2" />
        </Box>
      </Hidden>
      <Hidden mdUp>
        <BottomNavBar />
      </Hidden>
    </PageLayoutRoot>
  )
}

export { PageLayout }
export default PageLayout
