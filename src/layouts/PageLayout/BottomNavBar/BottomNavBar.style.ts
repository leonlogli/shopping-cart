import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'

import { ResponsiveDialog } from '../../../components'

const BottomNavBarRoot = styled(AppBar)`
  top: auto;
  bottom: 0;
`

const ShoppingCartDialog = styled(ResponsiveDialog)``

export { BottomNavBarRoot, ShoppingCartDialog }
