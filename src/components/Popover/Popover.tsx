import React from 'react'
import MuiPopover, {
  PopoverProps as MuiPopoverProps,
  PopoverOrigin,
} from '@material-ui/core/Popover'

export type PopoverProps = Omit<
  MuiPopoverProps,
  'open' | 'anchorOrigin' | 'transformOrigin' | 'onClose'
> & {
  /**
   * If `true`, the popover is visible.
   */
  open?: boolean
  anchorOrigin?: Partial<PopoverOrigin>
  transformOrigin?: Partial<PopoverOrigin>
  onClose?: (event?: React.MouseEvent<HTMLElement>) => void
}

const Popover = (props: PopoverProps) => {
  const {
    anchorOrigin,
    transformOrigin,
    children,
    anchorEl,
    open = !!anchorEl,
    ...other
  } = props

  return (
    <MuiPopover
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
        ...anchorOrigin,
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
        ...transformOrigin,
      }}
      anchorEl={anchorEl}
      open={open}
      {...(other as any)}
    >
      {children}
    </MuiPopover>
  )
}

export default Popover
export { Popover }
