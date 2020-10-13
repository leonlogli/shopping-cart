import styled from 'styled-components'

import { Box, H6 } from '../../../components'

const Title = styled(H6)`
  margin-bottom: 20px;
`

const LabelBox = styled(Box)`
  display: flex;
  margin: 8px 0;
  align-items: flex-start;

  > svg {
    margin-right: 24px;
  }

  &.openingHours > svg {
    margin-top: 12px;
    margin-right: 8px;
  }
`

const RestaurantDetailsRoot = styled(Box)`
  min-width: 212px;
  padding: 20px 16px;

  > hr {
    margin-top: 20px;
  }

  > p {
    white-space: pre-wrap;
  }
`

export { LabelBox, RestaurantDetailsRoot, Title }
