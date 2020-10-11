import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'

const FullscreenDialogHeaderRoot = styled(AppBar)`
  margin-bottom: 8px;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);

  nav {
    min-height: 56px;
  }
`

export { FullscreenDialogHeaderRoot }
