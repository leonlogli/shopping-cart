import React from 'react'
import { DrawerProps } from '@material-ui/core/Drawer'

import BottomSheetRoot from './BottomSheet.style'

export type BottomSheetProps = DrawerProps & {
  /**
   * BottomSheet border radius
   * @default 4
   */
  border?: string | number
}

/**
 * Bottom sheets slide up from the bottom of the screen to reveal more content.
 * These panels are intended primarily as an interaction on mobile devices where
 * they can be used as an alternative to dialogs and menus.
 */
const BottomSheet = (props: BottomSheetProps) => {
  const { border = 10, children, ...other } = props
  const borderRadius = `${Number(String(border).replace('px', ''))}px`

  return (
    <BottomSheetRoot {...{ borderRadius }} {...other} anchor="bottom">
      {children}
    </BottomSheetRoot>
  )
}

export default BottomSheet
export { BottomSheet }
