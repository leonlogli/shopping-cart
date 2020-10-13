import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

import { Box, H6 } from '../../../components'

const Title = styled(H6)`
  margin-top: 16px;
`

const FooterBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  > p {
    text-align: center;
    font-weight: 500;
    font-size: 15px;
  }
`

const MenuItemCardRoot = styled(Paper)`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

export { Title, MenuItemCardRoot, FooterBox }
