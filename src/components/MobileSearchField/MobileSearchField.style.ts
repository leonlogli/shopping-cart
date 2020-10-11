import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import MuiClearIcon from '@material-ui/icons/Clear'

const Input = styled(InputBase)`
  margin-left: 16px;
  flex: 1;
`

const MobileSearchPaneRoot = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 56px;
  /* border-bottom: 1px solid ${({ theme }) => theme.palette.divider}; */
`

const ClearIcon = styled(MuiClearIcon)`
  margin: 0 12px;
  cursor: pointer;
`

export default MobileSearchPaneRoot
export { MobileSearchPaneRoot, Input, ClearIcon }
