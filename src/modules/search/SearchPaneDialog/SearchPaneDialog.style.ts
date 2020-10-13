import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'

const FullScreenDialogRoot = styled(Dialog).attrs({
  fullScreen: true,
  disableEnforceFocus: true,
  keepMounted: true,
})`
  .MuiBackdrop-root {
    background-color: transparent;
  }
`

export { FullScreenDialogRoot }
