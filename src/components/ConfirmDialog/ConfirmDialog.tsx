import React, { MouseEvent, ReactNode } from 'react'
import DialogContent from '@material-ui/core/DialogContent'
import { DialogProps } from '@material-ui/core/Dialog'

import { ConfirmDialogRoot, Title } from './ConfirmDialog.style'
import { DialogActions, DialogActionsProps } from '../DialogActions'

export type ConfirmDialogProps = Omit<DialogProps, 'children' | 'onClose'> &
  Omit<DialogActionsProps, 'children'> & {
    children: React.ReactNode
    title?: ReactNode
    /**
     * Callback fired when the component requests to be closed.
     */
    onClose?: () => void
  }

const ConfirmDialog = (props: ConfirmDialogProps) => {
  const {
    title,
    okText = 'OK',
    cancelText = 'Cancel',
    onClose = () => null,
    children,
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    ...other
  } = props

  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    if (onCancel) onCancel(e)
    onClose()
  }

  return (
    <ConfirmDialogRoot onClose={onClose} {...other}>
      {title && <Title id={other['aria-labelledby']}>{title}</Title>}
      <DialogContent>{children}</DialogContent>
      <DialogActions
        onCancel={handleCancel}
        cancelText={cancelText}
        okText={okText}
        onOk={onOk}
        okButtonProps={okButtonProps}
        cancelButtonProps={cancelButtonProps}
      />
    </ConfirmDialogRoot>
  )
}

export default ConfirmDialog
export { ConfirmDialog }
