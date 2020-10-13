import styled, { css } from 'styled-components'
import Paper from '@material-ui/core/Paper'
import RestaurantDetails from '../RestaurantDetails'

const HeaderTitlePaneRoot = styled(Paper)`
  padding: 16px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  box-shadow: 0 8px 6px -6px ${({ theme }) => theme.palette.divider};
  top: 0;
  z-index: 1;

  h6 {
    font-size: 20px;
  }

  .subTitleBox {
    display: flex;
    align-items: center;

    svg {
      font-size: 5px;
      margin: 0 8px;
    }
  }

  .Status {
    color: ${({ open }: any) => (!open ? '#d93025' : '#188038')};
  }
`

const RestaurantInfo = styled(RestaurantDetails)`
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      padding: 0;

      h6 {
        display: block;
      }
    }
  `}
`

export { HeaderTitlePaneRoot, RestaurantInfo }
