import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import IconButton from '@material-ui/core/IconButton'

import { Text } from '../Typography'

import { CountButtonRoot } from './CountButton.style'
import { BoxProps } from '../Layout'

export type CountButtonProps = BoxProps & {
  onIncrement: () => void
  onDecrement: () => void
}

const CountButton = (props: CountButtonProps) => {
  const { onIncrement, onDecrement, children, ...other } = props

  return (
    <CountButtonRoot {...other}>
      <IconButton
        size="small"
        color="inherit"
        aria-label="remove"
        onClick={onDecrement}
      >
        <RemoveIcon />
      </IconButton>
      <Text variant="button">{children}</Text>
      <IconButton
        size="small"
        color="inherit"
        aria-label="add"
        onClick={onIncrement}
      >
        <AddIcon />
      </IconButton>
    </CountButtonRoot>
  )
}

export { CountButton }
export default CountButton
