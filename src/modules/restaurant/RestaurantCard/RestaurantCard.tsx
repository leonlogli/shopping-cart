import React from 'react'

import { RatioBox, BoxProps } from '../../../components'

import {
  ContentBox,
  RestaurantCardRoot,
  Info,
  Title,
  StatusText,
} from './RestaurantCard.style'

export type RestaurantCardProps = BoxProps & {
  title: string
  category: string
  image: string
  open?: boolean
  status?: string
}

const RestaurantCard = (props: RestaurantCardProps) => {
  const {
    title,
    category,
    open = true,
    status,
    image,
    className,
    ...other
  } = props
  const classNameProp = `RestaurantCard ${className || ''}`

  return (
    <RestaurantCardRoot className={classNameProp} {...other}>
      <RatioBox ratio={80}>
        <ContentBox {...{ image }}>
          <Title className="Title">{title}</Title>
          <Info>{category}</Info>
        </ContentBox>
        <StatusText {...{ open }} variant="button">
          {status || open ? 'open' : 'closed'}
        </StatusText>
      </RatioBox>
    </RestaurantCardRoot>
  )
}

export { RestaurantCard }
export default RestaurantCard
