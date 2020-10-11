import React, { MouseEvent } from 'react'
import { DialogActionsProps as MuiDialogActionsProps } from '@material-ui/core/DialogActions'
import Button, { ButtonProps } from '@material-ui/core/Button'

import DialogActionsRoot from './DialogActions.style'

export type DialogActionsProps = MuiDialogActionsProps & {
  /**
   * The text of the Cancel button	string
   */
  cancelText?: string
  /**
   * The text of the Confirm button
   */
  okText?: string
  /**
   * A callback of ok button
   */
  onOk?: (event: MouseEvent<HTMLButtonElement>) => void
  okButtonProps?: Omit<ButtonProps, 'onClick'>
  cancelButtonProps?: Omit<ButtonProps, 'onClick'>
  /**
   * A callback of cancel button
   */
  onCancel?: (event: MouseEvent<HTMLButtonElement>) => void
}

const DialogActions = (props: DialogActionsProps) => {
  const {
    children,
    onOk,
    cancelText,
    cancelButtonProps,
    okText,
    onCancel,
    okButtonProps,
  } = props

  return (
    <DialogActionsRoot>
      {children}
      {cancelText && (
        <Button color="primary" {...cancelButtonProps} onClick={onCancel}>
          {cancelText}
        </Button>
      )}
      {okText && (
        <Button color="primary" {...okButtonProps} onClick={onOk}>
          {okText}
        </Button>
      )}
    </DialogActionsRoot>
  )
}

export default DialogActions
export { DialogActions }
