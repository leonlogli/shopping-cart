import styled from 'styled-components'

import { Box } from '../../../components'

const EmptyResultRoot = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  margin: -8px;
  flex-wrap: wrap;

  > p,
  .MuiButton-root {
    margin: 8px;
  }
`

export { EmptyResultRoot }
