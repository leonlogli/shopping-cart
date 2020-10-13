import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import { Box, H6 } from '../../../components'

const Title = styled(H6)`
  margin-bottom: 20px;
`

const OrderButton = styled(Button)`
  border-radius: 36px;
  margin: auto;
  display: block;
  box-shadow: none;
  width: 100%;
  max-width: 400px;
`

const TotalCountBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 16px 0;

  p {
    font-weight: 600;
  }

  > p:last-child {
    margin-left: 4px;
  }
`

const ShoppingCartRoot = styled(Paper)`
  width: 100%;
  padding: 16px 20px;

  > hr {
    margin: 16px 0;
  }

  .ShoppingCartIcon {
    font-size: 200px;
    margin: auto;
    width: 100%;
    color: rgba(0, 0, 0, 0.3);
  }

  .EmptyText {
    text-align: center;
  }
`

export { Title, TotalCountBox, ShoppingCartRoot, OrderButton }
