import styled, { css } from 'styled-components'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import { Box } from '../../../components'

const SuggestionsBox = styled(Box)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: -8px;
  transition: visibility 0s, opacity 0.1s linear;
  visibility: visible;
  opacity: 1;
  height: unset;
  margin-left: 16px;

  ${({ showSuggestions }: any) =>
    !showSuggestions &&
    css`
      visibility: hidden;
      opacity: 0;
      height: 0;
      width: 0;
    `}
`

const RoundButton = styled(Button).attrs({
  variant: 'outlined',
  size: 'small',
})`
  border-radius: 28px;
  text-transform: none;
  margin-right: 8px;
  margin-bottom: 8px;
  border-color: ${({ theme }) => theme.palette.primary.main};
`

const SearchBoxRoot = styled(Paper)`
  display: flex;
  width: 100%;
  align-items: center;
  min-height: 48px;
  justify-content: flex-end;
  flex-wrap: wrap;
  transition: padding-top 0.3s, padding-bottom 0.3s;
  padding: 8px 0 8px 0;
`

export { SuggestionsBox, SearchBoxRoot, RoundButton }
