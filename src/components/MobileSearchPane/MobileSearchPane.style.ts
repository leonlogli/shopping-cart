import styled from 'styled-components'

import { Box } from '../Layout'

const MobileSearchPaneRoot = styled(Box)`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.palette.background.paper};
`

export default MobileSearchPaneRoot
export { MobileSearchPaneRoot }
