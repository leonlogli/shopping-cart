import React from 'react'
import Hidden from '@material-ui/core/Hidden'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import { PageLayoutRoot, Main } from './Layout.style'

import NavBar from '../NavBar'
import BottomNavBar from '../BottomNavBar'
import { Box, BoxProps } from '../../../components'
import Copyright from '../Copyright'

export type PageLayoutProps = BoxProps

/**
 * Base pages layout
 */
const PageLayout = ({ children, ...other }: PageLayoutProps) => {
  const trigger = useScrollTrigger()

  return (
    <PageLayoutRoot {...other}>
      <NavBar />
      <Main {...{ scroll: trigger }}>{children}</Main>
      <Hidden smDown>
        <Box bgcolor="gainsboro" padding={2} textAlign="center">
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
