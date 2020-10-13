import React from 'react'
import LensIcon from '@material-ui/icons/Lens'
import Button from '@material-ui/core/Button'

import { Text, Box, BoxProps, CountButton } from '../../../components'

import {
  Title,
  ShoppingCartItemRoot,
  ContentBox,
} from './ShoppingCartItem.style'

import { toUSD } from '../../../utils'

export type ShoppingCartItemProps = BoxProps & {
  title: string
  resto: string
  price: number
  options?: string[] | null
  quantity?: number
  onUpdate?: () => void
  onIncrement: () => void
  onDecrement: () => void
}

const ShoppingCartItem = (props: ShoppingCartItemProps) => {
  const {
    title,
    price,
    quantity = 1,
    options,
    className,
    resto,
    onIncrement,
    onDecrement,
    onUpdate,
    ...other
  } = props

  return (
    <ShoppingCartItemRoot
      className={`ShoppingCartItem ${className || ''}`}
      {...other}
    >
      <Box flexGrow={1}>
        <Title className="Title">{title}</Title>
        <Box className="subTitleBox" color="text.secondary">
          <Text variant="caption">{toUSD(price)}</Text>
          <LensIcon />
          <Text variant="caption">{resto}</Text>
        </Box>
        {options && (
          <ContentBox>
            <Text variant="body2" color="textSecondary">
              {options.join(', ')}
            </Text>
            <Button
              color="primary"
              disableRipple
              onClick={onUpdate}
              aria-label="update item"
            >
              Edit
            </Button>
          </ContentBox>
        )}
      </Box>
      <CountButton onIncrement={onIncrement} onDecrement={onDecrement}>
        {quantity}
      </CountButton>
    </ShoppingCartItemRoot>
  )
}

export { ShoppingCartItem }
export default ShoppingCartItem
