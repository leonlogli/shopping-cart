import React, { MouseEvent } from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'

import { ToolBar, ToolBarProps } from '../ToolBar'

import { FullscreenDialogHeaderRoot } from './FullscreenDialogHeader.style'

export type FullscreenDialogHeaderProps = Pick<
  ToolBarProps,
  'title' | 'children'
> & {
  actions?: React.ReactNode
  /**
   * The text of the Confirm button
   */
  okText?: string
  okButtonProps?: Omit<ButtonProps, 'onClick' | 'disabled'>
  /**
   * A callback of ok button
   */
  onOk?: (event: MouseEvent<HTMLButtonElement>) => void
  /**
   * Header left icon (typically on mobile)
   * @default back
   */
  closeIcon?: ToolBarProps['leftIcon']
  onClose?: () => void
}

const FullscreenDialogHeader = (props: FullscreenDialogHeaderProps) => {
  const {
    title,
    okText,
    onOk,
    actions,
    closeIcon = 'back',
    onClose,
    okButtonProps,
    ...other
  } = props

  return (
    <FullscreenDialogHeaderRoot elevation={0} position="static" {...other}>
      <ToolBar
        component="nav"
        title={title}
        leftIcon={closeIcon}
        onLeftIconClick={onClose as any}
        right={
          okText ? (
            <Button color="inherit" {...okButtonProps} onClick={onOk}>
              {okText}
            </Button>
          ) : (
            actions
          )
        }
      />
    </FullscreenDialogHeaderRoot>
  )
}

export default FullscreenDialogHeader
export { FullscreenDialogHeader }
