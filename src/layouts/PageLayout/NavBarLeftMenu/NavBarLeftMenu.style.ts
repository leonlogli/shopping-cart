import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import styled from 'styled-components'

const RestoPopper = styled(Popper)`
  z-index: 2;
`

const MenuPane = styled(Paper)`
  position: relative;
  bottom: -12px;
  z-index: 2;
`

const MenuContainer = styled.ul`
  display: flex;
  margin: 0;
  height: 100%;

  li {
    margin: 0 ${({ theme }) => theme.spacing(2)}px;
  }
`

export { MenuContainer, MenuPane, RestoPopper }
