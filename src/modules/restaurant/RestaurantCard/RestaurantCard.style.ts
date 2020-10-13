import styled, { css } from 'styled-components'
import CardActionArea from '@material-ui/core/CardActionArea'

import { Text, H6, Box } from '../../../components'

const Info = styled(Box)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  background: rgba(0, 0, 0, 0.8);
  color: gainsboro;
  padding: 8px 12px;
  border-radius: 25px;
`

const Title = styled(H6)`
  margin: 8px auto;
  margin-top: 4.5%;
  width: calc(100% - 24px);
  text-align: center;
  padding: 12px;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  font-size: 14px;
  background: ${({ theme }) => theme.palette.background.paper};
  text-transform: uppercase;
  border-radius: 25px;
  max-width: 400px;
`

const ContentBox = styled(CardActionArea)`
  display: flex;
  align-items: flex-start;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-grow: 1;
  border-radius: 25px;
  margin-bottom: 8px;

  ${({ image }: any) => css`
    background-image: url(${image});
  `}
`

const StatusText = styled(Text)`
  font-size: 15px;
  font-weight: 600;
  text-align: center;

  ${({ open, theme }: any) => css`
    color: ${!open ? theme.palette.error.main : theme.palette.primary.main};
  `}
`

const RestaurantCardRoot = styled(Box)`
  border-radius: 25px;
  min-width: 200px;
`

export { Title, ContentBox, RestaurantCardRoot, Info, StatusText }
