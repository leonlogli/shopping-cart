import styled, { css } from 'styled-components'
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles'

const Input = styled(InputBase)`
  color: inherit;
  width: 100%;
  transform: scale(0);

  .MuiInputBase-input {
    width: 100%;

    ${({ theme }) => css`
      padding: ${theme.spacing(1, 0.5, 1, 2.5)};
      padding-right: 52px;
    `}
  }
`

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: relative;
  border: none;
  width: 0;
  border-radius: 40px;
  border: none;
  background-color: ${fade('#fff', 0.15)};
  transition: none;

  ${({ theme }) => css`
    ${theme.breakpoints.up('sm')} {
      transition: width 0.3s;
    }
  `}

  border-color: ${({ theme, naked }: any) =>
    naked ? 'transparent' : theme.palette.primary.main} !important;

  &:hover {
    background-color: ${fade('#fff', 0.25)};
  }

  > button {
    margin: 0 8px;
    padding: 8px;
    right: 0;
    position: absolute;
  }
`

const SearchFieldRoot = styled.div`
  min-width: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &.showed {
    ${ContentBox} {
      width: 100%;
      border: 1px solid;

      > button,
      > button:hover {
        background: transparent;
        cursor: text;
      }
    }

    ${Input} {
      transform: scale(1);
    }
  }
`

export { SearchFieldRoot, ContentBox, Input }
export default SearchFieldRoot
