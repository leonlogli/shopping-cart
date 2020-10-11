import styled from 'styled-components'

import { Box } from '..'

const CountButtonRoot = styled(Box)`
  background: #00000066;
  color: white;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 6px;
    margin: 0 8px;
  }

  svg {
    font-size: 16px;
  }
`

export { CountButtonRoot }
