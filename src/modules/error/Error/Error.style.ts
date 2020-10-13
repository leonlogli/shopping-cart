import styled from 'styled-components'

import { Box } from '../../../components'

const ActionBox = styled(Box)`
  margin: 32px 0 0;
  text-align: center;
`

const IconImage = styled.img`
  display: block;
  width: 250px;
  margin: auto;
  margin-bottom: 24px;
`

const ErrorRoot = styled(Box)`
  padding: 48px 32px;

  > p,
  > h6 {
    text-align: center;
    font-weight: 400;
  }

  > h6 {
    line-height: 1.8;
  }
`

export { ErrorRoot, ActionBox, IconImage }
export default ErrorRoot
