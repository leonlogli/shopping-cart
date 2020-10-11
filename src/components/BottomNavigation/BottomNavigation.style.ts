import styled from 'styled-components'
import BottomNavigation from '@material-ui/core/BottomNavigation'

const BottomNavigationRoot = styled(BottomNavigation)`
  width: 100%;
  max-width: 767px;
  background: ${({ theme }) => theme.palette.primary.main};

  .MuiBottomNavigationAction-root {
    color: whitesmoke;

    &.Mui-selected {
      color: white;
    }
  }
`

export { BottomNavigationRoot }
