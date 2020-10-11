import styled, { css } from 'styled-components'

import { Box } from '../Layout'
import { H6 } from '../Typography'

const RightContainer = styled.div.attrs(() => ({
  className: 'RightContainer',
}))`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  margin-left: 8px;
`

const Title = styled(H6).attrs(() => ({
  className: 'Title',
  noWrap: true,
}))``

const ToolBarRoot = styled(Box)`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    padding-left: ${theme.spacing(2)}px;
    padding-right: ${theme.spacing(2)}px;

    ${theme.breakpoints.up('sm')} {
      padding-left: ${theme.spacing(3)}px;
      padding-right: ${theme.spacing(3)}px;
    }
  `}

  > .MuiIconButton-root:first-child {
    margin-left: -12px;
    margin-right: 12px;

    ${({ theme }) => css`
      ${theme.breakpoints.up('sm')} {
        margin-right: ${theme.spacing(2)}px;
      }
    `}
  }
`

export { ToolBarRoot, RightContainer, Title }
export default ToolBarRoot
