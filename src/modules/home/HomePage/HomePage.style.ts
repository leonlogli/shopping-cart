import styled, { css } from 'styled-components'

import { Box } from '../../../components'

const Body = styled(Box)`
  background: ${({ theme }) => theme.palette.background.paper};
  padding: 32px 0 32px 0;
  margin: 0 auto;
  margin-bottom: 32px;
  max-width: 1000px;

  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      padding: 16px 24px;
    }

    ${theme.breakpoints.up('lg')} {
      border-radius: 10px;
    }
  `}
`

const HomePageRoot = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 112px);
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url('https://images.unsplash.com/photo-1595430243277-34c931f7b59d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80');
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1595430243277-34c931f7b59d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')
      no-repeat center;
  background-size: cover;

  .SearchBox {
    margin-bottom: 20px;
  }

  .RestaurantCard {
    margin-bottom: 16px;
  }
`

export { Body, HomePageRoot }
