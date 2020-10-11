import React, { ReactNode, ReactElement } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

import { BoxProps } from '../Layout'

import { ToolBarRoot, RightContainer, Title } from './ToolBar.style'

export type ToolBarProps = Pick<BoxProps, 'id' | 'className' | 'component'> & {
  /**
   * Children of the toolbar. they are placed at the left container of the toolbar
   */
  children?: ReactNode
  /**
   * Right items of the toolbar
   */
  right?: ReactNode
  /**
   * Title of the toolbar
   */
  title?: string
  /**
   * Icon to show (typically on mobile) at the left of the toolbar
   * @default 'menu' if onLeftIconClick is specified, 'undefined' otherwise
   */
  leftIcon?: 'menu' | 'back' | 'close' | ReactElement
  /**
   * Callback fired on `predefined` left icon clicked. This will not be invoked custom icon
   */
  onLeftIconClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

/**
 * Container for items such as application title, navigation icon, and action items.
 */
const ToolBar = (props: ToolBarProps) => {
  const {
    title,
    right,
    onLeftIconClick,
    children,
    leftIcon = onLeftIconClick && 'menu',
    ...other
  } = props

  const isPredefinedIcon =
    leftIcon === 'menu' || leftIcon === 'close' || leftIcon === 'back'

  return (
    <ToolBarRoot fullWidth {...other}>
      {isPredefinedIcon && (
        <IconButton
          aria-label={leftIcon as string}
          color="inherit"
          onClick={onLeftIconClick}
        >
          {leftIcon === 'menu' && <MenuIcon />}
          {leftIcon === 'close' && <CloseIcon />}
          {leftIcon === 'back' && <ArrowBackIcon />}
        </IconButton>
      )}
      {!isPredefinedIcon && leftIcon && leftIcon}
      {title && <Title>{title}</Title>}
      {children}
      {right && <RightContainer>{right}</RightContainer>}
    </ToolBarRoot>
  )
}

export { ToolBar }
export default ToolBar
