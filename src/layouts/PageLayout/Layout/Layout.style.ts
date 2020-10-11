import styled, { css } from 'styled-components'

import { Box } from '../../../components'

const Main = styled.main`
  flex: 1 0 auto;

  ${({ theme, scroll }: any) =>
    css`
      ${theme.breakpoints.down('sm')} {
        > div:last-child {
          padding-bottom: ${!scroll ? '72px' : 0};
        }
      }
    `}
`

const PageLayoutRoot = styled(Box)`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;

  ${({ theme }) =>
    css`
      ${theme.breakpoints.up('md')} {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    `}

  > .LoadingLogo {
    position: fixed;
    top: calc(50% - 28px);
    left: calc(50% - 28px);
  }
`

export { PageLayoutRoot, Main }
