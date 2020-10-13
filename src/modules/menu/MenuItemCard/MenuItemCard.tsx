import React, { MouseEvent } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import IconButton from '@material-ui/core/IconButton'
import { PaperProps } from '@material-ui/core/Paper'

import { Box, RatioBox, Text } from '../../../components'

import { Title, MenuItemCardRoot, FooterBox } from './MenuItemCard.style'

import { toUSD } from '../../../utils'

export type MenuItemCardProps = PaperProps & {
  title: string
  description?: string
  image?: string | null
  price: number
  restaurant?: string
  onAdd?: (event: MouseEvent<HTMLButtonElement>) => void
}

const MenuItemCard = (props: MenuItemCardProps) => {
  const {
    title,
    price,
    description,
    restaurant,
    image,
    className,
    onClick,
    onAdd,
    ...other
  } = props

  const handleAddClick = (event: MouseEvent<HTMLElement>) => {
    const isAddButtonClick = event.currentTarget.tagName === 'BUTTON'

    if (onAdd && isAddButtonClick) {
      event.stopPropagation()
      onAdd(event as any)
    }
  }

  return (
    <MenuItemCardRoot
      className={`MenuItemCard ${className || ''}`}
      {...other}
      onClick={onClick}
    >
      <Box flexGrow={1}>
        {image && (
          <RatioBox ratio={55} marginTop={2}>
            <img alt={title} width="100%" height="100%" src={image} />
          </RatioBox>
        )}
        <Title className="Title">{title}</Title>
        {description && <Text>{description}</Text>}
        {restaurant && <Text>{restaurant}</Text>}
      </Box>
      <FooterBox>
        <Text>{toUSD(price)}</Text>
        <IconButton
          onClick={handleAddClick}
          aria-label="add item"
          edge="end"
          color="primary"
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </FooterBox>
    </MenuItemCardRoot>
  )
}

export { MenuItemCard }
export default MenuItemCard
