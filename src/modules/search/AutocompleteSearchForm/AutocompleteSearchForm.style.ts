import styled, { css } from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'

import { Box } from '../../../components'

const MenuPane = styled(Paper)`
  overflow: hidden;
  margin: 4px 0;
  border: 1px solid #ccc;
  border-top: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`

const MenuPopper = styled(Popper)`
  z-index: 15;
`

const ContentBox = styled(Box)`
  position: relative;

  .SearchField,
  > button {
    position: absolute;
    right: 0;
    top: auto;
    bottom: auto;
  }
`

const Entry = styled.li`
  min-height: 40px;
  display: flex;
  font-size: 16px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 6px 16px;
  outline: 0;

  &:hover {
    background: ${({ theme }) => theme.palette.action.hover};
  }
`

const EntryBox = styled.ul`
  list-style: none;
  margin: 0;
  padding: 8px 0;
  max-height: 40vh;
  overflow: auto;
`

const AutocompleteSearchFormRoot = styled.form`
  ${({ open }: any) =>
    open &&
    css`
      width: 100%;
    `}
`

export {
  AutocompleteSearchFormRoot,
  MenuPane,
  Entry,
  EntryBox,
  MenuPopper,
  ContentBox,
}

export default AutocompleteSearchFormRoot
