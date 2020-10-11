import styled, { css } from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

const Title = styled(DialogTitle)`
  padding-top: 18px;
  padding-bottom: 2px;
`

const ConfirmDialogRoot = styled(Dialog)`
  .MuiDialogContent-root {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .MuiDialog-paper {
    min-width: 280px;
    ${({ maxWidth }) =>
      !maxWidth &&
      css`
        max-width: 560px;
      `}
  }
`

export { ConfirmDialogRoot, Title }
export default ConfirmDialogRoot
