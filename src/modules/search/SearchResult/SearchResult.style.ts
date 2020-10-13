import styled, { css } from 'styled-components'

import { Box } from '../../../components'

const ItemsBox = styled(Box)`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  > .MenuItemCard {
    width: 100%;
    margin-bottom: 20px;
  }

  ${({ theme }) => css`
    ${theme.breakpoints.up('sm')} {
      margin-right: -16px;
      > .MenuItemCard {
        width: calc(100% / 2 - 16px);
        margin-right: 16px;
      }
    }

    ${theme.breakpoints.up('lg')} {
      margin-right: -16px;
      > .MenuItemCard {
        width: calc(100% / 3 - 16px);
        margin-right: 16px;
      }
    }
  `}
`

const ContentBox = styled(Box)`
  z-index: 2;
  flex-grow: 1;

  & > *:not(${ItemsBox}) {
    margin-bottom: 16px;
  }

  & > h6 {
    margin-top: 20px;
    margin-bottom: 8px !important;
  }
`

const SearchResultRoot = styled(Box)`
  padding: 16px;
  max-width: 1366px;
  margin: 0 auto;

  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      padding: 24px;
      margin-top: 8px;
    }

    ${theme.breakpoints.up('lg')} {
      display: flex;
    }
  `}
`

export { ItemsBox, SearchResultRoot, ContentBox }
