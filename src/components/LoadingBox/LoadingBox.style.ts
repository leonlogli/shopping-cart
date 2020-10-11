import styled from 'styled-components'

import { Box } from '../Layout'

const LoadingBoxRoot = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .MuiCircularProgress-root {
    position: static;
  }
`

export { LoadingBoxRoot }
