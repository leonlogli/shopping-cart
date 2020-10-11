import styled from 'styled-components'

import { Box } from '../../../components'

const NavBarBrandRoot = styled(Box)`
  a:first-child {
    line-height: 0;
  }

  a:nth-last-child(1) {
    color: inherit;
    margin-left: 10px;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
  }
`

export { NavBarBrandRoot }
export default NavBarBrandRoot
