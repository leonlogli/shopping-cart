import styled, { css } from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

const Title = styled(DialogTitle)`
  padding-top: 18px;
  padding-bottom: 2px;
`

const ResponsiveDialogRoot = styled(Dialog)`
  .MuiDialogContent-root:last-child {
    margin-bottom: 16px;

    ${({ fullScreen }) =>
      fullScreen &&
      css`
        padding-left: 16px;
        padding-right: 16px;
      `}
  }

  .MuiDialog-paper {
    min-width: 280px;

    ${({ maxWidth, fullScreen }) =>
      !maxWidth &&
      !fullScreen &&
      css`
        width: 100%;
        max-width: 600px;
      `}
  }
`

export { ResponsiveDialogRoot, Title }
export default ResponsiveDialogRoot
