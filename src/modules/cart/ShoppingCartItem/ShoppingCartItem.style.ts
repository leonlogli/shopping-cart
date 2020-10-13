import styled from 'styled-components'

import { Box, Text } from '../../../components'

const Title = styled(Text)`
  font-size: 19px;
  margin-right: 16px;
  line-height: 1.2;
  margin-bottom: 2px;
`

const ContentBox = styled(Box)`
  > p {
    margin-right: 8px;
  }

  .MuiButton-text {
    padding: 0;
  }
`

const ShoppingCartItemRoot = styled(Box)`
  min-width: 280px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .subTitleBox {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .subTitleBox > svg {
    margin: 0 8px;
    font-size: 5px;
  }

  .subTitleBox span {
    font-size: 15px;
    line-height: 20px;
  }
`

export { Title, ShoppingCartItemRoot, ContentBox }
