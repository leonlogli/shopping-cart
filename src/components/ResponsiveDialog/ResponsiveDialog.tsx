import React, { MouseEvent } from 'react'
import { DialogProps } from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import {
  FullscreenDialogHeader,
  FullscreenDialogHeaderProps,
} from '../FullscreenDialogHeader'
import DialogActions, { DialogActionsProps } from '../DialogActions'

import { ResponsiveDialogRoot, Title } from './ResponsiveDialog.style'

import { useMediaQuery } from '../../hooks'

export type ResponsiveDialogProps = Omit<
  DialogProps,
  'children' | 'fullScreen' | 'onClose'
> &
  Omit<DialogActionsProps, 'children'> &
  Omit<FullscreenDialogHeaderProps, 'children'> & {
    title?: string
    children: React.ReactNode
    /**
     * Breakpoint up to which the ResponsiveDialog should exit full screen mode
     * @default 'md'
     */
    responsive?: 'md' | 'sm' | 'lg'
    /**
     * Transition component to use when the Dialog is on fullscreen mode
     */
    fullscreenTransition?: DialogProps['TransitionComponent']
    /**
     * Transition component to use when the Dialog is on windowed mode
     */
    windowedTransition?: DialogProps['TransitionComponent']
    slowOnWindowed?: boolean
  }

const ResponsiveDialog = (props: ResponsiveDialogProps) => {
  const {
    title,
    actions,
    responsive = 'md',
    okText,
    cancelText,
    children,
    onOk,
    okButtonProps,
    onCancel,
    onClose = () => null,
    closeIcon = 'back',
    fullscreenTransition,
    windowedTransition,
    slowOnWindowed = true,
    scroll = 'body',
    onClick,
    ...other
  } = props

  const onDesktop = useMediaQuery((theme) => theme.breakpoints.up(responsive))
  const deskTopTitle = onDesktop && title
  const showToolBar = !onDesktop && (title || actions)

  const hasDesktopActions = (okText || actions) && onDesktop
  const transition = onDesktop ? windowedTransition : fullscreenTransition
  const transitionDuration = { enter: 375, exit: 200 }

  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    if (onCancel) onCancel(e)
    onClose()
  }

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    if (onClick) onClick(e)

    const targetClassName = (e.target as HTMLDivElement)?.className

    if (
      typeof targetClassName === 'string' &&
      targetClassName.includes('MuiDialog-scrollBody')
    ) {
      onClose()
    }
  }

  return (
    <ResponsiveDialogRoot
      onClose={onClose}
      TransitionComponent={transition}
      scroll={scroll}
      {...other}
      {...(slowOnWindowed && onDesktop && { transitionDuration })}
      fullScreen={!onDesktop}
      disableBackdropClick={scroll === 'body'}
      onClick={handleOnClick}
    >
      {deskTopTitle && <Title id={other['aria-labelledby']}>{title}</Title>}
      {showToolBar && (
        <FullscreenDialogHeader
          title={title}
          okText={okText}
          actions={actions}
          closeIcon={closeIcon}
          okButtonProps={okButtonProps}
          onOk={onOk}
          onClose={handleCancel as any}
        />
      )}
      <DialogContent>{children}</DialogContent>
      {hasDesktopActions && (
        <DialogActions
          onCancel={handleCancel}
          cancelText={cancelText}
          okText={okText}
          onOk={onOk}
          okButtonProps={okButtonProps}
        >
          {actions}
        </DialogActions>
      )}
    </ResponsiveDialogRoot>
  )
}

export default ResponsiveDialog
export { ResponsiveDialog }
