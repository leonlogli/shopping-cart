import styled, { css } from 'styled-components'
import { darken } from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton'
import { Box } from '../Layout'

const ScrollBox = styled(Box)`
  display: flex;
  transition: margin ${({ scrollDuration }: any) => scrollDuration}ms;

  > * {
    z-index: 3;
  }

  /* smartphones, touchscreens */
  @media (hover: none) and (pointer: coarse) {
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  > * :not(:last-child) {
    margin-right: ${({ spacing }: any) => spacing};
  }
`
const NavIcon = styled(IconButton)`
  z-index: 4;
  position: absolute;
  background: ${({ theme }) => theme.palette.background.paper};
  display: none;
  top: calc(50% - 24px);

  &.Mui-disabled {
    background: ${({ theme }) => theme.palette.background.paper};
    color: inherit;
  }

  &:hover {
    background: ${({ theme }) => darken(theme.palette.background.paper, 0.1)};
  }

  /* smartphones, touchscreens */
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }

  ${({ show }: any) =>
    show &&
    css`
      display: inline-flex;
    `}
`

const LeftIcon = styled(NavIcon)``

const RightIcon = styled(NavIcon)`
  right: 0;
`

const InnerBox = styled(Box)`
  position: relative;
  overflow: hidden;
  user-select: none;
  width: 100%;
  height: 100%;
`

const ScrollViewRoot = styled(Box)``

export { ScrollViewRoot, InnerBox, ScrollBox, LeftIcon, RightIcon }
export default ScrollViewRoot
